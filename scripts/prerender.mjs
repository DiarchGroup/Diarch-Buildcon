// Post-build static prerendering.
//
// The app is a client-side-only React SPA (Vite), so the raw HTML source
// normally contains nothing but the shell + "enable JavaScript" message —
// search crawlers and social-share bots that don't execute JS see an empty
// page. This script builds a real static HTML snapshot per route by
// rendering the built app in headless Chromium and writing the resulting
// markup to dist/<route>/index.html. The client bundle still loads and
// takes over normally for real visitors (see src/index.jsx).
import { preview } from 'vite';
import { chromium } from 'playwright';
import { existsSync } from 'node:fs';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FEATURED_PROJECTS } from '../src/data/mockData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const STATIC_ROUTES = [
  '/',
  '/projects',
  '/capabilities',
  '/partnerships',
  '/certifications',
  '/about',
  '/news',
  '/contact',
];

const PROJECT_ROUTES = FEATURED_PROJECTS.map((p) => `/projects/${p.slug}`);
const ROUTES = [...STATIC_ROUTES, ...PROJECT_ROUTES];

const CHROMIUM_PATH = '/opt/pw-browsers/chromium';

async function main() {
  const server = await preview({
    root,
    preview: { port: 4173, strictPort: true, host: '127.0.0.1' },
  });
  const base = server.resolvedUrls.local[0];

  const browser = await chromium.launch({
    executablePath: existsSync(CHROMIUM_PATH) ? CHROMIUM_PATH : undefined,
  });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = new URL(route, base).toString();
    await page.goto(url, { waitUntil: 'networkidle' });

    // Trigger any whileInView animations so the snapshot reflects settled content.
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((resolve) => setTimeout(resolve, 300));
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(200);

    const html = await page.evaluate(
      () => '<!doctype html>\n' + document.documentElement.outerHTML,
    );

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.slice(1), 'index.html');

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`prerendered ${route} -> ${path.relative(root, outPath)}`);
  }

  await browser.close();
  await new Promise((resolve, reject) => {
    server.httpServer.close((err) => (err ? reject(err) : resolve()));
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

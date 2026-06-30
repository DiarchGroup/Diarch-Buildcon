# Diarch Infrastructure — Corporate Website

Marketing and portfolio website for **Diarch Group**, a Class-I infrastructure contractor delivering civil, highway, and urban infrastructure projects across India.

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 19 (Vite) |
| Routing | React Router v7 |
| Styling | Tailwind CSS v3 + CSS variables |
| UI Primitives | Radix UI |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack Query + SWR |
| Icons | Lucide React |

## Prerequisites

- Node.js ≥ 18
- npm ≥ 9

## Getting Started

```bash
# 1. Clone
git clone <repo-url>
cd dinfra_cleaned

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

App runs at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server with hot reload (alias: `npm start`) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |

## Project Structure

```
src/
├── pages/          # Route-level page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Capabilities.jsx
│   ├── Partnerships.jsx
│   ├── Certifications.jsx
│   ├── About.jsx
│   ├── News.jsx
│   └── Contact.jsx
├── components/
│   ├── layout/     # Navbar, Footer, WhatsAppFAB, MobileBottomBar
│   ├── sections/   # Page section blocks (Hero, KPI, Services, …)
│   ├── common/     # Shared primitives (PageHeader, FadeUp, …)
│   └── ui/         # Radix-based UI components (button, dialog, …)
├── data/
│   └── mockData.js # Static content (projects, leadership, KPIs, …)
├── hooks/          # Custom React hooks
└── lib/
    └── utils.js    # cn() class merge helper
```

## Path Aliases

`@` maps to `src/`. Import like:

```js
import { Button } from '@/components/ui/button';
```

Configured in [vite.config.js](vite.config.js) (and [jsconfig.json](jsconfig.json) for editor resolution).

## Routing

| Path | Page |
|---|---|
| `/` | Home |
| `/projects` | Projects listing |
| `/projects/:slug` | Project detail |
| `/capabilities` | Capabilities |
| `/partnerships` | Partnerships |
| `/certifications` | Certifications |
| `/about` | About / Timeline |
| `/news` | News |
| `/contact` | Contact |

## Production Build

```bash
npm run build
```

Output in `dist/`. Deploy to any static host (Vercel, Netlify, S3 + CloudFront, etc.).

For SPA routing on static hosts, redirect all 404s to `index.html`.

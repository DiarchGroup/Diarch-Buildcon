import { useEffect } from 'react';

const SITE_URL = 'https://www.diarchbuildcon.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Sets per-page title, meta description, canonical and social tags.
 * Runs on mount/update so a static prerender snapshot captures the
 * page-specific values in the HTML source.
 */
export const useSEO = ({ title, description, path = '/', image = DEFAULT_IMAGE }) => {
  useEffect(() => {
    if (title) document.title = title;

    const canonicalUrl = `${SITE_URL}${path}`;

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    if (title) {
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }

    setLink('canonical', canonicalUrl);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:image', image);
  }, [title, description, path, image]);
};

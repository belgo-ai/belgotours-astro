import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import path from 'node:path';

export default defineConfig({
  site: 'https://belgotours.com',

  output: 'static',
  trailingSlash: 'ignore',

  adapter: netlify(),

  // El sitemap oficial es src/pages/sitemap.xml.ts (hand-written,
  // declarado en robots.txt). La integración @astrojs/sitemap se
  // retiró (B06B, 2026-08-22): generaba un sitemap paralelo sin usar
  // en /sitemap-index.xml -> /sitemap-0.xml que incluía rutas /app/*
  // del dashboard privado — ver CURRENT_GATE.md / BACKLOG.md (SEO-006).
  integrations: [
    tailwind()
  ],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
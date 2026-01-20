import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import path from 'node:path';

export default defineConfig({
  site: 'https://belgotours.com',
  output: 'static',          // ✅ antes era hybrid (ya no existe)
  trailingSlash: 'ignore',

  adapter: netlify(),        // ✅ obligatorio para prerender=false

  integrations: [tailwind()],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});

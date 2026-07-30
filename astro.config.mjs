import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://www.creationsitewebpro.com',
  output: 'hybrid',
  adapter: netlify(),
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: false,
      svg: false,
    }),
  ],
  trailingSlash: 'never',
  build: {
    // `file` émet `services.html` au lieu de `services/index.html`. Netlify sert
    // alors `/services` en 200 direct, au lieu de rediriger `/services` vers
    // `/services/`. Sitemap, canonical et URL servie coïncident enfin (H-2 de
    // l'audit GEO : 23 des 24 URLs du sitemap répondaient en 301).
    format: 'file'
  },
  vite: {
    optimizeDeps: {
      // Le site actif n'utilise aucun composant client issu de node_modules.
      // Évite que Vite analyse les anciens composants Astro non importés.
      noDiscovery: true,
    },
    ssr: {
      noExternal: ['@iconify/react']
    },
    envDir: '.',
  }
});

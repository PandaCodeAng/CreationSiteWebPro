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
    format: 'directory'
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

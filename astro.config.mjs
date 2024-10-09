import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // Import de l'adaptateur Netlify

export default defineConfig({
  output: 'server',
  adapter: netlify(), // Configurer l'adaptateur Netlify ici
  vite: {
    ssr: {
      noExternal: ['@iconify/react']
    },
    envPrefix: 'PUBLIC_',
    envDir: '.',
  }
});

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // Import de l'adaptateur Netlify

export default defineConfig({
  output: 'server',
  adapter: netlify(), // Configurer l'adaptateur Netlify ici
  vite: {
    ssr: {
      noExternal: ['@iconify/react']
    },
    define: {
      'process.env.EMAIL_USER': JSON.stringify(process.env.EMAIL_USER),
      'process.env.EMAIL_PASS': JSON.stringify(process.env.EMAIL_PASS),
    },
    envDir: '.',
  }
});

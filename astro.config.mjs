import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  vite: {
    ssr: {
      noExternal: ['@iconify/react']
    },
    // Ajoutez ceci pour que Vite charge les variables d'environnement
    envPrefix: 'PUBLIC_',
    
    // Chargez explicitement le fichier .env
    envDir: '.',
    adapter: netlify(),
  }
});
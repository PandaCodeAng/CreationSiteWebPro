import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://creationsitewebpro.com',
  output: 'server',
  adapter: netlify(),
  integrations: [
    sitemap(),
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
    ssr: {
      noExternal: ['@iconify/react']
    },
    // Nous n'avons plus besoin de ces variables d'environnement pour l'envoi d'e-mails
    // define: {
    //   'process.env.EMAIL_USER': JSON.stringify(process.env.EMAIL_USER),
    //   'process.env.EMAIL_PASS': JSON.stringify(process.env.EMAIL_PASS),
    // },
    envDir: '.',
  }
});
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://creationsitewebpro.com',
  output: 'hybrid',
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
     define: {
       'process.env.EMAIL_USER': JSON.stringify(process.env.EMAIL_USER),
       'process.env.EMAIL_PASS': JSON.stringify(process.env.EMAIL_PASS),
       'process.env.EMAIL_PORT': JSON.stringify(process.env.EMAIL_PORT),
       'process.env.EMAIL_HOST': JSON.stringify(process.env.EMAIL_HOST),
     },
    envDir: '.',
  }
});
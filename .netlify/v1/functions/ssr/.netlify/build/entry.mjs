import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BRfgDzmr.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/a-propos-agence-web-casablanca.astro.mjs');
const _page3 = () => import('./pages/agence-digitale-maroc.astro.mjs');
const _page4 = () => import('./pages/api/submit-form.astro.mjs');
const _page5 = () => import('./pages/blog/creation-site-web-casablanca-guide.astro.mjs');
const _page6 = () => import('./pages/blog/guide-creation-site-web-casablanca-2024.astro.mjs');
const _page7 = () => import('./pages/blog/guide-digitalisation-entreprise-marocaine-2024.astro.mjs');
const _page8 = () => import('./pages/blog/guide-ecommerce-maroc-site-web-performant.astro.mjs');
const _page9 = () => import('./pages/blog/prix-creation-site-web-casablanca-2024.astro.mjs');
const _page10 = () => import('./pages/blog/strategies-seo-sites-web-marocains-2024.astro.mjs');
const _page11 = () => import('./pages/blog/tendances-web-design-maroc-2024.astro.mjs');
const _page12 = () => import('./pages/blog/webpages-modernes-creation-site-web-2024.astro.mjs');
const _page13 = () => import('./pages/blog.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/creation-site-web-casablanca.astro.mjs');
const _page16 = () => import('./pages/creation-site-web-casablanca-prix.astro.mjs');
const _page17 = () => import('./pages/creation-site-web-maroc.astro.mjs');
const _page18 = () => import('./pages/faq-creation-site-web-maroc.astro.mjs');
const _page19 = () => import('./pages/mentions-legales.astro.mjs');
const _page20 = () => import('./pages/merci.astro.mjs');
const _page21 = () => import('./pages/outils/cours-action-t2s-maroc.astro.mjs');
const _page22 = () => import('./pages/politique-confidentialite.astro.mjs');
const _page23 = () => import('./pages/portfolio-realisations-web-casablanca-maroc.astro.mjs');
const _page24 = () => import('./pages/recherche.astro.mjs');
const _page25 = () => import('./pages/rss.xml.astro.mjs');
const _page26 = () => import('./pages/services/creation-application-web.astro.mjs');
const _page27 = () => import('./pages/services/e-commerce-casablanca.astro.mjs');
const _page28 = () => import('./pages/services/referencement-seo-casablanca.astro.mjs');
const _page29 = () => import('./pages/services.astro.mjs');
const _page30 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/a-propos-agence-web-casablanca.astro", _page2],
    ["src/pages/agence-digitale-maroc.astro", _page3],
    ["src/pages/api/submit-form.ts", _page4],
    ["src/pages/blog/creation-site-web-casablanca-guide.md", _page5],
    ["src/pages/blog/guide-creation-site-web-casablanca-2024.astro", _page6],
    ["src/pages/blog/guide-digitalisation-entreprise-marocaine-2024.astro", _page7],
    ["src/pages/blog/guide-ecommerce-maroc-site-web-performant.astro", _page8],
    ["src/pages/blog/prix-creation-site-web-casablanca-2024.astro", _page9],
    ["src/pages/blog/strategies-seo-sites-web-marocains-2024.astro", _page10],
    ["src/pages/blog/tendances-web-design-maroc-2024.astro", _page11],
    ["src/pages/blog/webpages-modernes-creation-site-web-2024.astro", _page12],
    ["src/pages/blog/index.astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/creation-site-web-casablanca.astro", _page15],
    ["src/pages/creation-site-web-casablanca-prix.astro", _page16],
    ["src/pages/creation-site-web-maroc.astro", _page17],
    ["src/pages/faq-creation-site-web-maroc.astro", _page18],
    ["src/pages/mentions-legales.astro", _page19],
    ["src/pages/merci.astro", _page20],
    ["src/pages/outils/cours-action-t2s-maroc.astro", _page21],
    ["src/pages/politique-confidentialite.astro", _page22],
    ["src/pages/portfolio-realisations-web-casablanca-maroc.astro", _page23],
    ["src/pages/recherche.astro", _page24],
    ["src/pages/rss.xml.ts", _page25],
    ["src/pages/services/creation-application-web.astro", _page26],
    ["src/pages/services/e-commerce-casablanca.astro", _page27],
    ["src/pages/services/referencement-seo-casablanca.astro", _page28],
    ["src/pages/services/index.astro", _page29],
    ["src/pages/index.astro", _page30]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "40511749-f3d0-42d6-8c20-7d8c8fe98337"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

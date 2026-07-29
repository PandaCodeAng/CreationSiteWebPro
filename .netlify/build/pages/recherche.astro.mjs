import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, f as defineScriptVars, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C8WqoJ9r.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D1LhETqE.mjs';
import { d as articles } from '../chunks/_articles_BzoeQQOt.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.creationsitewebpro.com");
const prerender = false;
const $$Recherche = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Recherche;
  const query = Astro2.url.searchParams.get("q") || "";
  const startTime = performance.now();
  const staticPages = [
    {
      slug: "/",
      data: {
        title: "CreationSiteWebPro \u2014 Agence web \xE0 Casablanca",
        description: "Cr\xE9ation de sites web, e-commerce, applications web et r\xE9f\xE9rencement pour les entreprises au Maroc.",
        category: "Agence",
        tags: ["agence web", "Casablanca", "Maroc", "cr\xE9ation site web"]
      }
    },
    {
      slug: "/services",
      data: {
        title: "Services de cr\xE9ation web au Maroc",
        description: "D\xE9couvrez nos services de sites web, e-commerce, applications web et r\xE9f\xE9rencement.",
        category: "Services",
        tags: ["services web", "d\xE9veloppement", "SEO", "e-commerce"]
      }
    },
    {
      slug: "/creation-site-web-casablanca",
      data: {
        title: "Cr\xE9ation de site web \xE0 Casablanca",
        description: "Conception de sites professionnels, rapides et adapt\xE9s aux objectifs des entreprises \xE0 Casablanca.",
        category: "Services",
        tags: ["cr\xE9ation site web", "Casablanca", "web design"]
      }
    },
    {
      slug: "/creation-site-web-maroc",
      data: {
        title: "Cr\xE9ation de site web au Maroc",
        description: "Accompagnement des entreprises marocaines pour concevoir un site web professionnel.",
        category: "Services",
        tags: ["cr\xE9ation site web", "Maroc", "agence web"]
      }
    },
    {
      slug: "/services/e-commerce-casablanca",
      data: {
        title: "Cr\xE9ation de site e-commerce \xE0 Casablanca",
        description: "Conception de boutiques en ligne avec catalogue, paiement, livraison et administration.",
        category: "Services",
        tags: ["e-commerce", "boutique en ligne", "Casablanca", "Maroc"]
      }
    },
    {
      slug: "/services/creation-application-web",
      data: {
        title: "Cr\xE9ation d\u2019application web sur mesure",
        description: "Conception d\u2019outils m\xE9tier, portails clients, calculateurs et tableaux de bord.",
        category: "Services",
        tags: ["application web", "outil m\xE9tier", "tableau de bord", "calculateur"]
      }
    },
    {
      slug: "/services/referencement-seo-casablanca",
      data: {
        title: "R\xE9f\xE9rencement SEO \xE0 Casablanca",
        description: "Audit et optimisation technique, \xE9ditoriale et locale pour am\xE9liorer la visibilit\xE9 d\u2019un site.",
        category: "Services",
        tags: ["SEO", "r\xE9f\xE9rencement", "Google", "Casablanca"]
      }
    },
    {
      slug: "/creation-site-web-casablanca-prix",
      data: {
        title: "Prix de cr\xE9ation d\u2019un site web \xE0 Casablanca",
        description: "Offres publi\xE9es et crit\xE8res de devis pour un projet de site web professionnel.",
        category: "Tarifs",
        tags: ["prix", "tarif", "devis", "site web"]
      }
    },
    {
      slug: "/portfolio-realisations-web-casablanca-maroc",
      data: {
        title: "Portfolio et r\xE9alisations web",
        description: "Pr\xE9sentation des projets web publi\xE9s par CreationSiteWebPro.",
        category: "Portfolio",
        tags: ["portfolio", "r\xE9alisations", "projets web"]
      }
    },
    {
      slug: "/agence-digitale-maroc",
      data: {
        title: "Agence digitale au Maroc",
        description: "Services num\xE9riques et accompagnement digital pour les entreprises marocaines.",
        category: "Agence",
        tags: ["agence digitale", "Maroc", "digitalisation"]
      }
    },
    {
      slug: "/a-propos-agence-web-casablanca",
      data: {
        title: "\xC0 propos de notre agence web",
        description: "D\xE9couvrez CreationSiteWebPro, son \xE9quipe et ses profils d\u2019auteurs.",
        category: "Agence",
        tags: ["\xE9quipe", "auteurs", "agence web", "Casablanca"]
      }
    },
    {
      slug: "/faq-creation-site-web-maroc",
      data: {
        title: "FAQ sur la cr\xE9ation de site web au Maroc",
        description: "R\xE9ponses aux questions fr\xE9quentes sur les projets web, les d\xE9lais, le SEO et l\u2019accompagnement.",
        category: "Aide",
        tags: ["FAQ", "questions", "site web", "Maroc"]
      }
    },
    {
      slug: "/contact",
      data: {
        title: "Contacter CreationSiteWebPro",
        description: "Coordonn\xE9es et formulaire pour pr\xE9senter un projet web.",
        category: "Contact",
        tags: ["contact", "devis", "Casablanca"]
      }
    },
    {
      slug: "/outils/cours-action-t2s-maroc",
      data: {
        title: "Cours de l\u2019action T2S au Maroc : calculateur de valeur",
        description: "Calculez la valeur, le gain ou la perte et le rendement de vos actions T2S \xE0 partir du cours observ\xE9.",
        category: "Outils",
        tags: ["T2S", "action", "cours", "bourse Casablanca", "IPO", "rendement"]
      }
    }
  ];
  const searchableContent = [
    ...staticPages,
    ...articles.map((article) => ({
      slug: `/blog/${article.slug}`,
      data: {
        title: article.title,
        description: article.description,
        excerpt: article.excerpt,
        category: article.category,
        publishDate: article.publishDate,
        tags: [article.category, article.author, "blog", "guide"]
      }
    }))
  ];
  function normalizeText(value) {
    return value.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function searchContent(searchQuery) {
    if (!searchQuery) return [];
    const normalizedQuery = normalizeText(searchQuery.trim());
    const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
    return searchableContent.map((result) => {
      const normalizedTitle = normalizeText(result.data.title);
      const normalizedBody = normalizeText([
        result.data.description,
        result.data.excerpt,
        result.data.category,
        result.data.tags?.join(" ")
      ].filter(Boolean).join(" "));
      let score = normalizedTitle.includes(normalizedQuery) ? 12 : 0;
      if (normalizedBody.includes(normalizedQuery)) score += 5;
      for (const term of searchTerms) {
        if (normalizedTitle.includes(term)) score += 5;
        if (normalizedBody.includes(term)) score += 2;
      }
      return { result, score };
    }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.result.data.title.localeCompare(b.result.data.title, "fr")).map(({ result }) => result);
  }
  const results = searchContent(query);
  const searchTime = Math.round(performance.now() - startTime);
  const title = query ? `R\xE9sultats pour \xAB ${query} \xBB | CreationSiteWebPro` : "Recherche | CreationSiteWebPro";
  const description = query ? `R\xE9sultats de recherche pour \xAB ${query} \xBB sur CreationSiteWebPro.` : "Recherchez une page, un service, un guide ou un outil sur CreationSiteWebPro.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonical": "https://www.creationsitewebpro.com/recherche", "noindex": true, "data-astro-cid-ylyb53ih": true }, { "default": ($$result2) => renderTemplate`${query && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n      if (typeof window.gtag === 'function') {\n        window.gtag('event', 'site_search', {\n          search_term: query,\n          search_results_count: resultsCount,\n          search_time_ms: searchTime,\n          page_location: window.location.href,\n          page_title: document.title\n        });\n      }\n    })();<\/script>"])), defineScriptVars({ query, resultsCount: results.length, searchTime }))}${maybeRenderHead()}<div class="search-results-page" data-astro-cid-ylyb53ih> <header class="search-header" data-astro-cid-ylyb53ih> <h1 data-astro-cid-ylyb53ih>Résultats de recherche</h1> <p class="search-query" data-astro-cid-ylyb53ih>Pour : "<span data-astro-cid-ylyb53ih>${query}</span>"</p> <p class="results-count" data-astro-cid-ylyb53ih>${results.length} résultat${results.length > 1 ? "s" : ""} trouvé${results.length > 1 ? "s" : ""} en ${searchTime}ms</p> </header> <section class="results-container" data-astro-cid-ylyb53ih> ${results.length > 0 ? renderTemplate`<div class="results-grid" data-astro-cid-ylyb53ih> ${results.map((result) => renderTemplate`<article class="result-card" data-astro-cid-ylyb53ih> ${result.data.image && renderTemplate`<div class="result-image" data-astro-cid-ylyb53ih> <img${addAttribute(result.data.image.src, "src")}${addAttribute(result.data.image.alt, "alt")} width="400" height="250" loading="lazy" data-astro-cid-ylyb53ih> </div>`} <div class="result-content" data-astro-cid-ylyb53ih> <h2 data-astro-cid-ylyb53ih> <a${addAttribute(result.slug, "href")} data-astro-cid-ylyb53ih>${result.data.title}</a> </h2> <p class="result-description" data-astro-cid-ylyb53ih>${result.data.excerpt || result.data.description}</p> <div class="result-meta" data-astro-cid-ylyb53ih> ${result.data.category && renderTemplate`<span class="category" data-astro-cid-ylyb53ih>${result.data.category}</span>`} ${result.data.publishDate && renderTemplate`<time${addAttribute(result.data.publishDate, "datetime")} data-astro-cid-ylyb53ih> ${new Date(result.data.publishDate).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`} </div> ${result.data.tags && result.data.tags.length > 0 && renderTemplate`<div class="result-tags" data-astro-cid-ylyb53ih> ${result.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-ylyb53ih>${tag}</span>`)} </div>`} </div> </article>`)} </div>` : renderTemplate`<div class="no-results" data-astro-cid-ylyb53ih> <p data-astro-cid-ylyb53ih>Aucun résultat trouvé pour votre recherche.</p> <div class="suggestions" data-astro-cid-ylyb53ih> <h3 data-astro-cid-ylyb53ih>Suggestions :</h3> <ul data-astro-cid-ylyb53ih> <li data-astro-cid-ylyb53ih>Vérifiez l'orthographe des mots-clés</li> <li data-astro-cid-ylyb53ih>Essayez des mots-clés différents</li> <li data-astro-cid-ylyb53ih>Utilisez des termes plus généraux</li> </ul> </div> </div>`} </section> </div> ` })} `;
}, "C:/Users/user/projets/CreationSiteWebPro/src/pages/recherche.astro", void 0);

const $$file = "C:/Users/user/projets/CreationSiteWebPro/src/pages/recherche.astro";
const $$url = "/recherche";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Recherche,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

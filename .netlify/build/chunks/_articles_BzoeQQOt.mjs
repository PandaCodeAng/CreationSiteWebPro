const SITE_URL = "https://www.creationsitewebpro.com";
const BLOG_URL = `${SITE_URL}/blog`;
const ABOUT_URL = `${SITE_URL}/a-propos-agence-web-casablanca`;
const authorProfiles = {
  "Mouhcine Talbi": {
    name: "Mouhcine Talbi",
    slug: "mouhcine-talbi"
  },
  "Zakaria Boussnini": {
    name: "Zakaria Boussnini",
    slug: "zakaria-boussnini"
  },
  "Safae Abed": {
    name: "Safae Abed",
    slug: "safae-abed"
  },
  "Ikram Talbi": {
    name: "Ikram Talbi",
    slug: "ikram-talbi"
  }
};
const articleData = [
  {
    slug: "prix-creation-site-web-casablanca-2024",
    title: "Prix de création d’un site web à Casablanca : repères 2026",
    description: "Fourchettes indicatives, postes de coût et critères à comparer pour préparer le budget d’un site web professionnel à Casablanca en 2026.",
    excerpt: "Des repères de prix indicatifs et les principaux critères à comparer avant de demander un devis pour un site web à Casablanca.",
    publishDate: "2026-05-01",
    modifiedDate: "2026-07-29",
    author: "Mouhcine Talbi",
    readingTime: "4 minutes",
    category: "Création Web Casablanca"
  },
  {
    slug: "guide-ecommerce-maroc-site-web-performant",
    title: "E-commerce au Maroc : guide de bonnes pratiques 2026",
    description: "Bonnes pratiques de conception, paiement, livraison et expérience utilisateur pour préparer un projet e-commerce au Maroc.",
    excerpt: "Les choix essentiels pour préparer une boutique en ligne adaptée aux usages, aux paiements et à la livraison au Maroc.",
    publishDate: "2026-04-10",
    modifiedDate: "2026-07-29",
    author: "Safae Abed",
    readingTime: "4 minutes",
    category: "E-commerce Maroc"
  },
  {
    slug: "guide-creation-site-web-casablanca-2024",
    title: "Guide de création d’un site web performant à Casablanca en 2026",
    description: "Méthode et bonnes pratiques pour préparer un site web professionnel, rapide et adapté aux objectifs d’une entreprise à Casablanca.",
    excerpt: "Une méthode pratique pour définir les objectifs, le contenu, l’expérience mobile, la performance et le SEO d’un site professionnel.",
    publishDate: "2026-03-20",
    modifiedDate: "2026-07-29",
    author: "Mouhcine Talbi",
    readingTime: "4 minutes",
    category: "Création Web Casablanca"
  },
  {
    slug: "strategies-seo-sites-web-marocains-2024",
    title: "SEO et recherche vocale : guide pour les sites marocains",
    description: "Conseils de structure, de contenu local et de performance pour adapter un site marocain aux recherches textuelles et vocales.",
    excerpt: "Des conseils de contenu local, de performance et de formulation pour répondre aux recherches des internautes marocains.",
    publishDate: "2026-03-05",
    modifiedDate: "2026-07-29",
    author: "Zakaria Boussnini",
    readingTime: "4 minutes",
    category: "SEO Maroc"
  },
  {
    slug: "guide-digitalisation-entreprise-marocaine-2024",
    title: "Digitaliser une entreprise marocaine : guide 2026",
    description: "Une démarche progressive pour organiser la présence en ligne, les outils métier et la relation client d’une entreprise au Maroc.",
    excerpt: "Une feuille de route progressive pour structurer la présence en ligne et les outils numériques d’une entreprise marocaine.",
    publishDate: "2026-02-20",
    modifiedDate: "2026-07-29",
    author: "Ikram Talbi",
    readingTime: "4 minutes",
    category: "Transformation Digitale"
  },
  {
    slug: "tendances-web-design-maroc-2024",
    title: "10 tendances web design 2026 à Casablanca et au Maroc",
    description: "Panorama de dix approches de design web à évaluer selon les objectifs, les contenus et les utilisateurs d’un projet au Maroc.",
    excerpt: "Dix approches de design à évaluer selon le contexte du projet, sans sacrifier la lisibilité, la performance ou l’accessibilité.",
    publishDate: "2026-02-12",
    modifiedDate: "2026-07-29",
    author: "Mouhcine Talbi",
    readingTime: "4 minutes",
    category: "Web Design Maroc"
  },
  {
    slug: "webpages-modernes-creation-site-web-2024",
    title: "Webpages modernes : concevoir un site web efficace en 2026",
    description: "Principes de conception pour créer des pages web lisibles, rapides, accessibles et adaptées aux entreprises de Casablanca et du Maroc.",
    excerpt: "Les principes essentiels d’une page web moderne : responsive design, rapidité, contenu utile, appels à l’action et accessibilité.",
    publishDate: "2026-01-15",
    modifiedDate: "2026-07-29",
    author: "Mouhcine Talbi",
    readingTime: "4 minutes",
    category: "Création Web Maroc"
  }
];
const articles = articleData.map((article) => ({
  ...article,
  url: `${BLOG_URL}/${article.slug}`
}));
function getArticleBySlug(slug) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) {
    throw new Error(`Métadonnées introuvables pour l’article : ${slug}`);
  }
  return article;
}
function getAuthorProfile(name) {
  const author = authorProfiles[name];
  return {
    ...author,
    url: `${ABOUT_URL}#${author.slug}`
  };
}
function createArticleSchema(article) {
  const author = getAuthorProfile(article.author);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${article.url}#article`,
    headline: article.title,
    description: article.description,
    url: article.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/og-image.jpg`
    },
    author: {
      "@type": "Person",
      "@id": author.url,
      name: author.name,
      url: author.url
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "CreationSiteWebPro",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`
      }
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate,
    inLanguage: "fr-MA",
    articleSection: article.category,
    isPartOf: {
      "@type": "Blog",
      "@id": `${BLOG_URL}#blog`
    }
  };
}
function createBlogSchema(name, description) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BLOG_URL}#blog`,
    name,
    description,
    url: BLOG_URL,
    inLanguage: "fr-MA",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "CreationSiteWebPro",
      url: SITE_URL
    },
    blogPost: articles.map((article) => {
      const author = getAuthorProfile(article.author);
      return {
        "@type": "BlogPosting",
        "@id": `${article.url}#article`,
        headline: article.title,
        url: article.url,
        datePublished: article.publishDate,
        dateModified: article.modifiedDate,
        author: {
          "@type": "Person",
          "@id": author.url,
          name: author.name,
          url: author.url
        },
        description: article.description
      };
    })
  };
}

export { BLOG_URL as B, SITE_URL as S, getAuthorProfile as a, createBlogSchema as b, createArticleSchema as c, articles as d, getArticleBySlug as g };

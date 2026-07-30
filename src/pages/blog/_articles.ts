import {
  LOCAL_BUSINESS_ID,
  WEBSITE_ID,
  buildPersonSchema,
  type BreadcrumbEntry
} from '../../data/business';

export const SITE_URL = 'https://www.creationsitewebpro.com';
export const BLOG_URL = `${SITE_URL}/blog`;
export const ABOUT_URL = `${SITE_URL}/a-propos-agence-web-casablanca`;

export const authorProfiles = {
  'Mouhcine Talbi': {
    name: 'Mouhcine Talbi',
    slug: 'mouhcine-talbi',
  },
  'Zakaria Boussnini': {
    name: 'Zakaria Boussnini',
    slug: 'zakaria-boussnini',
  },
  'Safae Abed': {
    name: 'Safae Abed',
    slug: 'safae-abed',
  },
  'Ikram Talbi': {
    name: 'Ikram Talbi',
    slug: 'ikram-talbi',
  },
} as const;

export type AuthorName = keyof typeof authorProfiles;

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishDate: string;
  modifiedDate: string;
  author: AuthorName;
  /** Nombre de mots du corps de l'article, mesuré et non estimé. */
  wordCount: number;
  readingTime: string;
  category: string;
  keywords: readonly string[];
  url: string;
}

/**
 * `modifiedDate` est saisi à la main et ne change que lorsque le contenu est
 * réellement édité. Il ne doit jamais être dérivé de `new Date()` ni de la date
 * de build : l'audit GEO (H-1) avait relevé que les 7 articles portaient tous la
 * date du déploiement, ce qui rendait toutes les dates du site non crédibles.
 *
 * Les 7 articles ont été étoffés et sourcés le 30/07/2026, d'où une date commune
 * pour cette révision. Les prochaines éditions doivent être datées article par
 * article.
 */
const articleData = [
  {
    slug: 'prix-creation-site-web-casablanca',
    title: 'Prix de création d’un site web à Casablanca : repères 2026',
    description: 'Fourchettes indicatives, postes de coût et critères à comparer pour préparer le budget d’un site web professionnel à Casablanca en 2026.',
    excerpt: 'Des repères de prix indicatifs et les principaux critères à comparer avant de demander un devis pour un site web à Casablanca.',
    publishDate: '2026-05-01',
    modifiedDate: '2026-07-30',
    author: 'Mouhcine Talbi',
    wordCount: 1588,
    category: 'Création Web Casablanca',
    keywords: [
      'prix création site web Casablanca',
      'tarif site vitrine Maroc',
      'budget site e-commerce Maroc',
      'devis site web Casablanca'
    ],
  },
  {
    slug: 'guide-ecommerce-maroc-site-web-performant',
    title: 'E-commerce au Maroc : guide de bonnes pratiques 2026',
    description: 'Bonnes pratiques de conception, paiement, livraison et expérience utilisateur pour préparer un projet e-commerce au Maroc.',
    excerpt: 'Les choix essentiels pour préparer une boutique en ligne adaptée aux usages, aux paiements et à la livraison au Maroc.',
    publishDate: '2026-04-10',
    modifiedDate: '2026-07-30',
    author: 'Safae Abed',
    wordCount: 1408,
    category: 'E-commerce Maroc',
    keywords: [
      'e-commerce Maroc',
      'boutique en ligne Casablanca',
      'paiement CMI',
      'livraison e-commerce Maroc'
    ],
  },
  {
    slug: 'guide-creation-site-web-casablanca',
    title: 'Guide de création d’un site web performant à Casablanca en 2026',
    description: 'Méthode et bonnes pratiques pour préparer un site web professionnel, rapide et adapté aux objectifs d’une entreprise à Casablanca.',
    excerpt: 'Une méthode pratique pour définir les objectifs, le contenu, l’expérience mobile, la performance et le SEO d’un site professionnel.',
    publishDate: '2026-03-20',
    modifiedDate: '2026-07-30',
    author: 'Mouhcine Talbi',
    wordCount: 1342,
    category: 'Création Web Casablanca',
    keywords: [
      'création site web Casablanca',
      'cahier des charges site web',
      'agence web Casablanca',
      'performance web'
    ],
  },
  {
    slug: 'strategies-seo-sites-web-marocains',
    title: 'SEO et recherche vocale : guide pour les sites marocains',
    description: 'Conseils de structure, de contenu local et de performance pour adapter un site marocain aux recherches textuelles et vocales.',
    excerpt: 'Des conseils de contenu local, de performance et de formulation pour répondre aux recherches des internautes marocains.',
    publishDate: '2026-03-05',
    modifiedDate: '2026-07-30',
    author: 'Zakaria Boussnini',
    wordCount: 1328,
    category: 'SEO Maroc',
    keywords: [
      'SEO Maroc',
      'référencement local Casablanca',
      'recherche vocale',
      'Core Web Vitals'
    ],
  },
  {
    slug: 'guide-digitalisation-entreprise-marocaine',
    title: 'Digitaliser une entreprise marocaine : guide 2026',
    description: 'Une démarche progressive pour organiser la présence en ligne, les outils métier et la relation client d’une entreprise au Maroc.',
    excerpt: 'Une feuille de route progressive pour structurer la présence en ligne et les outils numériques d’une entreprise marocaine.',
    publishDate: '2026-02-20',
    modifiedDate: '2026-07-30',
    author: 'Ikram Talbi',
    wordCount: 1164,
    category: 'Transformation Digitale',
    keywords: [
      'digitalisation entreprise Maroc',
      'transformation digitale PME',
      'outils métier',
      'loi 09-08'
    ],
  },
  {
    slug: 'tendances-web-design-maroc',
    title: '10 tendances web design 2026 à Casablanca et au Maroc',
    description: 'Panorama de dix approches de design web à évaluer selon les objectifs, les contenus et les utilisateurs d’un projet au Maroc.',
    excerpt: 'Dix approches de design à évaluer selon le contexte du projet, sans sacrifier la lisibilité, la performance ou l’accessibilité.',
    publishDate: '2026-02-12',
    modifiedDate: '2026-07-30',
    author: 'Mouhcine Talbi',
    wordCount: 1196,
    category: 'Web Design Maroc',
    keywords: [
      'web design Maroc',
      'tendances design 2026',
      'accessibilité web',
      'design responsive'
    ],
  },
  {
    slug: 'webpages-modernes-creation-site-web',
    title: 'Webpages modernes : concevoir un site web efficace en 2026',
    description: 'Principes de conception pour créer des pages web lisibles, rapides, accessibles et adaptées aux entreprises de Casablanca et du Maroc.',
    excerpt: 'Les principes essentiels d’une page web moderne : responsive design, rapidité, contenu utile, appels à l’action et accessibilité.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-07-30',
    author: 'Mouhcine Talbi',
    wordCount: 1097,
    category: 'Création Web Maroc',
    keywords: [
      'page web moderne',
      'responsive design',
      'vitesse de chargement',
      'accessibilité web'
    ],
  },
] as const;

/** 200 mots/minute, arrondi à la minute : le temps affiché suit la longueur réelle. */
function formatReadingTime(wordCount: number): string {
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} minutes`;
}

export const articles: ArticleMeta[] = articleData.map((article) => ({
  ...article,
  keywords: article.keywords,
  readingTime: formatReadingTime(article.wordCount),
  url: `${BLOG_URL}/${article.slug}`,
}));

export function getArticleBySlug(slug: string): ArticleMeta {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Métadonnées introuvables pour l’article : ${slug}`);
  }

  return article;
}

export function getAuthorProfile(name: AuthorName) {
  const author = authorProfiles[name];

  return {
    ...author,
    url: `${ABOUT_URL}#${author.slug}`,
  };
}

/** Fil d'Ariane à passer à Layout, qui ajoute l'accueil lui-même (M-13). */
export function getArticleBreadcrumbs(article: ArticleMeta): BreadcrumbEntry[] {
  return [
    { name: 'Blog', item: '/blog' },
    { name: article.title }
  ];
}

export function createArticleSchema(article: ArticleMeta) {
  const author = getAuthorProfile(article.author);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${article.url}#article`,
    headline: article.title,
    description: article.description,
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    // Auteur autoporté : jobTitle, image, description et knowsAbout viennent de
    // src/data/business.ts. Un `author` réduit à un nom et une URL ne suffit pas
    // à établir l'expertise (M-4 de l'audit GEO).
    author: buildPersonSchema(author.slug),
    publisher: {
      '@type': 'Organization',
      '@id': LOCAL_BUSINESS_ID,
      name: 'CreationSiteWebPro',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
        width: 748,
        height: 333,
      },
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate,
    inLanguage: 'fr-MA',
    articleSection: article.category,
    keywords: [...article.keywords].join(', '),
    wordCount: article.wordCount,
    timeRequired: `PT${Math.max(1, Math.round(article.wordCount / 200))}M`,
    // `speakable` désigne les zones qu'un assistant vocal peut lire à voix haute
    // (B-2 de l'audit GEO).
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead-paragraph', '.key-takeaways'],
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${BLOG_URL}#blog`,
    },
  };
}

export function createBlogSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BLOG_URL}#blog`,
    name,
    description,
    url: BLOG_URL,
    inLanguage: 'fr-MA',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: {
      '@type': 'Organization',
      '@id': LOCAL_BUSINESS_ID,
      name: 'CreationSiteWebPro',
      url: SITE_URL,
    },
    blogPost: articles.map((article) => {
      const author = getAuthorProfile(article.author);

      return {
        '@type': 'BlogPosting',
        '@id': `${article.url}#article`,
        headline: article.title,
        url: article.url,
        datePublished: article.publishDate,
        dateModified: article.modifiedDate,
        author: {
          '@type': 'Person',
          '@id': author.url,
          name: author.name,
          url: author.url,
        },
        description: article.description,
        wordCount: article.wordCount,
      };
    }),
  };
}

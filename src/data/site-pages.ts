/**
 * Registre des pages indexables et de leur date de dernière modification réelle.
 *
 * `lastModified` est saisi à la main, uniquement lorsque le contenu de la page
 * change vraiment. Il ne doit jamais être dérivé de `new Date()` ni de la date
 * de build : l'audit GEO (H-1) a montré que 24 URLs portaient la même date de
 * déploiement, y compris les mentions légales, ce qui rend toutes les dates du
 * site non crédibles aux yeux de Perplexity et des AI Overviews.
 */
export interface SitePage {
  /** Chemin servi, sans slash final. */
  path: string;
  /** Date d'édition réelle du contenu, au format YYYY-MM-DD. */
  lastModified: string;
  /** Priorité relative, uniquement indicative pour les crawlers. */
  priority?: string;
}

export const sitePages: SitePage[] = [
  { path: '/', lastModified: '2026-07-30', priority: '1.0' },
  { path: '/creation-site-web-casablanca', lastModified: '2026-07-30', priority: '0.9' },
  { path: '/creation-site-web-maroc', lastModified: '2026-07-29', priority: '0.8' },
  { path: '/agence-digitale-maroc', lastModified: '2026-07-29', priority: '0.8' },
  { path: '/creation-site-web-casablanca-prix', lastModified: '2026-07-30', priority: '0.9' },
  { path: '/agence-web-vs-freelance-vs-no-code-maroc', lastModified: '2026-07-30', priority: '0.8' },
  { path: '/services', lastModified: '2026-07-29', priority: '0.8' },
  { path: '/services/creation-application-web', lastModified: '2026-07-30', priority: '0.7' },
  { path: '/services/referencement-seo-casablanca', lastModified: '2026-07-30', priority: '0.7' },
  { path: '/services/e-commerce-casablanca', lastModified: '2026-07-30', priority: '0.7' },
  { path: '/portfolio-realisations-web-casablanca-maroc', lastModified: '2026-07-30', priority: '0.7' },
  { path: '/faq-creation-site-web-maroc', lastModified: '2026-07-30', priority: '0.7' },
  { path: '/a-propos-agence-web-casablanca', lastModified: '2026-07-29', priority: '0.6' },
  { path: '/contact', lastModified: '2026-07-30', priority: '0.6' },
  { path: '/outils/cours-action-t2s-maroc', lastModified: '2026-07-29', priority: '0.5' },
  { path: '/mentions-legales', lastModified: '2026-07-29', priority: '0.3' },
  { path: '/politique-confidentialite', lastModified: '2026-07-29', priority: '0.3' },
  { path: '/conditions-generales-de-vente', lastModified: '2026-07-30', priority: '0.3' },
  { path: '/blog', lastModified: '2026-07-30', priority: '0.7' }
];

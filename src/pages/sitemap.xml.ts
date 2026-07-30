import type { APIRoute } from 'astro';
import { articles, SITE_URL } from './blog/_articles';
import { sitePages } from '../data/site-pages';

export const prerender = true;

/**
 * Sitemap généré à partir de dates d'édition réelles (H-1 de l'audit GEO).
 *
 * Les `loc` sont écrites sans slash final, exactement comme les URLs servies
 * (`build.format: 'file'`) et comme les `canonical` : les trois formes doivent
 * coïncider, sinon 23 URLs sur 24 répondent en 301 (H-2).
 */
export const GET: APIRoute = () => {
  const entries = [
    ...sitePages.map((page) => ({
      loc: page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`,
      lastmod: page.lastModified,
      priority: page.priority
    })),
    ...articles.map((article) => ({
      loc: article.url,
      lastmod: article.modifiedDate,
      priority: '0.6'
    }))
  ];

  const urls = entries
    .map(
      ({ loc, lastmod, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>${priority ? `\n    <priority>${priority}</priority>` : ''}
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

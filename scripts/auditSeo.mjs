import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const siteOrigin = 'https://www.creationsitewebpro.com';
const errors = [];
const warnings = [];

const exists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : entryPath;
  }));
  return files.flat();
};

const count = (html, pattern) => [...html.matchAll(pattern)].length;
const first = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? '';
const tags = (html, tagName) => [
  ...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi'))
].map((match) => match[0]);
const attribute = (tag, name) => {
  const match = tag.match(
    new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i')
  );
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? '';
};
const hasAttribute = (tag, name) => new RegExp(`(?:^|\\s)${name}(?:\\s*=|\\s|>)`, 'i').test(tag);
const withAttribute = (tagList, name, value) => tagList.filter(
  (tag) => attribute(tag, name).toLowerCase() === value.toLowerCase()
);
const normalizeRoute = (value) => {
  const route = value.split('#')[0].split('?')[0].replace(/\/+$/, '');
  return route || '/';
};

const routeFromHtml = (filePath) => {
  const relative = path.relative(distDir, filePath).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'/index.html'.length)}`;
  return `/${relative.replace(/\.html$/, '')}`;
};

const htmlFiles = (await walk(distDir)).filter((filePath) => filePath.endsWith('.html'));
const pages = [];

for (const filePath of htmlFiles) {
  const html = await readFile(filePath, 'utf8');
  const route = routeFromHtml(filePath);
  const metaTags = tags(html, 'meta');
  const linkTags = tags(html, 'link');
  const descriptionTags = withAttribute(metaTags, 'name', 'description');
  const robotsTags = withAttribute(metaTags, 'name', 'robots');
  const canonicalTags = withAttribute(linkTags, 'rel', 'canonical');
  const ogTitleTags = withAttribute(metaTags, 'property', 'og:title');
  const ogDescriptionTags = withAttribute(metaTags, 'property', 'og:description');
  const ogUrlTags = withAttribute(metaTags, 'property', 'og:url');
  const title = first(html, /<title>([\s\S]*?)<\/title>/i);
  const description = attribute(descriptionTags[0] ?? '', 'content');
  const canonical = attribute(canonicalTags[0] ?? '', 'href');
  const robots = attribute(robotsTags[0] ?? '', 'content');
  const isNoindex = robots.includes('noindex');

  const requiredSingles = [
    ['title', count(html, /<title\b/gi)],
    ['meta description', descriptionTags.length],
    ['meta robots', robotsTags.length],
    ['canonical', canonicalTags.length],
    ['Open Graph title', ogTitleTags.length],
    ['Open Graph description', ogDescriptionTags.length],
    ['Open Graph URL', ogUrlTags.length]
  ];

  for (const [label, total] of requiredSingles) {
    if (total !== 1) errors.push(`${route}: ${label} présent ${total} fois`);
  }

  const h1Count = count(html, /<h1\b/gi);
  if (h1Count !== 1) errors.push(`${route}: H1 présent ${h1Count} fois`);

  const mainCount = count(html, /<main\b/gi);
  if (mainCount !== 1) errors.push(`${route}: balise main présente ${mainCount} fois`);

  for (const imageTag of tags(html, 'img')) {
    const source = attribute(imageTag, 'src') || 'source inconnue';
    if (!hasAttribute(imageTag, 'alt')) errors.push(`${route}: image sans attribut alt (${source})`);
    if (!hasAttribute(imageTag, 'width') || !hasAttribute(imageTag, 'height')) {
      warnings.push(`${route}: dimensions d'image absentes (${source})`);
    }
  }

  if (!canonical.startsWith(siteOrigin)) {
    errors.push(`${route}: canonical hors du domaine www (${canonical || 'absent'})`);
  }

  if (!isNoindex && canonical !== `${siteOrigin}${route === '/' ? '/' : route}`) {
    errors.push(`${route}: canonical inattendu (${canonical})`);
  }

  if (!isNoindex && title.length > 65) warnings.push(`${route}: title long (${title.length} caractères)`);
  if (!isNoindex && (description.length < 70 || description.length > 165)) {
    warnings.push(`${route}: meta description de ${description.length} caractères`);
  }

  const jsonLdBlocks = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => attribute(match[1], 'type') === 'application/ld+json')
    .map((match) => match[2]);

  for (const jsonLd of jsonLdBlocks) {
    try {
      JSON.parse(jsonLd);
    } catch (error) {
      errors.push(`${route}: JSON-LD invalide (${error.message})`);
    }
  }

  if (jsonLdBlocks.length === 0) warnings.push(`${route}: aucun JSON-LD`);

  const closingHtml = html.toLowerCase().lastIndexOf('</html>');
  if (closingHtml < 0) {
    errors.push(`${route}: balise </html> absente`);
  } else if (html.slice(closingHtml + 7).trim()) {
    errors.push(`${route}: contenu présent après </html>`);
  }

  pages.push({ route, filePath, html, title, description, canonical, isNoindex });
}

const indexablePages = pages.filter((page) => !page.isNoindex);
for (const field of ['title', 'description', 'canonical']) {
  const values = new Map();
  for (const page of indexablePages) {
    const value = page[field];
    if (!value) continue;
    const routes = values.get(value) ?? [];
    routes.push(page.route);
    values.set(value, routes);
  }
  for (const [value, routes] of values) {
    if (routes.length > 1) errors.push(`${field} dupliqué sur ${routes.join(', ')}: ${value}`);
  }
}

const generatedRoutes = new Set(pages.map((page) => page.route));
const virtualRoutes = new Set(['/recherche']);
for (const page of pages) {
  for (const anchorTag of tags(page.html, 'a')) {
    const href = attribute(anchorTag, 'href');
    if (!href.startsWith('/')) continue;
    const route = normalizeRoute(href);
    if (
      route.startsWith('/api/') ||
      route.startsWith('/.netlify/') ||
      route.startsWith('/_astro/') ||
      path.extname(route)
    ) continue;

    if (!generatedRoutes.has(route) && !virtualRoutes.has(route)) {
      errors.push(`${page.route}: lien interne sans route générée (${route})`);
    }
  }

  const assetUrls = [];
  const assetTags = [
    ...tags(page.html, 'img'),
    ...tags(page.html, 'source'),
    ...tags(page.html, 'video')
  ];
  for (const assetTag of assetTags) {
    const source = attribute(assetTag, 'src') || attribute(assetTag, 'poster');
    if (source.startsWith('/')) assetUrls.push(source);

    const sourceSet = attribute(assetTag, 'srcset');
    for (const candidate of sourceSet.split(',').filter(Boolean)) {
      assetUrls.push(candidate.trim().split(/\s+/)[0]);
    }
  }

  for (const assetUrl of new Set(assetUrls)) {
    const cleanUrl = assetUrl.split('?')[0].split('#')[0];
    if (cleanUrl.startsWith('/_image')) continue;
    const assetPath = path.join(distDir, cleanUrl.replace(/^\//, ''));
    if (!(await exists(assetPath))) {
      errors.push(`${page.route}: ressource interne absente (${cleanUrl})`);
    }
  }
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('sitemap.xml: URL dupliquée');

for (const sitemapUrl of sitemapUrls) {
  if (!sitemapUrl.startsWith(siteOrigin)) {
    errors.push(`sitemap.xml: domaine canonique incorrect (${sitemapUrl})`);
    continue;
  }
  const route = normalizeRoute(new URL(sitemapUrl).pathname);
  const page = pages.find((item) => item.route === route);
  if (!page) errors.push(`sitemap.xml: route absente du build (${route})`);
  if (page?.isNoindex) errors.push(`sitemap.xml: route noindex incluse (${route})`);
}

for (const page of indexablePages) {
  if (page.route === '/404') continue;
  if (!sitemapUrls.includes(page.canonical)) {
    errors.push(`${page.route}: page indexable absente du sitemap`);
  }
}

console.log(`${pages.length} pages HTML contrôlées, ${sitemapUrls.length} URL dans le sitemap.`);
for (const warning of warnings) console.warn(`AVERTISSEMENT: ${warning}`);
for (const error of errors) console.error(`ERREUR: ${error}`);

if (errors.length > 0) {
  process.exitCode = 1;
} else {
  console.log(`Audit SEO réussi avec ${warnings.length} avertissement(s).`);
}

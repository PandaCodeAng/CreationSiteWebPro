# Agent Instructions — CreationSiteWebPro

Astro 4 + Netlify website for a Moroccan web agency (French language). Hybrid SSG/SSR output.

## Commands

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # prebuild (optimize images+SVGs) → astro build → dist/
npm run preview      # Preview production build locally
npm run optimize-images  # scripts/optimizeImages.js (sharp → WebP in public/images/optimized/)
npm run optimize-svg     # scripts/optimizeSvg.js (svgo)
```

> `prebuild` runs automatically before every `npm run build`. If `optimizeImages.js` fails, the build stops entirely.

## Architecture

```
src/layouts/Layout.astro       ← Single root layout — SEO, fonts, FixedHeader3, Footer
src/pages/                     ← File-based routing (.astro + one .md)
  blog/                        ← Blog articles as standalone .astro files (NOT content collection-driven)
  services/                    ← 4 service pages
  api/                         ← SSR endpoints proxied to /.netlify/functions/* via netlify.toml
src/components/                ← 17 Astro components
  FixedHeader3.astro           ← ACTIVE header (FixedHeader.astro and FixedHeader2.astro are dead code)
src/content/config.ts          ← Defines "blog" and "pages" Zod schemas (blog collection largely unused)
src/services/emailService.ts   ← Shared email service included in Netlify function bundle
netlify/functions/             ← Three co-existing email strategies (see Email section)
scripts/                       ← Image/SVG optimization scripts (Node.js, not Astro)
```

## Styling

- Plain CSS — no Tailwind or CSS framework
- Design tokens in `src/styles/global.css` `:root` (colors, typography, layout — see `--color-*`, `--font-*`)
- BEM class naming on components (e.g., `header__container`, `header__nav-list`)
- Component-scoped styles in each `.astro` `<style>` block
- `global.css` imports `responsive.css` and `animations.css`

## TypeScript & Path Aliases

```json
// tsconfig.json aliases
"@components/*" → "src/components/*"
"@layouts/*"    → "src/layouts/*"
"@utils/*"      → "src/utils/*"
```
Mixed JS/TS codebase (`allowJs: true`). React JSX configured for `@iconify/react`.

## Images

1. Place source images in `public/images/`
2. Run `npm run optimize-images` → generates WebP in `public/images/optimized/`
3. Use `<OptimizedImage>` component (`src/components/OptimizedImage.astro`) for `<picture>` with WebP/fallback

## SEO Conventions

- `<SEO>` component (astro-seo) + `<JsonLd>` used in every page via `Layout.astro`
- `napInfo` object in `Layout.astro` centralizes NAP data (Name/Address/Phone) for local SEO
- Always pass a `canonical` prop to `Layout` — the default fallback is the homepage URL (bug risk)
- `public/sitemap.xml` is **static/manual** — keep it updated when adding pages

## Email / Netlify Functions

Three strategies exist in `netlify/functions/` — do not add a fourth:

| File | Mechanism |
|---|---|
| `send-dual-emails.js` | Web3Forms REST API via axios |
| `send-email.js` | SMTP via nodemailer (env vars: `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`) |
| `submit-form.js` | Form submission handler |

`/api/*` requests are proxied to `/.netlify/functions/:splat` (see `netlify.toml`).

## Known Issues to Avoid Making Worse

- **API key in source**: `netlify/functions/send-dual-emails.js` has a hardcoded Web3Forms key — don't add more hardcoded secrets; use env vars
- **Unused dependencies**: `@astrojs/node` and `googleapis` are installed but unused
- **Dead header components**: `FixedHeader.astro` and `FixedHeader2.astro` — don't modify them, only `FixedHeader3.astro` is active
- **Blog articles**: Articles in `src/pages/blog/` are standalone `.astro` files, not fetched from the `src/content/blog/` collection — maintain that pattern unless explicitly migrating

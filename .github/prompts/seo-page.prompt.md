---
description: "Créer une nouvelle page Astro SEO-optimisée avec Layout, canonical, JsonLd, Breadcrumbs et NAP prêts à l'emploi"
argument-hint: "Nom/slug et objectif de la page (ex: 'refonte-site-web-casablanca — page service pour la refonte')"
agent: agent
---

Crée une nouvelle page Astro SEO-optimisée dans ce projet en respectant toutes les conventions du site.

## Arguments de la tâche

L'argument fourni décrit la page à créer : `$args`

Déduis le **slug URL** (kebab-case), le **titre SEO** (60 car. max), la **méta-description** (160 car. max), le **type de page** (service / blog / standard) et le **chemin de fichier** à partir de cet argument.

## Fichiers de référence

- Architecture et conventions : [AGENTS.md](../../AGENTS.md)
- Layout racine (props obligatoires, napInfo) : [src/layouts/Layout.astro](../../src/layouts/Layout.astro)
- Exemple page service complète : [src/pages/services/referencement-seo-casablanca.astro](../../src/pages/services/referencement-seo-casablanca.astro)
- Exemple page standard : [src/pages/a-propos-agence-web-casablanca.astro](../../src/pages/a-propos-agence-web-casablanca.astro)

## Structure obligatoire à générer

```astro
---
import Layout from '../layouts/Layout.astro';          // adapter le chemin relatif selon le dossier
import CTAButton from '../components/CTAButton.astro';
import OptimizedImage from '../components/OptimizedImage.astro';
import JsonLd from '../components/JsonLd.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';

// --- SEO ---
const pageTitle = "[Titre SEO — 60 car. max]";
const pageDescription = "[Méta-description — 160 car. max, inclure Casablanca/Maroc]";
const pageCanonical = "https://www.creationsitewebpro.com/[slug-de-la-page]";

// --- Fil d'Ariane ---
const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  // Ajouter un niveau intermédiaire si sous-dossier (ex: Services, Blog)
  { name: '[Nom de la page]' }           // dernière entrée sans url
];

// --- JSON-LD ---
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",                    // ou Service / BlogPosting / FAQPage selon le contenu
  "name": pageTitle,
  "description": pageDescription,
  "url": pageCanonical,
  "provider": {
    "@type": "LocalBusiness",
    "name": "CreationSiteWebPro",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    }
  }
};
---

<Layout title={pageTitle} description={pageDescription} canonical={pageCanonical}>
  <JsonLd data={schemaData} />

  <main class="[slug-kebab-case]">
    <Breadcrumbs items={breadcrumbItems} />
    <h1>{pageTitle}</h1>
    <!-- Contenu de la page -->
  </main>
</Layout>
```

## Règles impératives

1. **`canonical` est TOUJOURS passé explicitement** — ne jamais laisser le prop vide ou absent (le fallback de Layout pointe sur la homepage, ce qui pollue l'index Google).
2. **`pageCanonical` = `https://www.creationsitewebpro.com/[slug]`** — URL absolue, sans slash final.
3. **`<JsonLd>` placé immédiatement après `<Layout>`**, avant tout autre contenu.
4. **`<Breadcrumbs>`** est le premier élément dans `<main>`, avant le `<h1>`.
5. **Importer uniquement les composants réellement utilisés** dans le fichier.
6. **Ajouter l'URL dans `public/sitemap.xml`** — le sitemap est statique et manuel.

## Adaptation selon le type de page

| Type | `@type` JSON-LD | Chemin fichier | Imports supplémentaires |
|---|---|---|---|
| Service | `Service` | `src/pages/services/[slug].astro` | `Icon.astro` souvent utile |
| Article blog | `BlogPosting` | `src/pages/blog/[slug].astro` | Ajouter `author`, `datePublished` dans schemaData |
| FAQ | `FAQPage` | `src/pages/[slug].astro` | Construire `mainEntity` avec les Q/R |
| Standard | `WebPage` | `src/pages/[slug].astro` | — |

## Livraison finale

1. Crée le fichier `.astro` au bon chemin avec la structure complète ci-dessus.
2. Ajoute l'entrée `<url>` correspondante dans `public/sitemap.xml`.
3. Confirme les deux fichiers modifiés.

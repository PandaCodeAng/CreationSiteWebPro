---
description: "Recherche les mots-clés les plus cherchés sur Google pour le marché marocain du web, et les associe aux pages existantes du site"
argument-hint: "Mot-clé seed ou thème (ex: 'création site web', 'agence digitale casablanca')"
agent: agent
---

Tu es un expert SEO spécialisé dans le marché marocain francophone. Lance une recherche approfondie de mots-clés à partir de l'argument fourni : `$args`

## Étape 1 — Inventaire des pages existantes

Lis les fichiers suivants pour connaître les pages du site et leurs mots-clés actuels :
- [src/pages/index.astro](../../src/pages/index.astro) — homepage
- [src/pages/creation-site-web-maroc.astro](../../src/pages/creation-site-web-maroc.astro)
- [src/pages/agence-digitale-maroc.astro](../../src/pages/agence-digitale-maroc.astro)
- [src/pages/services/referencement-seo-casablanca.astro](../../src/pages/services/referencement-seo-casablanca.astro)
- [src/pages/services/creation-site-web-casablanca.astro](../../src/pages/services/creation-site-web-casablanca.astro)
- [src/pages/services/e-commerce-casablanca.astro](../../src/pages/services/e-commerce-casablanca.astro)
- [src/pages/services/creation-application-web.astro](../../src/pages/services/creation-application-web.astro)

Pour chaque page, relève : title, description, H1, URL.

## Étape 2 — Recherche de mots-clés via Google Suggest

Utilise l'outil de récupération web pour interroger l'API Google Autocomplete sur ces patterns :
- `https://suggestqueries.google.com/complete/search?q=creation+site+web+maroc&client=firefox&hl=fr`
- `https://suggestqueries.google.com/complete/search?q=agence+digitale+casablanca&client=firefox&hl=fr`
- `https://suggestqueries.google.com/complete/search?q=creation+site+web+casablanca&client=firefox&hl=fr`
- `https://suggestqueries.google.com/complete/search?q=seo+casablanca&client=firefox&hl=fr`
- `https://suggestqueries.google.com/complete/search?q=agence+web+maroc&client=firefox&hl=fr`

Adapte les requêtes à l'argument `$args` si fourni.

## Étape 3 — Analyse et classement

Produis un tableau de mots-clés avec :

| Mot-clé | Volume estimé | Intent | Difficulté | Page actuelle | Action |
|---|---|---|---|---|---|
| création site web maroc | Élevé | Commercial | Haute | creation-site-web-maroc.astro | Optimiser |
| ... | | | | | |

Légende des actions :
- **Optimiser** → page existante à améliorer (ne pas créer de doublon)
- **Créer** → nouvelle page nécessaire (gap de contenu)
- **Cibler** → ajouter en mot-clé secondaire sur une page existante

## Étape 4 — Recommandations prioritaires

Classe par priorité (impact / effort) les 10 mots-clés à traiter en premier.

Pour chaque recommandation, indique :
1. La page à modifier ou créer
2. Les modifications minimales sûres (title, H1, contenu, schema)
3. Le risque sur le positionnement actuel (faible / moyen / élevé)

## Règles de sécurité absolues

- Ne JAMAIS suggérer de changer les slugs/URLs des pages existantes
- Ne JAMAIS suggérer de supprimer du contenu déjà en ligne
- Les modifications de title/H1 sont à considérer comme **risque moyen** — proposer uniquement si le gain est certain

---

Pour appliquer les optimisations identifiées, utilise ensuite `/seo-optimize`.

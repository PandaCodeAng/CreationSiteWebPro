---
description: "Audite une page existante du site contre ses mots-clés cibles et retourne un score SEO + liste de corrections priorisées"
argument-hint: "Chemin de la page à auditer + mot-clé cible (ex: 'src/pages/creation-site-web-maroc.astro | création site web maroc')"
agent: agent
---

Tu es un auditeur SEO expert. Audite la page spécifiée et génère un rapport actionnable.

Argument : `$args`
Parse l'argument : `[chemin_fichier] | [mot-clé cible]`

## Étape 1 — Lecture de la page

Lis le fichier de la page indiqué dans l'argument. Extrais :
- `pageTitle` / `title` prop
- `pageDescription` / `description` prop
- `canonical` prop (⚠️ critique — absence = bug)
- H1, H2, H3 utilisés
- Contenu textuel principal
- `schemaData` / JSON-LD présent
- Présence de `<Breadcrumbs>`
- Images : attributs `alt`

## Étape 2 — Analyse on-page

Évalue chaque critère et attribue un score sur 10 :

| Critère | Score | Problème détecté |
|---|---|---|
| Title (présence mot-clé, longueur 50-60 car.) | /10 | |
| Meta description (160 car., CTA, mot-clé) | /10 | |
| Canonical explicite | ✅/❌ | |
| H1 unique + mot-clé principal | /10 | |
| H2/H3 structurés (mot-clés secondaires) | /10 | |
| Densité mot-clé (2-3%, pas de sur-optimisation) | /10 | |
| JSON-LD présent et correct (@type adapté) | /10 | |
| Images avec alt descriptifs | /10 | |
| Breadcrumbs présents | ✅/❌ | |
| Maillage interne (liens vers autres pages du site) | /10 | |

**Score total : XX/100**

## Étape 3 — Analyse SERP concurrents

Récupère les 3 premiers résultats Google pour le mot-clé cible via une recherche web.
Compare leur structure (title, H1, longueur contenu) à la page auditée.

## Étape 4 — Rapport de corrections

Produis une liste priorisée de corrections, du plus impactant au moins risqué :

### 🔴 Critique (à corriger en priorité)
- Problème précis + correction exacte à apporter

### 🟡 Important (gain significatif, risque faible)
- Problème précis + correction exacte

### 🟢 Optimisation (nice-to-have)
- Problème précis + correction exacte

## Règles de sécurité

- Si la page est déjà bien positionnée sur Google (le canonical existe, le title contient le mot-clé), signaler les suggestions de modification de H1/title comme **risque moyen**
- Ne jamais suggérer de changer le nom du fichier ou l'URL de la page
- Prioriser les ajouts de contenu plutôt que les suppressions

---

Pour appliquer les corrections identifiées, utilise `/seo-optimize [chemin_fichier] | [mot-clé]`.

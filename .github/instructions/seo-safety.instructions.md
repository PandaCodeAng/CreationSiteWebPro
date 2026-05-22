---
applyTo: "src/pages/**/*.astro"
description: "Règles de sécurité SEO — protège le positionnement Google existant lors de toute modification de page"
---

# Règles SEO — Pages Astro

Ces règles s'appliquent à toute modification d'un fichier dans `src/pages/`.

## 🔒 Intouchables (risque de perte de ranking immédiate)

- **Nom du fichier / slug URL** → Ne JAMAIS renommer un fichier `.astro` existant. Un changement de nom = changement d'URL = perte de tout le juice SEO accumulé.
- **Prop `canonical`** → Si elle est déjà définie, ne JAMAIS la supprimer ni la modifier. Si elle est absente, l'AJOUTER (`canonical="https://www.creationsitewebpro.com/[slug]"`).
- **H1 d'une page déjà bien positionnée** → Modifier le H1 est un risque moyen. Préférer enrichir le contenu autour plutôt que toucher le H1.

## ⚠️ Modifications à risque moyen (confirmer avant de faire)

- `pageTitle` → Toujours garder le keyword principal déjà présent. Longueur cible : 50-60 caractères.
- `pageDescription` → Longueur cible : 140-160 caractères. Ne modifier que si la règle de longueur est violée ou si le mot-clé cible est totalement absent.
- `schemaData["@type"]` et `schemaData["name"]` → Ne pas changer le type ou le nom d'un schema existant.

## ✅ Modifications sûres (ajout pur)

- Nouvelles sections `<section>` avec H2/H3
- Enrichissement du `schemaData` (ajout de champs comme `offers`, `faqPage`, `aggregateRating`)
- Nouveaux liens internes vers d'autres pages du site
- Enrichissement des attributs `alt` des images
- Ajout de contenu FAQ en bas de page

## Checklist avant commit d'une page modifiée

- [ ] `canonical` est présent et pointe sur la bonne URL absolue
- [ ] Nom du fichier inchangé
- [ ] `pageTitle` contient toujours le keyword principal original
- [ ] `public/sitemap.xml` à jour si nouvelle page ajoutée
- [ ] JSON-LD syntaxiquement valide (pas de virgule finale manquante)

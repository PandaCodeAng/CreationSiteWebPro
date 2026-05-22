---
description: "Optimise une page Astro existante pour un mot-clé cible sans casser son positionnement actuel sur Google"
argument-hint: "Chemin de la page + mot-clé cible (ex: 'src/pages/agence-digitale-maroc.astro | agence digitale casablanca')"
agent: agent
---

Tu es un expert SEO on-page. Optimise la page spécifiée pour le mot-clé cible de façon **chirurgicale** — uniquement des ajouts, pas de suppressions, aucun changement d'URL.

Argument : `$args`
Parse : `[chemin_fichier] | [mot-clé cible]`

## Conventions du projet

- Architecture et imports : [AGENTS.md](../../AGENTS.md)
- Layout (props title/description/canonical) : [src/layouts/Layout.astro](../../src/layouts/Layout.astro)

## Étape 1 — Lecture et analyse

Lis le fichier complet de la page. Identifie :
1. Le `canonical` actuel → **NE PAS MODIFIER, NE PAS SUPPRIMER**
2. Le `pageTitle` actuel et sa longueur
3. La `pageDescription` actuelle
4. Le contenu existant qui positionne déjà la page

## Étape 2 — Planification des modifications (présente AVANT d'éditer)

Liste toutes les modifications envisagées avec leur niveau de risque :

| Modification | Type | Risque | Justification |
|---|---|---|---|
| Ajouter mot-clé dans title | Édition | Moyen | Améliore la pertinence |
| Ajouter section H2 | Ajout | Faible | Nouveau contenu |
| Enrichir JSON-LD | Ajout | Faible | Meilleure structuration |
| ... | | | |

**Attends une confirmation implicite** (continue si l'utilisateur ne répond pas dans les 30 secondes).

## Étape 3 — Application des modifications

### Règles d'édition strictes

**🔒 NE JAMAIS modifier :**
- Le nom du fichier et l'URL de la page
- Le `canonical` existant
- Les liens internes entrants (ne pas casser les ancres)
- Le contenu qui contient déjà des mots-clés performants

**✅ AUTORISÉ (par ordre de priorité / risque croissant) :**

1. **Enrichir le JSON-LD** — Ajouter des champs (`offers`, `review`, `aggregateRating`, `faqPage`), toujours en complément, jamais en remplacement. `@type` et `name` existants sont intouchables.

2. **Ajouter des sections H2/H3** — Injecter du contenu ciblant le mot-clé secondaire. Minimum 150 mots par section ajoutée. Placer après le contenu existant.

3. **Enrichir les attributs `alt` des images** — Ajouter le mot-clé géolocalisé si absent (ex: `alt="agence web casablanca — logo"`).

4. **Ajouter du maillage interne** — Lier vers une autre page du site qui cible un mot-clé complémentaire.

5. **Modifier la `pageDescription`** — Uniquement si elle est < 140 ou > 165 caractères, ou si le mot-clé cible est totalement absent. Garder le sens original.

6. **⚠️ Modifier le `pageTitle`** — Risque élevé. Ne faire que si : (a) le mot-clé cible est totalement absent ET (b) la page n'est PAS déjà en position 1-5 sur ce keyword. Toujours garder le keyword principal déjà dans le title.

### Format des modifications

Pour chaque modification, utilise `replace_string_in_file` avec au moins 5 lignes de contexte autour.

## Étape 4 — Vérification post-modification

Après édition, relis le fichier et vérifie :
- [ ] `canonical` inchangé
- [ ] Nom du fichier inchangé
- [ ] Contenu original conservé (rien de supprimé)
- [ ] Syntaxe Astro valide (pas de balises non fermées, imports corrects)
- [ ] Le mot-clé cible apparaît naturellement dans : title, H1 ou H2, et un paragraphe de contenu

## Étape 5 — Résumé des changements

Indique en une liste claire :
- Ce qui a été modifié (avec avant/après pour title et description)
- Ce qui a été ajouté
- Ce qui n'a PAS été touché et pourquoi

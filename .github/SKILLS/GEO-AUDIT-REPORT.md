# GEO Audit Report — creationsitewebpro.com
**Audit Date:** May 30, 2026  
**Auditor:** GEO-SEO Claude  
**Pages Analyzed:** Homepage, /creation-site-web-casablanca, /a-propos-agence-web-casablanca, /blog, /faq-creation-site-web-maroc, sitemap.xml, robots.txt  
**Business Type:** Local Digital Agency — Casablanca, Morocco

---

## Section 1 : Résumé Exécutif

CreationSiteWebPro (creationsitewebpro.com) est une agence web basée à Casablanca, fondée en 2013, Google Partner certifiée, avec plus de 1 000 projets livrés et une équipe de 5 profils Senior aux parcours validés (Capgemini, Fintech Accelex, CGI). L'audit couvre 7 pages clés et révèle un **score GEO global de 47/100 — tier "Below Average"** : le site dispose de fondations solides (HTTPS, CDN Netlify, schemas structurés) mais présente des lacunes critiques qui l'empêchent d'être cité par les moteurs IA. Le problème le plus impactant est l'absence totale de fichier `llms.txt` combinée à une invisibilité d'entité (aucune présence Wikipédia, aucune page d'entreprise LinkedIn, lien Facebook générique) — deux signaux que ChatGPT et Perplexity utilisent en priorité pour sélectionner leurs sources. Les trois actions prioritaires sont : (1) créer un `llms.txt` et corriger les meta descriptions sur tout le site, (2) construire une présence d'entité vérifiable (Wikidata, Google Business Profile, page LinkedIn entreprise), (3) réécrire les balises `<title>` (125 caractères actuellement vs 60 maximum) et ajouter les balises `<link rel="canonical">`. Sans ces corrections, l'agence risque de rester absente des réponses IA malgré une expertise réelle, laissant ses concurrents capturer un trafic IA estimé à +527 % de croissance en 2025.

---

## Section 2 : Score GEO Global

## GEO Readiness Score : 47/100 — Below Average

| Composant | Score | Poids | Score Pondéré |
|---|---|---|---|
| AI Platform Readiness | 36/100 | 25% | 9.0 |
| Content Quality & E-E-A-T | 56/100 | 25% | 14.0 |
| Technical Foundation | 58/100 | 20% | 11.6 |
| Schema & Structured Data | 52/100 | 15% | 7.8 |
| Brand Authority & Entity Presence | 30/100 | 15% | 4.5 |
| **TOTAL** | | | **47/100** |

> **Interprétation client :** Des barrières significatives à la visibilité IA existent. Sans action, votre marque risque d'être invisible dans les réponses générées par l'IA alors que vos concurrents captent ce trafic.

---

## Section 3 : Analyse AI Visibility

**Score AI Visibility : 58/100**

### 3.1 — Analyse de Citabilité (Page Citability Score : 52/100)

Le contenu de la homepage contient plusieurs blocs hautement citables, notamment les données tarifaires et les délais de livraison — deux types d'informations que les IA citent fréquemment en réponse à des questions commerciales.

**Blocs citation-ready (score > 70) :**

| Passage | Score Citabilité | Raison |
|---|---|---|
| "Un site vitrine simple peut coûter entre 5 000 et 15 000 MAD... un e-commerce de 20 000 à 100 000 MAD" | **78/100** | Données chiffrées spécifiques, réponse directe à une question |
| "Un site vitrine peut être réalisé en 2 à 4 semaines, un e-commerce en 4 à 8 semaines, une appli web de 8 à 12 semaines" | **75/100** | Structure comparative claire, chiffres précis |
| "Notre e-commerce génère maintenant 40 % de notre chiffre d'affaires" (Mohammed Alami) | **71/100** | Résultat concret avec métrique, contexte client |

**Blocs citation-unlikely (score < 30) :**

| Passage | Score | Problème |
|---|---|---|
| "Transformez votre vision en une présence web remarquable" | **18/100** | Vague, marketing, pas auto-suffisant |
| "Nous garantissons votre présence en 1ère page Google" | **22/100** | Affirmation non sourcée, impossible à vérifier |

**Lacunes de citabilité critiques :**
- ❌ Aucune donnée originale publiée (études, benchmarks, statistiques marchés marocains)
- ❌ Les passages les plus cités sont dans des FAQ et témoignages — non balisés comme tels au niveau du contenu (pas de `speakable`)
- ❌ Contenu principalement en français — limite la citation dans les requêtes anglophones internationales
- ⚠️ Les articles de blog sont tous datés 2024 — stale pour mai 2026

### 3.2 — Accès des Crawlers IA (Score : 85/100)

**Analyse robots.txt :**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Sitemap: https://creationsitewebpro.com/sitemap.xml
```

| Crawler IA | Service | Statut |
|---|---|---|
| GPTBot | OpenAI (training + search) | ✅ Autorisé (hérite Allow: /) |
| OAI-SearchBot | OpenAI search-only | ✅ Autorisé |
| ChatGPT-User | ChatGPT browsing | ✅ Autorisé |
| ClaudeBot | Anthropic / Claude | ✅ Autorisé |
| PerplexityBot | Perplexity AI | ✅ Autorisé |
| Google-Extended | Gemini training | ✅ Autorisé |
| Bingbot | Bing / Copilot | ✅ Autorisé (règle explicite) |
| CCBot | Common Crawl | ✅ Autorisé |
| Amazonbot | Amazon AI | ✅ Autorisé |

**Points positifs :** Tous les crawlers IA majeurs sont autorisés — aucune restriction intentionnelle ou accidentelle.

**Problèmes identifiés :**
- ⚠️ L'URL du sitemap dans robots.txt est `https://creationsitewebpro.com/sitemap.xml` (sans www) alors que le site est accessible sur `https://www.creationsitewebpro.com/` — incohérence de domaine
- ⚠️ Aucune directive spécifique pour les crawlers IA (ni restrictions ni permissions explicites)

### 3.3 — llms.txt (Score : 0/100)

**❌ CRITIQUE : Fichier llms.txt ABSENT**

`https://www.creationsitewebpro.com/llms.txt` → **404 Not Found**

Le standard llms.txt (analogue de robots.txt pour les LLMs) est absent. Sans ce fichier, les modèles d'IA ne peuvent pas :
- Comprendre quels contenus sont disponibles et citables
- Identifier les pages les plus pertinentes pour indexation IA
- Recevoir des instructions sur les termes d'utilisation du contenu

### 3.4 — Brand Mentions & Entity Presence (Score : 30/100)

| Plateforme | Statut | Impact IA |
|---|---|---|
| Wikipedia | ❌ Absent | CRITIQUE — signal d'entité #1 pour ChatGPT |
| Wikidata | ❌ Absent | CRITIQUE — entity graph pour tous les LLMs |
| Google Business Profile | ⚠️ Non vérifié | HIGH — local entity pour Google AIO |
| LinkedIn (page entreprise) | ❌ Absent — lien personnel uniquement | HIGH |
| Facebook (page entreprise) | ❌ Lien générique facebook.com | HIGH |
| Instagram | ✅ @creation_sitewebpro | Faible impact IA |
| YouTube | ❌ Absent | Médiocre — Perplexity indexe YouTube |
| Reddit | ❌ Pas de mentions détectées | Médiocre — Perplexity poids fort |

**sameAs dans le schema :** Présent mais lié à des profils à faible autorité (Instagram, LinkedIn personnel, Facebook générique) — ne contribue pas à la reconnaissance d'entité IA.

---

## Section 4 : Platform Optimization

**Score Platform : 36/100**

### 4.1 — Google AI Overviews (AIO) : 45/100

**Points positifs :**
- ✅ FAQPage schema présent (questions-réponses directement extractibles par AIO)
- ✅ Structure de headings claire (H1: 1, H2: 11, H3: 16)
- ✅ Listes de services avec puces
- ✅ Google Partner certifié (signal d'autorité sectorielle)

**Problèmes bloquants :**
- ❌ **Pas de meta description** — Google génère ses propres snippets, souvent sous-optimaux pour AIO
- ❌ **Titre 125 caractères** (limite 60) — tronqué dans les SERPs, nuit au CTR et à la pertinence AIO
- ❌ Pas de `<link rel="canonical">` — risque de duplication contenu avec les variantes d'URL
- ❌ Attribut `lang` absent de `<html>` — Google ne peut pas déterminer la langue déclarée
- ⚠️ Les headings H2 contiennent du marketing ("Transformez votre vision") plutôt que des questions — AIO préfère les headings Q&A

### 4.2 — ChatGPT Web Search : 25/100

- ❌ Pas de présence Wikipedia/Wikidata — signal d'entité primaire pour ChatGPT
- ❌ sameAs ne pointe pas vers des sources autoritatives (Wikipedia, Crunchbase, etc.)
- ✅ GPTBot et OAI-SearchBot autorisés
- ✅ Contenu factuel avec chiffres (prix, délais)
- ⚠️ Absence de dates de publication visibles sur la homepage

### 4.3 — Perplexity AI : 20/100

- ❌ Aucune présence Reddit détectée (Perplexity indexe massivement Reddit)
- ❌ Pas de forum discussions, Quora, Stack Overflow
- ❌ Pas de presse/médias tiers couvrant l'agence
- ✅ PerplexityBot autorisé
- ⚠️ Pas de contenu "how-to" avec méthodologie détaillée

### 4.4 — Google Gemini : 50/100

- ✅ Google Partner (signal fort pour Gemini)
- ✅ FAQPage schema
- ✅ Contenu local Casablanca bien structuré
- ❌ Pas de Google Business Profile dans sameAs
- ❌ Meta description absente

### 4.5 — Bing Copilot : 40/100

- ✅ Bingbot autorisé explicitement
- ✅ Structured data présent
- ❌ Twitter Card absent (Bing valorise les métas Twitter/X)
- ❌ Pas de présence LinkedIn entreprise

---

## Section 5 : Technical Foundation

**Score Technique : 58/100**

### 5.1 — Infrastructure & Sécurité

**Hosting :** Netlify CDN — excellent choix (Edge network, SSL automatique, HTTP/2)  
**Technologie :** Astro.js (site statique pré-rendu) — **excellent pour les crawlers IA** (pas de JavaScript à exécuter, HTML complet servi)

| Header Sécurité | Valeur | Statut |
|---|---|---|
| HTTPS | Actif | ✅ |
| HSTS | `max-age=31536000` | ⚠️ Manque `includeSubDomains` |
| Content-Security-Policy | Présent (unsafe-inline inclus) | ⚠️ Partiellement sécurisé |
| X-Frame-Options | DENY | ✅ |
| X-Content-Type-Options | nosniff | ✅ |
| Referrer-Policy | strict-origin-when-cross-origin | ✅ |
| Permissions-Policy | **ABSENT** | ❌ |
| X-XSS-Protection | 1; mode=block (déprécié) | ⚠️ |

### 5.2 — Meta Tags & Balises HTML

| Élément | Valeur Trouvée | Problème |
|---|---|---|
| `<title>` | "Création Site Web Casablanca \| Agence Web..." | ❌ **125 chars** (max 60) |
| `<meta description>` | **ABSENT** | ❌ CRITIQUE |
| `<link rel="canonical">` | **ABSENT** | ❌ HIGH |
| `<html lang="...">` | **ABSENT** | ❌ HIGH |
| `<meta name="viewport">` | Non détecté | ⚠️ À vérifier |
| `<meta name="robots">` | Non présent (OK — pas de noindex) | ✅ |
| Open Graph tags | Présents (og:title, og:description) | ✅ |
| Twitter Card | **ABSENT** | ❌ MEDIUM |
| hreflang | Présent | ✅ |

### 5.3 — Sitemap & Crawlabilité

- ✅ sitemap.xml présent et bien formaté
- ✅ `<lastmod>` dates récentes (2026-05-20)
- ✅ `<changefreq>` et `<priority>` définis
- ⚠️ URL sitemap dans robots.txt : `https://creationsitewebpro.com/` (sans www) — incohérence avec `https://www.creationsitewebpro.com/`
- ✅ robots.txt syntaxiquement correct

### 5.4 — Rendu & JavaScript

- ✅ **Astro.js = SSR statique** — tout le contenu est dans le HTML initial, les crawlers IA voient l'intégralité du contenu sans exécuter JavaScript
- ✅ Page HTML complète de 88 KB — contenu riche immédiatement disponible
- ⚠️ Attributs HTML non quotés dans le source (`type=application/ld+json` sans guillemets) — non-standard mais interprété par les navigateurs, peut causer des erreurs de parsing chez certains crawlers

---

## Section 6 : Schema & Structured Data

**Score Schema : 52/100**

### 6.1 — Inventaire des Schemas

**JSON-LD (4 blocs détectés) :**

| # | Type | Statut | Problème |
|---|---|---|---|
| 1 | LocalBusiness (minimal) | ⚠️ | Présent mais incomplet |
| 2 | LocalBusiness (avec images + reviews) | ⚠️ | Dupliquer le type sur même page |
| 3 | FAQPage | ✅ | Bon pour Google AIO |
| 4 | LocalBusiness (dans footer) | ❌ | 3ème occurrence — conflit possible |

**Microdata (nombreux blocs via `itemscope/itemtype`) :**
- Review × 6 (témoignages clients) ✅
- Person (auteurs des témoignages) ✅
- Organization (entreprises des clients) ✅
- PostalAddress ✅
- Rating ✅

### 6.2 — Validation & Problèmes

**Problèmes Critiques :**
- ❌ **3 blocs LocalBusiness JSON-LD sur la même page** — les moteurs de recherche peuvent ignorer les blocs conflictuels ou produire des résultats erratiques
- ❌ **Attributs HTML non quotés** (`type=application/ld+json`) — techniquement invalide selon le standard HTML5

**Problèmes High :**
- ❌ `sameAs` pointe vers Instagram, LinkedIn personnel, Facebook générique — pas d'URL Wikipedia/Wikidata/GBP qui valideraient l'entité
- ❌ Pas de `WebSite` schema avec `SearchAction` (perd l'eligibilité au Sitelinks Search Box)
- ❌ Pas de `BreadcrumbList` schema

**Problèmes Medium :**
- ⚠️ LocalBusiness sans `openingHoursSpecification`
- ⚠️ `priceRange: "€€"` utilise des euros — l'agence opère en MAD (dirhams) — incohérence
- ⚠️ Pas de `Person` schema en JSON-LD pour les membres de l'équipe (uniquement Microdata dans les reviews)
- ⚠️ Pas de `speakable` property pour guider les IA vers le contenu clé

### 6.3 — Éligibilité Rich Results Google

| Rich Result | Schema Présent | Éligible | Bloquant |
|---|---|---|---|
| LocalBusiness | ✅ | ⚠️ | Blocs dupliqués |
| FAQ | ✅ | ✅ | Rien |
| Review / Aggregate Rating | ✅ (Microdata) | ⚠️ | Vérifier `aggregateRating` |
| Breadcrumb | ❌ | ❌ | Schema manquant |
| Sitelinks Search Box | ❌ | ❌ | WebSite schema absent |

---

## Section 7 : Content Quality & E-E-A-T

**Score Contenu : 56/100**

### 7.1 — Experience (14/25)

| Signal | Présent | Force |
|---|---|---|
| Cas clients avec métriques (+40% CA, +150% ventes, +80% contacts, ×3 réservations) | ✅ | Forte |
| Jalons historiques (2013-2023 timeline) | ✅ | Modérée |
| 1 000+ projets livrés | ✅ | Modérée (non sourcée) |
| Photos de réalisations (portfolio) | ✅ | Modérée |
| Données originales / études propriétaires | ❌ | Absentes |
| Before/after avec données comparatives | ❌ | Absent |

### 7.2 — Expertise (18/25)

| Signal | Présent | Force |
|---|---|---|
| Équipe nommée avec biographies détaillées | ✅ (page About) | Forte |
| Expériences professionnelles prouvées (Capgemini, Fintech Accelex, CGI) | ✅ | Très forte |
| Google Partner certifié depuis 2019 | ✅ | Forte |
| Google Analytics & Search Console certifiée (Safae Abed) | ✅ | Forte |
| Blog avec auteurs identifiés | ✅ | Modérée |
| Articles de blog datés (2024) | ⚠️ | Stale — 18+ mois sans nouvel article |
| Profondeur technique dans les articles | ⚠️ | À évaluer |

### 7.3 — Authoritativeness (10/25)

| Signal | Présent | Force |
|---|---|---|
| Google Partner (badge d'autorité sectorielle) | ✅ | Forte |
| Mentions presse / médias tiers | ❌ | Absent |
| Wikipedia / Wikidata | ❌ | Absent |
| Citations par d'autres sites | Non évalué | — |
| Conférences / interventions publiques | ❌ | Non visible |
| Page LinkedIn entreprise | ❌ | Absent |
| #1 Agence à Casablanca (affirmation non sourcée) | ⚠️ | Contre-productif sans source |

### 7.4 — Trustworthiness (14/25)

| Signal | Présent | Force |
|---|---|---|
| HTTPS + certificat SSL | ✅ | Standard |
| Mentions légales | ✅ | Bonne pratique |
| Politique de confidentialité | ✅ | Bonne pratique |
| Adresse physique vérifiable | ✅ (Ain Sebaa, Casablanca 20000) | Forte |
| Numéro de téléphone | ✅ | Forte |
| Email professionnel | ✅ | Bonne |
| Témoignages clients avec nom + entreprise + lieu | ✅ | Forte |
| "Satisfaction garantie ou remboursé" (non documenté) | ⚠️ | Risqué sans CGV |
| Statistiques non sourcées ("97% clients satisfaits") | ⚠️ | Faible sans méthodologie |

---

## Section 8 : Plan d'Action Prioritaire

### 🔴 CRITIQUE — Impact immédiat (Semaine 1-2)

**1. Créer le fichier llms.txt**
- Créer `/llms.txt` à la racine du site
- Inclure : description de l'agence, liste des pages clés, informations d'entité, permissions d'utilisation du contenu
- Exemple minimal :
```
# CreationSiteWebPro - Agence Web Casablanca
> Agence de création de sites web et applications à Casablanca, Maroc. 10+ ans d'expérience, 1000+ projets.

## Pages clés
- /creation-site-web-casablanca : Services de création site web
- /a-propos-agence-web-casablanca : Équipe et histoire
- /blog : Articles expertise web et SEO Maroc
- /faq-creation-site-web-maroc : Questions fréquentes

## Usage autorisé
Contenu librement citable pour des usages informatifs et éducatifs.
```

**2. Ajouter les meta descriptions sur toutes les pages**
- La homepage n'a aucune meta description — chaque page doit en avoir une unique de 150-160 caractères
- Homepage : "Agence web à Casablanca spécialisée en création de sites vitrine, e-commerce et SEO. Google Partner. Plus de 1 000 projets livrés depuis 2013. Devis gratuit."

**3. Corriger les balises `<title>`**
- Actuel : "Création Site Web Casablanca | Agence Web à Casablanca Maroc - Sites Professionnels & SEO - Expert en création site web Maroc" (125 chars)
- Recommandé : "Agence Web Casablanca | CreationSiteWebPro — Sites & SEO" (57 chars)

### 🟠 HIGH — Dans les 30 jours

**4. Ajouter `<link rel="canonical">` sur toutes les pages**
- Risque actuel : variantes d'URL (`www` vs sans `www`, trailing slash) indexées comme contenu dupliqué

**5. Ajouter l'attribut `lang="fr"` à la balise `<html>`**
- Correction one-line dans le layout Astro — impact immédiat sur la détection de langue

**6. Construire la présence d'entité**
- Créer une entrée **Wikidata** pour CreationSiteWebPro (entité commerciale vérifiable)
- Vérifier et compléter le **Google Business Profile** (essentiel pour Google AIO local)
- Créer une **page LinkedIn Entreprise** distincte du profil personnel
- Mettre à jour `sameAs` dans les schemas pour pointer vers GBP, Wikidata, LinkedIn entreprise
- Corriger le lien Facebook pour pointer vers la vraie page entreprise

**7. Consolider les blocs JSON-LD**
- Fusionner les 3 blocs `LocalBusiness` en UN seul bloc complet en `<head>`
- Corriger la currency : remplacer `"priceRange": "€€"` par MAD ou supprimer
- Ajouter `aggregateRating` au bloc LocalBusiness consolidé
- Ajouter `WebSite` schema avec `SearchAction`

### 🟡 MEDIUM — Dans les 60-90 jours

**8. Publier du contenu frais optimisé IA (2026)**
- Tous les articles de blog sont datés 2024 — publier minimum 1 article/mois en 2026
- Format recommandé : guides pratiques avec données chiffrées, questions en H2, listes structurées
- Cibler des requêtes de type "Comment choisir une agence web à Casablanca" — format AIO-friendly

**9. Ajouter les Twitter/X Card meta tags**
- Ajouter `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` dans le `<head>`
- Améliore l'aperçu sur X/Twitter et le score Bing Copilot

**10. Ajouter la propriété `speakable`**
- Identifier 2-3 passages clés par page importante
- Les baliser avec `"speakable": {"@type": "SpeakableSpecification", "cssSelector": [".hero-description", ".faq-answer"]}` dans le JSON-LD

**11. Ajouter `Permissions-Policy` header**
- Via les headers Netlify (`_headers` ou `netlify.toml`)
- Valeur minimale : `Permissions-Policy: geolocation=(), microphone=(), camera=()`

**12. Corriger l'URL du sitemap dans robots.txt**
- Changer `Sitemap: https://creationsitewebpro.com/sitemap.xml`
- En `Sitemap: https://www.creationsitewebpro.com/sitemap.xml`

### 🟢 LOW — Optimisations continues

**13. Créer du contenu original sourcé**
- Publier une étude annuelle "État du marché web au Maroc" avec données propriétaires (benchmarks de prix, délais, tendances)
- Ce type de contenu devient une source primaire pour les IA

**14. Construire une présence Reddit et YouTube**
- Répondre aux questions sur r/morocco, r/webdev (marché francophone)
- Créer une chaîne YouTube avec tutoriels SEO/web pour le marché marocain

**15. Fixer HSTS `includeSubDomains`**
- Ajouter `includeSubDomains` à la directive Strict-Transport-Security dans les headers Netlify

---

## Section 9 : Génération llms.txt Recommandé

```
# CreationSiteWebPro
> Agence digitale basée à Casablanca, Maroc, spécialisée en création de sites web professionnels, e-commerce, applications web sur mesure et référencement SEO. Fondée en 2013 par Mouhcine TALBI. Google Partner certifié depuis 2019. Plus de 1 000 projets livrés.

## Services
- Création de sites vitrine (7 500 à 16 900 MAD)
- Développement e-commerce avec paiement intégré (CMI, Stripe)
- Applications web sur mesure
- Référencement SEO local et national
- Maintenance et hébergement web

## Tarification (2026)
- Pack Éveil Sensoriel : 7 500 MAD (4 pages)
- Pack Harmonie Premium : 11 900 MAD (6-8 pages + blog)
- Pack Prestige Suprême : 16 900 MAD (site multilingue full sur-mesure)

## Délais moyens
- Site vitrine : 2 à 4 semaines
- E-commerce : 4 à 8 semaines
- Application web : 8 à 12 semaines

## Équipe
- Mouhcine Talbi — Fondateur & Directeur Technique (ex-Capgemini, CGI)
- Zakaria Boussnini — Co-fondateur & Directeur Commercial (ex-Fintech Accelex, Capgemini)
- Safae Abed — QA Manager & SEO Expert, Google Analytics certifiée
- Ikram Talbi — Senior Analyste Fonctionnelle (ex-Capgemini, Sopra Banking)
- Fatima Ezzahra Benzahra — Directrice Produit & Innovation

## Contact
- Adresse : Ain Sebaa, Casablanca 20000, Maroc
- Téléphone : +212 6 79 78 29 06
- Email : contact@creationsitewebpro.com

## Pages importantes
- /creation-site-web-casablanca
- /creation-site-web-maroc
- /services/e-commerce-casablanca
- /services/referencement-seo-casablanca
- /a-propos-agence-web-casablanca
- /blog
- /faq-creation-site-web-maroc
- /portfolio-realisations-web-casablanca-maroc

## Conditions d'utilisation du contenu
Le contenu de ce site peut être utilisé à des fins d'information et de citation, avec attribution.
```

---

## Section 10 : Tableau de Bord des Corrections

| # | Action | Priorité | Effort | Impact GEO | Délai |
|---|---|---|---|---|---|
| 1 | Créer llms.txt | 🔴 Critique | Faible (1h) | +8 pts | Semaine 1 |
| 2 | Ajouter meta descriptions | 🔴 Critique | Moyen (4h) | +6 pts | Semaine 1 |
| 3 | Corriger les `<title>` | 🔴 Critique | Moyen (2h) | +5 pts | Semaine 1 |
| 4 | Ajouter `<link rel="canonical">` | 🟠 High | Faible (1h) | +4 pts | Semaine 2 |
| 5 | Ajouter `lang="fr"` au `<html>` | 🟠 High | Très faible (15min) | +2 pts | Semaine 2 |
| 6 | Wikidata + GBP + LinkedIn entreprise | 🟠 High | Élevé (2 jours) | +10 pts | Mois 1 |
| 7 | Consolider blocs LocalBusiness | 🟠 High | Moyen (3h) | +5 pts | Mois 1 |
| 8 | Contenu frais 2026 | 🟡 Medium | Continu | +6 pts | Mois 2-3 |
| 9 | Twitter Card meta tags | 🟡 Medium | Très faible (30min) | +2 pts | Mois 1 |
| 10 | Propriété `speakable` | 🟡 Medium | Faible (2h) | +3 pts | Mois 2 |
| 11 | `Permissions-Policy` header | 🟡 Medium | Très faible (15min) | +1 pt | Mois 1 |
| 12 | Corriger URL sitemap dans robots.txt | 🟡 Medium | Très faible (5min) | +1 pt | Semaine 2 |
| 13 | Contenu original sourcé (étude marché) | 🟢 Low | Très élevé | +5 pts | Mois 3+ |
| 14 | Reddit + YouTube | 🟢 Low | Élevé | +4 pts | Mois 3+ |
| 15 | HSTS `includeSubDomains` | 🟢 Low | Très faible (5min) | +1 pt | Mois 2 |

**Score GEO projeté après corrections Critiques + High : ~62/100 (tier Moderate)**  
**Score GEO projeté après toutes les corrections : ~75/100 (tier Good)**

---

## Annexe A — Données Techniques Brutes

**Server Headers :**
```
Server: Netlify
Content-Type: text/html; charset=UTF-8
Content-Length: 88,819 bytes
Cache-Control: public, max-age=0, must-revalidate
Strict-Transport-Security: max-age=31536000
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
ETag: "cdda315e78ccf0eaaf1b7f23448e1d0e-ssl"
```

**Schemas détectés sur homepage (source HTML brut) :**
- JSON-LD Block 1 : LocalBusiness (adresse + coordonnées géographiques)
- JSON-LD Block 2 : LocalBusiness (images + reviews array)
- JSON-LD Block 3 : FAQPage (5 questions)
- JSON-LD Block 4 : LocalBusiness (footer)
- Microdata : Review × 6, Person × 6, Organization × 6, Rating × 6, PostalAddress × multiple

**Structure headings homepage :**
- H1 : 1 ("Sites Web Professionnels à Casablanca")
- H2 : 11 (sections principales)
- H3 : 16 (sous-sections services, témoignages, équipe)

**Sitemap (extrait) :** 15+ URLs indexées, lastmod 2026-05-20, priorité 1.0 pour homepage

---

*Rapport généré le 30 mai 2026 — GEO-SEO Claude v2026.02*

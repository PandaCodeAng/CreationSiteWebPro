export const SITE_URL = 'https://www.creationsitewebpro.com';

export const napInfo = {
  name: 'CreationSiteWebPro',
  address: {
    street: 'Ain Sebaa',
    city: 'Casablanca',
    postalCode: '20000',
    country: 'Maroc'
  },
  phone: '+212 6 79 78 29 06',
  email: 'contact@creationsitewebpro.com',
  coordinates: {
    latitude: 33.5731,
    longitude: -7.6190
  }
} as const;

/**
 * Profils tiers déclarés dans `sameAs`.
 *
 * Ne lister ici qu'un profil actif et vérifié : un `sameAs` qui pointe vers une
 * page vide ou vers une autre entité affaiblit l'entité au lieu de la renforcer.
 *
 * Retirés le 30/07/2026 après l'audit GEO :
 * - facebook.com/creationsitewebpro : renvoie une entité parisienne sans rapport.
 *   À réintégrer seulement si la page appartient bien à l'agence.
 * - instagram.com/creation_sitewebpro : 0 abonné, 0 publication.
 *   À réintégrer quand le compte sera actif.
 */
export const socialProfiles = [
  'https://www.linkedin.com/company/creationsitewebpro'
] as const;

/**
 * Membres de l'équipe publiés sur /a-propos-agence-web-casablanca.
 *
 * `sameAs` ne doit contenir qu'une URL désignant **la personne elle-même**
 * (profil LinkedIn personnel, page auteur, fiche de conférencier…). Ne jamais y
 * mettre la page LinkedIn de l'entreprise : cela déclarerait que les cinq membres
 * sont une seule et même entité, confondue avec l'agence. Le lien vers
 * l'entreprise passe par `worksFor` et `affiliation`, qui portent déjà son
 * `sameAs` (voir `socialProfiles`).
 *
 * Le tableau reste vide tant qu'aucune URL personnelle n'est confirmée : une
 * absence de lien vaut mieux qu'un lien qui désigne la mauvaise entité (H-7).
 *
 * TODO(propriétaire) : pour récupérer le signal E-E-A-T de M-4, fournir l'URL
 * LinkedIn **personnelle** de chaque membre (format linkedin.com/in/…).
 */
export const teamMembers = [
  {
    slug: 'mouhcine-talbi',
    name: 'Mouhcine Talbi',
    jobTitle: 'Fondateur & Directeur Technique',
    image: '/images/mouhcine-talbi.jpg',
    description:
      'Architecture et développement web. Gestion de projets techniques. Conception de solutions web sur mesure',
    knowsAbout: [
      'Architecture web',
      'Développement web',
      'Gestion de projets techniques',
      'Solutions web sur mesure'
    ],
    isFounder: true,
    sameAs: [] as string[]
  },
  {
    slug: 'zakaria-boussnini',
    name: 'Zakaria Boussnini',
    jobTitle: 'Cofondateur & Directeur Commercial',
    image: '/images/zakaria-boussnini.jpg',
    description:
      'Stratégie digitale. Développement commercial. Relation client et cadrage des projets',
    knowsAbout: [
      'Stratégie digitale',
      'Développement commercial',
      'Cadrage de projet web',
      'Relation client'
    ],
    isFounder: true,
    sameAs: [] as string[]
  },
  {
    slug: 'safae-abed',
    name: 'Safae Abed',
    jobTitle: 'Ingénieure QA & Experte SEO',
    image: '/images/safae-abed.jpg',
    description:
      'Assurance qualité et tests fonctionnels. SEO et stratégie de contenu. Audit de performance web',
    knowsAbout: [
      'Assurance qualité',
      'Tests fonctionnels',
      'Référencement naturel',
      'Stratégie de contenu',
      'Audit de performance web'
    ],
    isFounder: false,
    sameAs: [] as string[]
  },
  {
    slug: 'ikram-talbi',
    name: 'Ikram Talbi',
    jobTitle: 'Senior Analyste Fonctionnelle & Stratège Digital',
    image: '/images/Ikrame-talbi.jpg',
    description:
      'Analyse fonctionnelle et recueil des besoins. Gestion de projets digitaux. Optimisation des processus',
    knowsAbout: [
      'Analyse fonctionnelle',
      'Recueil des besoins',
      'Gestion de projets digitaux',
      'Optimisation des processus'
    ],
    isFounder: false,
    sameAs: [] as string[]
  },
  {
    slug: 'fatima-benzahra',
    name: 'Fatima Ezzahra Benzahra',
    jobTitle: 'Directrice Produit & Innovation',
    image: '/images/fatima-benzahra.jpg',
    description:
      'Experte en gestion et coordination de projets digitaux. Expérience dans les environnements technologiques et de transformation numérique. Spécialisée dans l’amélioration des produits digitaux et l’accompagnement client',
    knowsAbout: [
      'Gestion de produit digital',
      'Coordination de projets digitaux',
      'Transformation numérique',
      'Accompagnement client'
    ],
    isFounder: false,
    sameAs: [] as string[]
  }
] as const;

/**
 * Paliers tarifaires publics, en MAD.
 * Source unique pour l'affichage HTML (tableaux) et les `Offer` JSON-LD :
 * un prix ne doit jamais être écrit deux fois avec deux valeurs différentes.
 */
export const pricingTiers = [
  {
    id: 'site-vitrine',
    name: 'Site vitrine',
    price: 7500,
    /** Haut de fourchette affiché sur la page tarifs. `null` si non borné. */
    priceMax: 15000,
    priceLabel: 'À partir de 7 500 MAD',
    rangeLabel: '7 500 – 15 000 MAD',
    deliveryTime: '2 à 3 semaines',
    scope: '4 pages clés (Accueil, Services, À propos, Contact)',
    bestFor: 'Présenter une activité et recueillir des demandes de contact'
  },
  {
    id: 'site-ecommerce',
    name: 'Site e-commerce',
    price: 15000,
    priceMax: 40000,
    priceLabel: 'À partir de 15 000 MAD',
    rangeLabel: '15 000 – 40 000 MAD',
    deliveryTime: '4 à 6 semaines',
    scope: 'Catalogue, panier, commandes, paiement et livraison',
    bestFor: 'Vendre en ligne au Maroc avec une gestion des commandes'
  },
  {
    id: 'projet-sur-mesure',
    name: 'Projet sur mesure',
    price: null,
    priceMax: null,
    priceLabel: 'Sur devis',
    rangeLabel: 'Sur devis',
    deliveryTime: 'Défini au cadrage',
    scope: 'Application web, portail métier ou intégrations spécifiques',
    bestFor: 'Outiller un processus interne ou un besoin non standard'
  }
] as const;

/** Fin de validité affichée sur les `Offer`. À faire glisser à chaque révision tarifaire. */
export const priceValidUntil = '2027-06-30';

export const legalInfo = {
  foundingDate: '2013',
  publicationDirector: 'Mouhcine Talbi',
  /**
   * Identifiants d'entreprise (M-5 de l'audit GEO). Le propriétaire a choisi de ne
   * pas les publier — décision assumée le 30/07/2026.
   *
   * L'affichage est déjà câblé dans /mentions-legales et /conditions-generales-de-vente :
   * renseigner une valeur ici suffit à la faire apparaître sur les deux pages,
   * sans autre modification. Ne jamais y mettre un numéro approximatif : un
   * identifiant faux sur des mentions légales est un risque juridique réel.
   */
  legalForm: null as string | null,
  registrationNumber: null as string | null, // Registre du Commerce (RC)
  taxId: null as string | null // Identifiant Commun de l'Entreprise (ICE)
} as const;

/**
 * TODO(propriétaire) : à confirmer, puis reporter tel quel sur la fiche
 * Google Business Profile pour que les deux sources concordent.
 */
export const openingHours = {
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '09:00',
  closes: '18:00'
} as const;

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Entité complète, à inliner sur chaque page.
 *
 * L'audit GEO (H-5) a montré que les crawlers IA ne résolvent pas les références
 * `@id` entre pages : une page de service ou un article atteint directement doit
 * donc porter lui-même l'adresse, le téléphone et les `sameAs`.
 */
export function buildLocalBusinessSchema() {
  const founders = teamMembers
    .filter((member) => member.isFounder)
    .map((member) => ({
      '@type': 'Person',
      name: member.name,
      url: `${SITE_URL}/a-propos-agence-web-casablanca#${member.slug}`,
      jobTitle: member.jobTitle
    }));

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': LOCAL_BUSINESS_ID,
    name: napInfo.name,
    alternateName: 'Creation Site Web Pro',
    url: SITE_URL,
    description:
      'Agence web basée à Casablanca, spécialisée dans la création de sites vitrines, e-commerce et solutions web sur mesure. Site vitrine dès 7 500 MAD, e-commerce dès 15 000 MAD.',
    image: abs('/images/logo.png'),
    logo: {
      '@type': 'ImageObject',
      url: abs('/images/logo.png'),
      width: 748,
      height: 333
    },
    telephone: napInfo.phone.replace(/\s+/g, ''),
    email: napInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: napInfo.address.street,
      addressLocality: napInfo.address.city,
      postalCode: napInfo.address.postalCode,
      addressCountry: 'MA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: napInfo.coordinates.latitude,
      longitude: napInfo.coordinates.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...openingHours.dayOfWeek],
        opens: openingHours.opens,
        closes: openingHours.closes
      }
    ],
    foundingDate: legalInfo.foundingDate,
    founder: founders,
    currenciesAccepted: 'MAD',
    priceRange: '7 500 MAD - 15 000 MAD+',
    areaServed: [
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'Country', name: 'Maroc' }
    ],
    knowsLanguage: ['fr', 'ar'],
    sameAs: [...socialProfiles],
    inLanguage: 'fr-MA'
    // Pas d'`aggregateRating` ni de `review` : aucun avis client public n'existe
    // à ce jour. En générer serait une violation des règles Google (audit GEO).
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: napInfo.name,
    url: SITE_URL,
    description:
      'Agence web à Casablanca spécialisée en création de sites web professionnels, e-commerce et référencement SEO au Maroc depuis 2013.',
    publisher: { '@id': LOCAL_BUSINESS_ID },
    inLanguage: 'fr-MA'
  };
}

export interface BreadcrumbEntry {
  name: string;
  /** Chemin absolu depuis la racine. Omis sur le dernier élément. */
  item?: string;
}

export function buildBreadcrumbSchema(entries: BreadcrumbEntry[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: abs(entry.item ?? pageUrl)
    }))
  };
}

/** Personne autoportée, pour les `author` d'article et les fiches équipe. */
export function buildPersonSchema(slug: string) {
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    throw new Error(`Membre d’équipe introuvable : ${slug}`);
  }

  const url = `${SITE_URL}/a-propos-agence-web-casablanca#${member.slug}`;

  return {
    '@type': 'Person',
    '@id': url,
    name: member.name,
    url,
    jobTitle: member.jobTitle,
    image: abs(member.image),
    description: member.description,
    knowsAbout: [...member.knowsAbout],
    worksFor: { '@id': LOCAL_BUSINESS_ID },
    // `affiliation` rattache explicitement la personne à l'agence, dont le profil
    // LinkedIn est déclaré une seule fois dans le `sameAs` du LocalBusiness. C'est
    // la façon correcte de relier un membre à la page entreprise : la mettre dans
    // le `sameAs` de la personne signifierait « cette personne EST l'agence ».
    affiliation: { '@id': LOCAL_BUSINESS_ID },
    ...(member.sameAs.length > 0 ? { sameAs: [...member.sameAs] } : {})
  };
}

/** `Offer` en MAD réutilisables par les pages Service (H-3 de l'audit). */
export function buildOffers(tierIds: readonly string[], offerUrl: string) {
  return pricingTiers
    .filter((tier) => tierIds.includes(tier.id) && tier.price !== null)
    .map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      description: tier.bestFor,
      price: String(tier.price),
      priceCurrency: 'MAD',
      priceValidUntil,
      availability: 'https://schema.org/InStock',
      url: abs(offerUrl),
      seller: { '@id': LOCAL_BUSINESS_ID }
    }));
}

export function buildAggregateOffer(offerUrl: string) {
  const priced = pricingTiers.filter((tier) => tier.price !== null);
  const lows = priced.map((tier) => tier.price as number);
  // `highPrice` reprend le haut des fourchettes réellement affichées sur la page
  // tarifs : les données structurées ne doivent pas annoncer un plafond inférieur
  // à ce que le visiteur lit à l'écran.
  const highs = priced.map((tier) => (tier.priceMax ?? tier.price) as number);

  return {
    '@type': 'AggregateOffer',
    priceCurrency: 'MAD',
    lowPrice: String(Math.min(...lows)),
    highPrice: String(Math.max(...highs)),
    offerCount: String(priced.length),
    priceValidUntil,
    offers: buildOffers(
      priced.map((tier) => tier.id),
      offerUrl
    )
  };
}

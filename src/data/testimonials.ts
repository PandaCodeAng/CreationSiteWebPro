export interface Testimonial {
    name: string;
    company: string;
    position: string;
    text: string;
    rating: number;
    date: string;
    sector?: string;
    projectType?: 'site-vitrine' | 'e-commerce' | 'application-web' | 'refonte';
    location: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      name: "Mohammed Alami",
      company: "Digital Solutions Maroc",
      position: "Directeur Général",
      text: "CreationSiteWebPro a transformé notre présence en ligne. Notre nouveau site e-commerce a généré une augmentation de 150% des ventes en ligne en seulement 3 mois. Leur expertise technique et leur compréhension du marché marocain sont exceptionnelles.",
      rating: 5,
      date: "2024-01-15",
      sector: "Technologies",
      projectType: "e-commerce",
      location: "Casablanca-Maarif"
    },
    {
      name: "Fatima Zahra Bennani",
      company: "Style & Mode",
      position: "Fondatrice",
      text: "Je cherchais une agence capable de créer un site e-commerce moderne pour ma boutique de mode. L'équipe de CreationSiteWebPro a dépassé mes attentes. Le site est magnifique, facile à gérer et mes clients l'adorent.",
      rating: 5,
      date: "2024-02-01",
      sector: "Mode",
      projectType: "e-commerce",
      location: "Casablanca-Ain Diab"
    },
    {
      name: "Karim Idrissi",
      company: "Immobilier Premium",
      position: "Directeur Commercial",
      text: "Excellent travail de refonte de notre site web. L'équipe a parfaitement compris nos besoins et a livré un site qui reflète parfaitement notre positionnement haut de gamme. Les demandes de contact ont augmenté de 80%.",
      rating: 5,
      date: "2024-01-20",
      sector: "Immobilier",
      projectType: "refonte",
      location: "Casablanca-Anfa"
    },
    {
      name: "Sanaa Chakri",
      company: "EduTech Maroc",
      position: "Responsable Marketing",
      text: "La création de notre plateforme éducative était un défi complexe, mais CreationSiteWebPro l'a relevé avec brio. L'application est intuitive, performante et nos étudiants l'utilisent quotidiennement sans aucun problème.",
      rating: 5,
      date: "2024-02-10",
      sector: "Éducation",
      projectType: "application-web",
      location: "Casablanca-CIL"
    },
    {
      name: "Hassan Benjelloun",
      company: "Restaurant Al Andalous",
      position: "Propriétaire",
      text: "Un grand merci à CreationSiteWebPro pour notre magnifique site vitrine. Les réservations en ligne ont triplé depuis le lancement. Le support client est réactif et professionnel.",
      rating: 5,
      date: "2024-01-25",
      sector: "Restauration",
      projectType: "site-vitrine",
      location: "Casablanca-Gauthier"
    },
    {
      name: "Leila Berrada",
      company: "Cosmétiques Bio Maroc",
      position: "CEO",
      text: "Notre boutique en ligne dépasse toutes nos attentes. L'intégration du paiement en ligne et la gestion des stocks sont parfaites. Un vrai partenaire pour notre croissance digitale.",
      rating: 5,
      date: "2024-02-05",
      sector: "Cosmétiques",
      projectType: "e-commerce",
      location: "Casablanca-Racine"
    }
  ];
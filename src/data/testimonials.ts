export interface Testimonial {
  name: string;
  company: string;
  position: string;
  text: string;
  date: string;
  sector?: string;
  projectType?: 'site-vitrine' | 'e-commerce' | 'application-web' | 'refonte';
  location: string;
  sourceUrl: string;
}

// Ajouter ici uniquement des témoignages publiés avec l'accord du client
// et accompagnés d'une URL permettant d'en vérifier la source.
export const testimonials: Testimonial[] = [];

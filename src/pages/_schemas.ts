import { z } from 'astro:content';

export const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  lastModified: z.string(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    noindex: z.boolean().default(false)
  }).optional(),
  hero: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional()
  }).optional()
});
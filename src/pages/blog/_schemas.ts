import { z } from 'astro:content';

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.string(),
  author: z.string(),
  category: z.string(),
  excerpt: z.string().optional(),
  slug: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  image: z.object({
    src: z.string(),
    alt: z.string()
  }).optional(),
  tags: z.array(z.string()).default([]),
  readingTime: z.string().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }).optional()
});
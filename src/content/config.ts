import { defineCollection } from 'astro:content';
import { pageSchema } from 'src/pages/_schemas';
import { blogSchema } from 'src/pages/blog/_schemas';


export const collections = {
  blog: defineCollection({
    schema: blogSchema,
  }),
  pages: defineCollection({
    schema: pageSchema,
  }),
};
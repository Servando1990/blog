import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    categories: z.array(z.string()),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'writing/posts': postsCollection,
};
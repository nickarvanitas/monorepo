import { z } from 'zod';

// Base post schema
export const postSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  content: z.string().nullable(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  authorId: z.string(),
});

// Post creation schema
export const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  published: z.boolean().default(false),
  authorId: z.string(),
});

// Post update schema
export const postUpdateSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});

// Types
export type Post = z.infer<typeof postSchema>;
export type PostCreate = z.infer<typeof postCreateSchema>;
export type PostUpdate = z.infer<typeof postUpdateSchema>; 
import { z } from 'zod';

// Base user schema
export const userSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  name: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// User creation schema
export const userCreateSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(8),
});

// User update schema
export const userUpdateSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().optional(),
  password: z.string().min(8).optional(),
});

// User with password schema
export const userWithPasswordSchema = userSchema.extend({
  password: z.string(),
});

// User login schema
export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Types
export type User = z.infer<typeof userSchema>;
export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;
export type UserWithPassword = z.infer<typeof userWithPasswordSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>; 
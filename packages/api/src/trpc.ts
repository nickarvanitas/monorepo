import { initTRPC, TRPCError } from '@trpc/server';
import { prisma } from '@repo/database';
import superjson from 'superjson';
import { ZodError } from 'zod';

/**
 * Context type for tRPC procedures
 */
export interface Context {
  prisma: typeof prisma;
  user?: {
    id: string;
    email: string;
  } | null;
}

/**
 * Context creation for API requests
 */
export const createContext = async (opts: {
  headers?: Record<string, string | string[] | undefined>;
}): Promise<Context> => {
  // This is where you would add authentication logic
  // For example, validate a JWT token and get the user
  
  return {
    prisma,
    user: null, // Replace with actual user from auth token
  };
};

/**
 * Initialize tRPC
 */
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * tRPC router and procedure helpers
 */
export const router = t.router;
export const publicProcedure = t.procedure;
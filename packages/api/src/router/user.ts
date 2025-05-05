import { TRPCError } from '@trpc/server';
import { hash, compare } from 'bcryptjs';
import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc.js';
import { userCreateSchema, userUpdateSchema, userLoginSchema } from '@repo/schema';

export const userRouter = router({
  // Get all users
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }),

  // Get user by ID
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      return user;
    }),

  // Create a new user
  create: publicProcedure
    .input(userCreateSchema)
    .mutation(async ({ ctx, input }) => {
      // Check if user already exists
      const existingUser = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'User with this email already exists',
        });
      }

      // Hash the password
      const passwordHash = await hash(input.password, 10);

      // Create the user
      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: passwordHash,
        },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    }),

  // Update user
  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      data: userUpdateSchema,
    }))
    .mutation(async ({ ctx, input }) => {
      // Check if the user exists
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      // Check if the user is updating their own account
      if (ctx.user?.id !== input.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You can only update your own account',
        });
      }

      // Hash the password if provided
      const data = { ...input.data };
      if (data.password) {
        data.password = await hash(data.password, 10);
      }

      // Update the user
      const updatedUser = await ctx.prisma.user.update({
        where: { id: input.id },
        data,
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return updatedUser;
    }),

  // Delete user
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if the user exists
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      // Check if the user is deleting their own account
      if (ctx.user?.id !== input.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You can only delete your own account',
        });
      }

      // Delete the user
      await ctx.prisma.user.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Login
  login: publicProcedure
    .input(userLoginSchema)
    .mutation(async ({ ctx, input }) => {
      // Find the user
      const user = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Invalid email or password',
        });
      }

      // Verify the password
      const passwordValid = await compare(input.password, user.password);

      if (!passwordValid) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid email or password',
        });
      }

      // Return the user (without password)
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    }),
}); 
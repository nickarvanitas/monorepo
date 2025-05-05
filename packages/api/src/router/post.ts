import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc.js';
import { postCreateSchema, postUpdateSchema } from '@repo/schema';

export const postRouter = router({
  // Get all posts
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.string().optional(),
        published: z.boolean().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { limit, cursor, published } = input;

      const items = await ctx.prisma.post.findMany({
        take: limit + 1,
        where: published !== undefined ? { published } : undefined,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return {
        items,
        nextCursor,
      };
    }),

  // Get post by ID
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      if (!post) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Post not found',
        });
      }

      // If post is not published, only the author can see it
      if (!post.published && (!ctx.user || ctx.user.id !== post.authorId)) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to view this post',
        });
      }

      return post;
    }),

  // Create a post
  create: protectedProcedure
    .input(postCreateSchema)
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'You must be logged in to create a post',
        });
      }

      // Override authorId with current user's ID for security
      const post = await ctx.prisma.post.create({
        data: {
          ...input,
          authorId: ctx.user.id,
        },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      return post;
    }),

  // Update post
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: postUpdateSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Check if the post exists
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });

      if (!post) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Post not found',
        });
      }

      // Only the author can update the post
      if (!ctx.user || ctx.user.id !== post.authorId) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to update this post',
        });
      }

      // Update the post
      const updatedPost = await ctx.prisma.post.update({
        where: { id: input.id },
        data: input.data,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      return updatedPost;
    }),

  // Delete post
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if the post exists
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });

      if (!post) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Post not found',
        });
      }

      // Only the author can delete the post
      if (!ctx.user || ctx.user.id !== post.authorId) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to delete this post',
        });
      }

      // Delete the post
      await ctx.prisma.post.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),
}); 
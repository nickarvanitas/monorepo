import { router } from './trpc.js';
import { userRouter } from './router/user.js';
import { postRouter } from './router/post.js';

export const appRouter = router({
  user: userRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;

export { createContext } from './trpc.js'; 
import { router } from './trpc.js';
import { userRouter } from './router/user.js';

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

export { createContext } from './trpc.js'; 
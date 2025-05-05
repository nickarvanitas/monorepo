import { Button } from "@repo/ui/button";
import { User } from "@repo/types";
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@repo/api';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

export default async function Home() {
  const { data, isLoading } = await trpc.user.getAll.query();

  return (
    <div>
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((user: User) => (
            <div key={user.id} className="text-2xl text-blue-700">
              {user.name}
            </div>
          ))
        )}
        <Button appName="Network">Click me</Button>
      </main>
    </div>
  );
}

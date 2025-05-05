import type { PrismaClient, User } from '../../generated/prisma';
import { faker } from '@faker-js/faker';

export async function seedUsers(prisma: PrismaClient): Promise<User[]> {
  console.log('Seeding users...');
  const users: User[] = [];
  const userCount = 5;

  for (let i = 0; i < userCount; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
      },
    });
    users.push(user);
    console.log(`Created user: ${user.email}`);
  }
  console.log(`Seeded ${users.length} users.`);
  return users;
} 
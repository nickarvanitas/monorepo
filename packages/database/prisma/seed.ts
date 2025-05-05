import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Clear the database first
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  
  // Create users
  const passwordHash = await hash('password123', 10);
  
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User One',
      password: passwordHash,
    },
  });
  
  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'User Two',
      password: passwordHash,
    },
  });
  
  // Create posts
  await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the first post content',
      published: true,
      authorId: user1.id,
    },
  });
  
  await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is the second post content',
      published: false,
      authorId: user1.id,
    },
  });
  
  await prisma.post.create({
    data: {
      title: 'Third Post',
      content: 'This is the third post content',
      published: true,
      authorId: user2.id,
    },
  });
  
  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
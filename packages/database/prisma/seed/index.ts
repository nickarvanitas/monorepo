import { PrismaClient } from '../../generated/prisma';
import { seedUsers } from './user.seed';
import { seedCompaniesAndAddresses } from './company.seed';
import { seedProjects } from './project.seed';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  try {
    // Clear existing data (optional, adjust as needed)
    // Be careful with deletion order if you have strict foreign key constraints
    console.log('Deleting existing projects...');
    await prisma.project.deleteMany();
    console.log('Deleting existing addresses...');
    await prisma.address.deleteMany();
    console.log('Deleting existing companies...');
    await prisma.company.deleteMany();
    console.log('Deleting existing users...');
    await prisma.user.deleteMany();

    // Seed data in order
    const users = await seedUsers(prisma);
    const companies = await seedCompaniesAndAddresses(prisma);
    await seedProjects(prisma, companies);

    console.log(`Seeding finished.`);

  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 
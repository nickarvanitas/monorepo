import { type PrismaClient, type Company, ProjectStatus } from '../../generated/prisma';
import { faker } from '@faker-js/faker';

const projectStatuses = Object.values(ProjectStatus);

export async function seedProjects(prisma: PrismaClient, companies: Company[]): Promise<void> {
  console.log('Seeding projects...');
  let projectCount = 0;

  for (const company of companies) {
    const numProjects = faker.number.int({ min: 0, max: 4 });
    for (let i = 0; i < numProjects; i++) {
      const startDate = faker.date.past({ years: 2 });
      const status = faker.helpers.arrayElement(projectStatuses);
      const endDate = status === 'COMPLETED' || status === 'CANCELLED'
        ? faker.date.between({ from: startDate, to: new Date() })
        : null;

      await prisma.project.create({
        data: {
          name: `${faker.commerce.productName()} Project`,
          description: faker.lorem.sentence(),
          startDate,
          endDate,
          status,
          companyId: company.id,
        },
      });
      projectCount++;
    }
    console.log(`Created ${numProjects} projects for company: ${company.companyName}`);
  }
  console.log(`Seeded ${projectCount} total projects.`);
} 
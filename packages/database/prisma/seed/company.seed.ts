import type { PrismaClient, Company } from '../../generated/prisma';
import { faker } from '@faker-js/faker';

export async function seedCompaniesAndAddresses(prisma: PrismaClient): Promise<Company[]> {
  console.log('Seeding companies and addresses...');
  const companies: Company[] = [];
  const companyCount = 200;

  for (let i = 0; i < companyCount; i++) {
    const company = await prisma.company.create({
      data: {
        slug: faker.helpers.slugify(faker.company.name()),
        companyName: faker.company.name(),
        displayName: faker.company.name(),
        claimCompanyEmailDomain: faker.internet.domainName(),
        unionPercent: faker.number.int({ min: 0, max: 100 }),
        status: 'ACTIVE',
        ratingLevel: faker.number.int({ min: 1, max: 5 }),
        dbeStatuses: [],
        address: {
          create: {
            street1: faker.location.streetAddress(),
            street2: faker.helpers.maybe(() => faker.location.secondaryAddress()),
            city: faker.location.city(),
            stateName: faker.location.state(),
            stateCode: faker.location.state({ abbreviated: true }),
            postalCode: faker.location.zipCode(),
            countryCode: 'US',
            latitude: faker.location.latitude().toString(),
            longitude: faker.location.longitude().toString()
          }
        },
        projects: {
          create: Array.from({ length: faker.number.int({ min: 0, max: 4 }) }, () => ({
            name: faker.commerce.productName() + ' Project',
            description: faker.lorem.sentence(),
            startDate: faker.date.past({ years: 2 }),
            endDate: faker.helpers.maybe(() => faker.date.future()),
            status: faker.helpers.arrayElement(['PLANNING', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELLED'])
          }))
        }
      },
      include: { 
        address: true,
        projects: true
      }
    });
    companies.push(company);
  }
  console.log(`Seeded ${companies.length} companies and addresses.`);
  return companies;
} 
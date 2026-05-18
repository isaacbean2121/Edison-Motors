const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@edison.local" },
    update: {
      role: "ADMIN",
      emailVerified: new Date(),
      password,
    },
    create: {
      name: "Admin User",
      email: "admin@edison.local",
      password,
      role: "ADMIN",
      emailVerified: new Date(),
    },
  });

  await prisma.user.upsert({
    where: { email: "sales@edison.local" },
    update: {
      role: "SALES",
      emailVerified: new Date(),
      password,
    },
    create: {
      name: "Sales User",
      email: "sales@edison.local",
      password,
      role: "SALES",
      emailVerified: new Date(),
    },
  });

  console.log("Seeded users:");
  console.log("  admin@edison.local / admin123 (ADMIN)");
  console.log("  sales@edison.local / admin123 (SALES)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

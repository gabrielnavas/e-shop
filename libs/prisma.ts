import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

try {
  (async () => {
    await prisma.$queryRaw`SELECT 1`;
    console.log('database is online');
  })()
} catch (error) {
  throw new Error(`database is offline: ${error}`)
}

export default prisma;
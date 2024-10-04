import {PrismaClient} from '@prisma/client';

// declare global {
//   var cachedPrisma: PrismaClient;
// }

// let prisma: PrismaClient;
// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }

//   prisma = global.cachedPrisma;
// }

// export const db = prisma;

// Singleton function to create a new PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Extend globalThis with the custom prismaGlobal property
declare const globalThis: {
  prismaGlobal: PrismaClient | undefined;
} & typeof global;

// Use existing Prisma client if available, otherwise create a new one
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// In development, store the Prisma client in globalThis to avoid creating multiple instances
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export const db = prisma;

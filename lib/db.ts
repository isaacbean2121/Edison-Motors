import { PrismaClient } from '@prisma/client'

// this is for next.js hot reload. 
declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// if we're ! in production aka in development, we want to attach the prisma client to the global object so it can use existing prisma client
// this is to prevent making a prisma client over and over again
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
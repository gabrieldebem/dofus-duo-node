import { PrismaClient } from '@prisma/client'

export abstract class Repository {
    public prismaClient = new PrismaClient();
}
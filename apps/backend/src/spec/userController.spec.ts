import supertest from "supertest";
import { PrismaClient } from "@monorepo/prisma-client";
import app from '../main'

const prisma = new PrismaClient()

describe('userController', () => {

    describe('GET /users', () => {

        test('returns 200', async () => {
            for (let i = 0; i < 3; i++) {
                await prisma.user.create({ data: { name: 'test', createdAt: new Date(), active: true } });
            }
            const users = await prisma.user.findMany();
            const response = await supertest(app).get("/users");
            expect(response.status).toBe(200);
        })
    })


})
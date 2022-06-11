import { PrismaClient } from "@monorepo/prisma-client";
import { Router, Request, Response } from "express";

console.log(PrismaClient)
const prisma = new PrismaClient();
export const userController = Router();

// GET /users
userController.get("/", async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json({ users });
  });
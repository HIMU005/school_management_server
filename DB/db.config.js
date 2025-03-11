import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  // log: ["query"], // console the query those are used in CRUD operation
});

export default prisma;

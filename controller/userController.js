import prisma from "../DB/db.config.js";
import { hashPassword } from "../utils/hashPassword.js";

export const createUser = async (req, res) => {
  const { name, email, password, photoURL } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "user already exist please choose another email",
    });
  }
  // Hash password using the utility function
  const hashedPassword = await hashPassword(password);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      photoURL,
    },
  });

  return res.json({
    status: 201,
    data: newUser,
    message: "New user created successfully",
  });
};

export const createUserForEmailLogin = async (req, res) => {
  const { name, email, password, profileImge } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "user already exist please choose another email",
    });
  }
  // add in the postgreSQL db with the help of prisma js
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      photoURL,
    },
  });

  return res.json({
    status: 201,
    data: newUser,
    message: "New user created successfully",
  });
};

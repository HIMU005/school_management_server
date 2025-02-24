import prisma from "../DB/db.config.js";
import { hashPassword } from "../utils/hashPassword.js";

//post an user info with email and password
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

//post an user info with email
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

// get information who is login in with email and password
export const getAUser = async (req, res) => {
  const { email } = req.params;

  try {
    const findAUser = await prisma.user.findUnique({ where: { email: email } });
    if (findAUser) {
      return res.json({
        status: 200,
        message: "User is in the database",
        data: findAUser,
      });
    } else {
      return res.json({
        status: 404,
        message: "user not exit in out database. You can join us",
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: "server errror try again latter ",
    });
  }
};

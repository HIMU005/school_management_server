import prisma from "../DB/db.config.js";
import { hashPassword } from "../utils/hashPassword.js";

//post an user info with email and password
export const createUser = async (req, res) => {
  const { name, email, password, photoURL, role } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // Hash password using the utility function
  const hashedPassword = await hashPassword(password);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      photoURL,
      role,
    },
  });

  return res.json({
    status: 201,
    data: newUser,
    message: "New user created successfully",
  });
};

export const getAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    if (users) {
      return res.json({
        status: 200,
        message: "All user fetched successfully",
        data: users,
      });
    } else {
      return res.json({
        status: 404,
        message: "No user is in the database",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//post an user info with email
export const createUserForEmailLogin = async (req, res) => {
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

// get the information using using user_id
export const getAUserById = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  try {
    const findAUserById = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (findAUserById) {
      return res.json({
        status: 200,
        message: "user fetched successfully",
        data: findAUserById,
      });
    } else {
      return res.json({
        status: 404,
        message: "user not exit in out database with that id",
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: `server errror try again latter error: ${error}`,
    });
  }
};

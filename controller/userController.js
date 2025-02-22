import prisma from "../DB/db.config.js";
import { hashPassword } from "../utils/hashPassword.js";

export const createUser = async (req, res) => {
  const { name, email, password, profileImge } = req.body;
  console.log(name, email, password, profileImge, 6);

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
  console.log(hashPassword, 22);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      profileImge,
    },
  });

  return res.json({
    status: 200,
    data: newUser,
    message: "New user created successfully",
  });
};

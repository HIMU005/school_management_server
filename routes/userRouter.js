import { Router } from "express";
import {
  createUser,
  createUserForEmailLogin,
  getAllUser,
  getAUser,
  getAUserById,
} from "../controller/userController.js";
const router = Router();

// post an user data who join with email and password
router.post("/", createUser);

// get all user from database
router.get("/", getAllUser);

// post the data of a user who join with email login
router.post("/with-email", createUserForEmailLogin);

// get the user info for an user who  try to login with email and passowrd
router.get("/:email", getAUser);

// get the user info using user_id
router.get("/user_id/:id", getAUserById);

export default router;

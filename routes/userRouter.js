import { Router } from "express";
import {
  createUser,
  createUserForEmailLogin,
  getAUser,
} from "../controller/userController.js";
const router = Router();

// post an user data who join with email and password
router.post("/", createUser);

// post the data of a user who join with email login
router.post("/with-email", createUserForEmailLogin);

// get the user info for an user who  try to login with email and passowrd
router.get("/:email", getAUser);

export default router;

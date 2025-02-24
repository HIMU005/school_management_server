import { Router } from "express";
import {
  createUser,
  createUserForEmailLogin,
} from "../controller/userController.js";
const router = Router();

// post an user data who join with email and password
router.post("/", createUser);

// post the data of a user who join with email login
router.post("/with-email", createUserForEmailLogin);

export default router;

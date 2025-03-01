import { Router } from "express";
import studentRouter from "./studentRouter.js";
import userRouter from "./userRouter.js";
const router = Router();

// route for user
router.use("/api/user", userRouter);

// route for students
router.use("/api/student", studentRouter);

export default router;

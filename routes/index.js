import { Router } from "express";
import studentRouter from "./studentRouter.js";
import userRouter from "./userRouter.js";
import teacherRouter from "./teacherRouter.js";
const router = Router();

// route for user
router.use("/api/user", userRouter);

// route for students
router.use("/api/student", studentRouter);

// route for teachers
router.use("/api/teacher", teacherRouter);

export default router;

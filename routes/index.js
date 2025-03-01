import { Router } from "express";
import classRouter from "./classRouter.js";
import studentRouter from "./studentRouter.js";
import teacherRouter from "./teacherRouter.js";
import userRouter from "./userRouter.js";
const router = Router();

// route for user
router.use("/api/user", userRouter);

// route for students
router.use("/api/student", studentRouter);

// route for teachers
router.use("/api/teacher", teacherRouter);

// route for classes
router.use("/api/class", classRouter);

export default router;

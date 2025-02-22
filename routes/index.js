import { Router } from "express";
import userRouter from "./userRouter.js";
const router = Router();

// route for user
router.use("/api/user", userRouter);

export default router;

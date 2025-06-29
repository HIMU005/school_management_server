import { Router } from "express";
import classRouter from "./classRouter.js";
import filterRouter from "./filterRouter.js";
import paymentRouter from "./paymentRouter.js";
import studentRouter from "./studentRouter.js";
import teacherRouter from "./teacherRouter.js";
import updateRouter from "./updateRouter.js";
import userRouter from "./userRouter.js";
// import SSLCommerzPayment from "sslcommerz-lts";

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false;
const router = Router();

// route for user
router.use("/api/user", userRouter);

// route for students
router.use("/api/student", studentRouter);

// route for teachers
router.use("/api/teacher", teacherRouter);

// route for classes
router.use("/api/class", classRouter);

// update router
router.use("/api/update_user", updateRouter);

// filter router
router.use("/api/filter", filterRouter);

//payment router
router.use("/api/payment", paymentRouter);

export default router;

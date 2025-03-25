import { Router } from "express";
import { filter_user_for_attendance } from "../controller/filterController.js";
const router = Router();

router.get("/student_for_attendance", filter_user_for_attendance);

export default router;

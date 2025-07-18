import { Router } from "express";
import {
  filter_user_for_attendance,
  show_attendance_after_filter,
  show_filtered_attendance_by_date,
} from "../controller/filterController.js";
const router = Router();

// filter all the student by class
router.get("/student_for_attendance", filter_user_for_attendance);

// filter all student attendance by query provide
router.get("/see_attendance", show_attendance_after_filter);

// filter all data of a single student by date
router.get("/see_attendance_by_date", show_filtered_attendance_by_date);

export default router;

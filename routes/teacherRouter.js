import { Router } from "express";
import {
  createATeacher,
  getAllTeachers,
  getASingleTeacher,
  postAtendancce,
} from "../controller/teacherController.js";

const router = Router();

// post a student information
router.post("/", createATeacher);

// get a students information
router.get("/", getAllTeachers);

// get a single teacher information using user_id
router.get("/user_id/:id", getASingleTeacher);

// take attendance for all students in a class
router.post("/attendance", postAtendancce);

export default router;

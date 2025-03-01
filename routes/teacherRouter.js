import { Router } from "express";
import {
  createATeacher,
  getAllTeachers,
} from "../controller/teacherController.js";

const router = Router();

// post a student information
router.post("/", createATeacher);

// get a students information
router.get("/", getAllTeachers);

export default router;

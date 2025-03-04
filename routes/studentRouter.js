import { Router } from "express";
import {
  createAStudent,
  getAllStudents,
  getASingleStudent,
} from "../controller/studentController.js";

const router = Router();

// post a student information
router.post("/", createAStudent);

// get a students information
router.get("/", getAllStudents);

// get a single student information useing user_id
router.get("/user_id/:id", getASingleStudent);

export default router;

import { Router } from "express";
import {
  createAStudent,
  getAllStudents,
} from "../controller/studentController.js";

const router = Router();

// post a student information
router.post("/", createAStudent);

// get a students information
router.get("/", getAllStudents);

export default router;

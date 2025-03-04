import { Router } from "express";
import {
  createAClass,
  getAllClass,
  getASingleClass,
} from "../controller/classController.js";

const router = Router();

// post a class data
router.post("/", createAClass);

// get all class data
router.get("/", getAllClass);

// get a single class information using id
router.get("/:id", getASingleClass);

export default router;

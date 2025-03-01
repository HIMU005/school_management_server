import { Router } from "express";
import { createAClass, getAllClass } from "../controller/classController.js";

const router = Router();

// post a class data
router.post("/", createAClass);

// get all class data
router.get("/", getAllClass);

export default router;

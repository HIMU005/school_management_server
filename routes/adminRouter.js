import { Router } from "express";
import { addBook } from "../controller/AdminController.js";

const router = Router();

router.post("/add-book", addBook);

export default router;

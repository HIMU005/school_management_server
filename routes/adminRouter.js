import { Router } from "express";
import { addBook, getBooks } from "../controller/AdminController.js";

const router = Router();

router.post("/add-book", addBook);

router.get("/get-books", getBooks);

export default router;

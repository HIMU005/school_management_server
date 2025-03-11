import { Router } from "express";
import { updateUser } from "../controller/updateUserController.js";

const router = Router();

router.put("/:id", updateUser);

export default router;

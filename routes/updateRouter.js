import { Router } from "express";
import { updateUser } from "../controller/routerController.js";

const router = Router();

router.get("/", updateUser);

export default router;

import { Router } from "express";
import {
  paymentByStudent,
  paymentTransactionId,
} from "../controller/paymentController.js";

const router = Router();

// payment by student
router.post("/", paymentByStudent);

// payment by id
router.post("/:transactionId", paymentTransactionId);

export default router;

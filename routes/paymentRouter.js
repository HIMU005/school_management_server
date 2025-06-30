import { Router } from "express";
import {
  getPaymentInfoForAUserByEmail,
  paymentByStudent,
  paymentTransactionId,
} from "../controller/paymentController.js";

const router = Router();

// payment by student
router.post("/", paymentByStudent);

// payment by id
router.post("/:transactionId", paymentTransactionId);

// get all payment
router.get("/:email", getPaymentInfoForAUserByEmail);

export default router;

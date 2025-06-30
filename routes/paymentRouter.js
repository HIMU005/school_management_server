import { Router } from "express";
import {
  getPaymentInfoForAUserByEmail,
  paymentByStudent,
  paymentCancleTransactionId,
  paymentFailTransactionId,
  paymentSuccessTransactionId,
} from "../controller/paymentController.js";

const router = Router();

// payment by student
router.post("/", paymentByStudent);

// payment success by id
router.post("/success/:transactionId", paymentSuccessTransactionId);

// payment cancle by id
router.post("/cancle/:transactionId", paymentCancleTransactionId);

// payment failed by id
router.post("/fail/:transactionId", paymentFailTransactionId);

// get all payment
router.get("/:email", getPaymentInfoForAUserByEmail);

export default router;

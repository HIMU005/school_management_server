import { Router } from "express";
import SSLCommerzPayment from "sslcommerz-lts";
import prisma from "../DB/db.config.js";
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false;
const router = Router();
export const paymentByStudent = async (req, res) => {
  const { user, month, year } = req.body;
  const transactionId = `TXN_${Date.now()}`;

  const data = {
    total_amount: 5000,
    currency: "BDT",
    tran_id: transactionId,
    success_url: `http://localhost:8000/api/payment/${transactionId}`,

    fail_url: "http://localhost:8000/fail",
    cancel_url: "http://localhost:8000/cancel",
    ipn_url: "http://localhost:8000/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: user.name,
    cus_email: user.email,
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: user.phone,
    cus_fax: "01711111111",
    ship_name: user.name,
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then(async (apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    // res.send({ url: GatewayPageURL });
    const paymentInfo = {
      transactionId,
      month,
      year,
      user_id: user.id,
      amount: 5000,
      status: "PENDING",
      method: "SSLCommerz",
    };
    try {
      await prisma.payment.create({ data: paymentInfo });
      res.send({ url: GatewayPageURL });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Database error during payment creation",
      });
    }
  });
};

export const paymentTransactionId = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const payment = await prisma.payment.update({
      where: { transactionId },
      data: {
        status: "PAID",
        paymentDate: new Date(),
      },
    });
    console.log("try to redirect");
    return res.redirect("http://localhost:5173/dashboard/see-payment-list");
  } catch (error) {
    return res.json({
      status: 404,
      message: error.message,
    });
  }
};

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
} = require("../Controller/paymentController");



router.get("/all", authMiddleware, getAllPayments);

router.get("/:id", authMiddleware, getPaymentById);

router.delete("/delete/:id", authMiddleware, deletePayment);

module.exports = router;

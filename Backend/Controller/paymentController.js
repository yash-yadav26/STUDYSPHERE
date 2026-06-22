const Payment = require("../Model/Payment");
const Enrollment = require("../Model/Enrollment");

const { validateAmount } = require("../utils/validation");

// Create Payment
const createPayment = async (req, res) => {
  try {
    const {
      enrollmentId,
      amount,
      paymentMethod,
      transactionId,
      paymentStatus,
    } = req.body;

    if (!enrollmentId || !amount || !paymentMethod || !transactionId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validateAmount(amount)) {
      return res.status(400).json({
        success: false,
        message: "Amount must be greater than 0",
      });
    }

    const enrollment = await Enrollment.findById(enrollmentId);

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    const existingTransaction = await Payment.findOne({
      transactionId,
    });

    if (existingTransaction) {
      return res.status(400).json({
        success: false,
        message: "Transaction ID already exists",
      });
    }

    const payment = await Payment.create({
      enrollmentId,
      amount,
      paymentMethod,
      transactionId,
      paymentStatus,
    });

    res.status(201).json({
      success: true,
      message: "Payment recorded successfully",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate({
      path: "enrollmentId",
      populate: {
        path: "studentId",
        select: "name",
      },
    });

    res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Payment By Id
const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate(
      "enrollmentId",
    );

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Payment
const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
};

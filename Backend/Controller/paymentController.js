const Payment = require("../Model/Payment");

// Get All Payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate({
        path: "enrollmentId",
        populate: {
          path: "studentId",
          select: "name email phone",
        },
      })
      .sort({ createdAt: -1 });

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
    const payment = await Payment.findById(
      req.params.id
    ).populate({
      path: "enrollmentId",
      populate: {
        path: "studentId",
        select: "name email phone",
      },
    });

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
    const payment =
      await Payment.findByIdAndDelete(
        req.params.id
      );

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Payment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  deletePayment,
};
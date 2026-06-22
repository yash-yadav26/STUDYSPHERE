const Invoice = require("../Model/Invoice");
const Payment = require("../Model/Payment");

// Create Invoice
const createInvoice = async (req, res) => {
  try {
    const { paymentId } = req.body;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        message: "Payment ID is required",
      });
    }

    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    // Prevent duplicate invoice
    const existingInvoice = await Invoice.findOne({
      paymentId,
    });

    if (existingInvoice) {
      return res.status(400).json({
        success: false,
        message: "Invoice already generated for this payment",
      });
    }

    const invoiceNumber = "INV-" + Date.now();

    const invoice = await Invoice.create({
      invoiceNumber,
      paymentId,
      amount: payment.amount,
    });

    res.status(201).json({
      success: true,
      message: "Invoice generated successfully",
      invoice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate("paymentId");

    res.status(200).json({
      success: true,
      count: invoices.length,
      invoices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Invoice By Id
const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate("paymentId");

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: "Invoice not found",
      });
    }

    res.status(200).json({
      success: true,
      invoice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Invoice
const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: "Invoice not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Invoice deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  deleteInvoice,
};

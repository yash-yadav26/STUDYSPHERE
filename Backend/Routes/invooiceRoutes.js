const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  deleteInvoice,
} = require("../Controller/invoiceController");

router.post("/create", authMiddleware, createInvoice);

router.get("/all", authMiddleware, getAllInvoices);

router.get("/:id", authMiddleware, getInvoiceById);

router.delete("/delete/:id", authMiddleware, deleteInvoice);

module.exports = router;

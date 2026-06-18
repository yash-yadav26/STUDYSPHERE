const express = require("express");
const router = express.Router();

const authMiddleware = require("../Middleware/authMiddleware");

const {
  createSeat,
  getAllSeats,
  getSeatById,
  updateSeat,
  deleteSeat,
} = require("../Controller/seatController");

// Create Seat
router.post("/create", authMiddleware, createSeat);

// Get All Seats
router.get("/all", authMiddleware, getAllSeats);

// Get Single Seat
router.get("/:id", authMiddleware, getSeatById);

// Update Seat
router.put("/update/:id", authMiddleware, updateSeat);

// Delete Seat
router.delete("/delete/:id", authMiddleware, deleteSeat);

module.exports = router;

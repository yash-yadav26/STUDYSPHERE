const Seat = require("../Model/Seat");
const { validateSeatNumber } = require("../utils/validation");

// Create Seat
const createSeat = async (req, res) => {
  try {
    const { seatNumber } = req.body;

    if (!seatNumber) {
      return res.status(400).json({
        success: false,
        message: "Seat number is required",
      });
    }

    if (!validateSeatNumber(seatNumber)) {
      return res.status(400).json({
        success: false,
        message: "Seat number must be between 1 and 50000",
      });
    }

    const existingSeat = await Seat.findOne({
      seatNumber,
    });

    if (existingSeat) {
      return res.status(400).json({
        success: false,
        message: "Seat already exists",
      });
    }

    const seat = await Seat.create({
      seatNumber,
    });

    res.status(201).json({
      success: true,
      message: "Seat created successfully",
      seat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get All Seats
const getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.find().sort({
      seatNumber: 1,
    });

    res.status(200).json({
      success: true,
      count: seats.length,
      seats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Seat
const getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findById(req.params.id);

    if (!seat) {
      return res.status(404).json({
        success: false,
        message: "Seat not found",
      });
    }

    res.status(200).json({
      success: true,
      seat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Seat
const updateSeat = async (req, res) => {
  try {
    const seat = await Seat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    
    if (req.body.seatNumber && !validateSeatNumber(req.body.seatNumber)) {
      return res.status(400).json({
        success: false,
        message: "Seat number must be between 1 and 50000",
      });
    }

    if (!seat) {
      return res.status(404).json({
        success: false,
        message: "Seat not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Seat updated successfully",
      seat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Seat
const deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByIdAndDelete(req.params.id);

    if (!seat) {
      return res.status(404).json({
        success: false,
        message: "Seat not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Seat deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSeat,
  getAllSeats,
  getSeatById,
  updateSeat,
  deleteSeat,
};

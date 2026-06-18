const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    seatNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      max: 50000,
    },

    status: {
      type: String,
      enum: ["Available", "Occupied"],
      default: "Available",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Seat", seatSchema);

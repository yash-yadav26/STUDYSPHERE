const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    admissionDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    address: {
      type: String,
      required: true,
    },
    totalFees:{
      type:Number,
      required:true,
    },
    remainingAmount: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Student", studentSchema);

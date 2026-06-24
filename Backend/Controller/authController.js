const Admin = require("../Model/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Seat = require("../Model/Seat");
const {
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
} = require("../utils/validation");

// Register
const register = async (req, res) => {
  try {
    const { name, email, password, totalSeats } = req.body;

    if (!name || !email || !password || !totalSeats) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (Number(totalSeats) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Total seats must be greater than 0",
      });
    }

    if (!validateName(name)) {
      return res.status(400).json({
        success: false,
        message:
          "Name must contain only alphabets and spaces (3-30 characters)",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Gmail address",
      });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const existingAdmin = await Admin.findOne();

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    try {
      const seats = [];

      for (let i = 1; i <= Number(totalSeats); i++) {
        seats.push({
          seatNumber: i,
          status: "Available",
        });
      }

      await Seat.insertMany(seats);
    } catch (error) {
      await Admin.findByIdAndDelete(admin._id);

      return res.status(500).json({
        success: false,
        message: "Failed to generate seats",
      });
    }
    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Gmail address",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { register, login };

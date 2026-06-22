const Enrollment = require("../Model/Enrollment");
const Student = require("../Model/Student");
const Seat = require("../Model/Seat");


// Create Enrollment
const createEnrollment = async (req, res) => {
  try {
     
    const { studentId, seatId, planType, startDate } = req.body;

    // Required Fields
    if (!studentId || !seatId || !planType || !startDate) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check Student
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Check Seat
    const seat = await Seat.findById(seatId);

    if (!seat) {
      return res.status(404).json({
        success: false,
        message: "Seat not found",
      });
    }

    // Prevent Double Booking
    if (seat.status === "Occupied") {
      return res.status(400).json({
        success: false,
        message: "Seat already occupied",
      });
    }

    let endDate = new Date(startDate);

    // Plan Logic
    if (planType === "Daily Pass") {
      endDate.setDate(endDate.getDate() + 1);
    } else if (planType === "Monthly Pass") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (planType === "Full Day Plan") {
      endDate.setHours(23, 59, 59, 999);
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid plan type",
      });
    }

    // Create Enrollment
    const enrollment = await Enrollment.create({
      studentId,
      seatId,
      planType,
      startDate,
      endDate,
    });

    // Occupy Seat Automatically
    seat.status = "Occupied";

    await seat.save();

    res.status(201).json({
      success: true,
      message: "Enrollment created successfully",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Enrollments

const getAllEnrollments = async (req, res) => {
  try {
    
    const enrollments = await Enrollment.find()
      .populate("studentId", "name email phone")
      .populate("seatId", "seatNumber status");

    res.status(200).json({
      success: true,
      count: enrollments.length,
      enrollments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Enrollment By Id
const getEnrollmentById = async (req, res) => {
  try {
    
    const enrollment = await Enrollment.findById(req.params.id)
      .populate("studentId", "name email phone")
      .populate("seatId", "seatNumber status");

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    res.status(200).json({
      success: true,
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Enrollment
const deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    // Release Seat
    const seat = await Seat.findById(enrollment.seatId);

    if (seat) {
      seat.status = "Available";
      await seat.save();
    }

    await Enrollment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Enrollment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  deleteEnrollment,
  
};

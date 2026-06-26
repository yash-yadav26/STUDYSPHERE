const Enrollment = require("../Model/Enrollment");
const Student = require("../Model/Student");
const Seat = require("../Model/Seat");

// Create Enrollment
// Create Enrollment
const createEnrollment = async (req, res) => {
  try {
    const {
      studentId,
      seatId,
      planType,
      duration,
      startDate,
    } = req.body;

    if (
      !studentId ||
      !seatId ||
      !planType ||
      !duration ||
      !startDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const seat = await Seat.findById(seatId);

    if (!seat) {
      return res.status(404).json({
        success: false,
        message: "Seat not found",
      });
    }

    if (seat.status === "Occupied") {
      return res.status(400).json({
        success: false,
        message: "Seat already occupied",
      });
    }

    let endDate = new Date(startDate);

    switch (planType) {
      case "Hourly Pass":
        endDate.setHours(
          endDate.getHours() + Number(duration)
        );
        break;

      case "Daily Pass":
        endDate.setDate(
          endDate.getDate() + Number(duration)
        );
        break;

      case "Monthly Pass":
        endDate.setMonth(
          endDate.getMonth() + Number(duration)
        );
        break;

      case "Yearly Pass":
        endDate.setFullYear(
          endDate.getFullYear() + Number(duration)
        );
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid plan type",
        });
    }

    const enrollment = await Enrollment.create({
      studentId,
      seatId,
      planType,
      duration,
      startDate,
      endDate,
      status: "Active",
    });

    seat.status = "Occupied";
    await seat.save();

    student.status = "Active";
    await student.save();

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
const getAllEnrollments = async (
  req,
  res
) => {
  try {
    const enrollments =
      await Enrollment.find()
        .populate(
          "studentId",
          "name email phone status"
        )
        .populate(
          "seatId",
          "seatNumber status"
        )
        .sort({ createdAt: -1 });

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
const getEnrollmentById = async (
  req,
  res
) => {
  try {
    const enrollment =
      await Enrollment.findById(
        req.params.id
      )
        .populate(
          "studentId",
          "name email phone status"
        )
        .populate(
          "seatId",
          "seatNumber status"
        );

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
const deleteEnrollment = async (
  req,
  res
) => {
  try {
    const enrollment =
      await Enrollment.findById(
        req.params.id
      );

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    const seat =
      await Seat.findById(
        enrollment.seatId
      );

    if (seat) {
      seat.status = "Available";
      await seat.save();
    }

    await Student.findByIdAndUpdate(
      enrollment.studentId,
      {
        status: "Inactive",
      }
    );

    await Enrollment.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Enrollment deleted successfully",
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
const Student = require("../Model/Student");
const Seat = require("../Model/Seat");
const Enrollment = require("../Model/Enrollment");
const Payment = require("../Model/Payment");

const {
  validateName,
  validateEmail,
  validatePhone,
  validateAddress,
} = require("../utils/validation");

// Create Student
const createStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      admissionDate,
      address,

      seatId,
      planType,

      amount,
      paymentMethod,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !admissionDate ||
      !address ||
      !seatId ||
      !planType ||
      !amount ||
      !paymentMethod
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validateName(name)) {
      return res.status(400).json({
        success: false,
        message:
          "Name must contain only alphabets and spaces",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Gmail address",
      });
    }

    if (!validatePhone(phone)) {
      return res.status(400).json({
        success: false,
        message:
          "Phone must be 10 digits and start with 6,7,8 or 9",
      });
    }

    if (!validateAddress(address)) {
      return res.status(400).json({
        success: false,
        message: "Address contains invalid characters",
      });
    }

    const existingStudent = await Student.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Email or Phone already exists",
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

    const student = await Student.create({
      name,
      email,
      phone,
      admissionDate,
      address,
    });

    let endDate = new Date(admissionDate);

    if (planType === "Hourly Pass") {
      endDate.setHours(endDate.getHours() + 1);
    }

    if (planType === "Daily Pass") {
      endDate.setDate(endDate.getDate() + 1);
    }

    if (planType === "Monthly Pass") {
      endDate.setMonth(endDate.getMonth() + 1);
    }

    if (planType === "Yearly Pass") {
      endDate.setFullYear(
        endDate.getFullYear() + 1
      );
    }

    const enrollment =
      await Enrollment.create({
        studentId: student._id,
        seatId,
        planType,
        startDate: admissionDate,
        endDate,
      });

    seat.status = "Occupied";
    await seat.save();

    const transactionId =
      "TXN-" + Date.now();

    const payment = await Payment.create({
      enrollmentId: enrollment._id,
      amount,
      paymentMethod,
      transactionId,
      paymentStatus: "Paid",
    });

    res.status(201).json({
      success: true,
      message:
        "Student admission completed successfully",
      student,
      enrollment,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get All Students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({
      createdAt: -1,
    });

    const studentsWithDetails = await Promise.all(
      students.map(async (student) => {
        const enrollment = await Enrollment.findOne({
          studentId: student._id,
        }).populate("seatId");

        let payment = null;

        if (enrollment) {
          payment = await Payment.findOne({
            enrollmentId: enrollment._id,
          });
        }

        return {
          ...student.toObject(),

          seatNumber:
            enrollment?.seatId?.seatNumber || "-",

          planType:
            enrollment?.planType || "-",

          paymentMethod:
            payment?.paymentMethod || "-",

          paymentStatus:
            payment?.paymentStatus || "-",
        };
      })
    );

    res.status(200).json({
      success: true,
      count: studentsWithDetails.length,
      students: studentsWithDetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Single Student
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};

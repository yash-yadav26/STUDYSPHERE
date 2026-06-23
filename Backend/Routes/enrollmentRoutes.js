const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  deleteEnrollment,
} = require("../Controller/enrollmentController");

// Create Enrollment
router.post("/create", authMiddleware, createEnrollment);

// Get All Enrollments
router.get("/all", authMiddleware, getAllEnrollments);

// Get Single Enrollment
router.get("/:id", authMiddleware, getEnrollmentById);

// Delete Enrollment
router.delete("/delete/:id", authMiddleware, deleteEnrollment);

module.exports = router;

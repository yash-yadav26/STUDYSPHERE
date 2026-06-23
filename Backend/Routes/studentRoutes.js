const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../Controller/studentController");

// Create Student
router.post("/create", authMiddleware, createStudent);

// Get All Students
router.get("/all", authMiddleware, getAllStudents);

// Get Single Student
router.get("/:id", authMiddleware, getStudentById);

// Update Student
router.put("/update/:id", authMiddleware, updateStudent);

// Delete Student
router.delete("/delete/:id", authMiddleware, deleteStudent);

module.exports = router;

const express = require("express");

const router = express.Router();

const authMiddleware = require("../Middleware/authMiddleware");

const { getDashboardStats } = require("../Controller/reportController");

router.get("/dashboard", authMiddleware, getDashboardStats);

module.exports = router;

const Student = require("../Model/Student");
const Seat = require("../Model/Seat");
const Payment = require("../Model/Payment");
const Enrollment = require("../Model/Enrollment");
const { expireEnrollments } = require("../Controller/enrollmentController");

const getDashboardStats = async (req, res) => {
  try {
    await expireEnrollments();
    const TOTAL_SEATS = 500;

    // Total Students
    const totalStudents = await Student.countDocuments();

    // Occupied Seats
    const occupiedSeats = await Seat.countDocuments({
      status: "Occupied",
    });

    // Vacant Seats
    const vacantSeats = TOTAL_SEATS - occupiedSeats;

    // Active Memberships
    const activeMemberships = await Enrollment.countDocuments({
      status: "Active",
    });

    // Today's Date
    const today = new Date();

    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1,
    );

    // Daily Revenue
    const dailyRevenueData = await Payment.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
          createdAt: {
            $gte: startOfDay,
            $lt: endOfDay,
          },
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]);

    const dailyRevenue = dailyRevenueData[0]?.total || 0;

    // Monthly Revenue
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const monthlyRevenueData = await Payment.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
          createdAt: {
            $gte: startOfMonth,
          },
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]);

    const monthlyRevenue = monthlyRevenueData[0]?.total || 0;

    // Enrollment Trends
    const enrollmentTrends = await Enrollment.countDocuments();

    res.status(200).json({
      success: true,
      dashboard: {
        totalStudents,
        totalSeats: TOTAL_SEATS,
        occupiedSeats,
        vacantSeats,
        activeMemberships,
        dailyRevenue,
        monthlyRevenue,
        enrollmentTrends,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};

const cron = require("node-cron");
const Enrollment = require("../Model/Enrollment");
const Seat = require("../Model/Seat");
const Student = require("../Model/Student");

// Runs every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  try {
    console.log("Checking expired enrollments...");

    const currentTime = new Date();

    const expiredEnrollments = await Enrollment.find({
      endDate: { $lte: currentTime },
      status: "Active",
    });

    for (const enrollment of expiredEnrollments) {
      // Update Enrollment Status
      enrollment.status = "Expired";
      await enrollment.save();

      // Make Seat Available
      await Seat.findByIdAndUpdate(enrollment.seatId, {
        status: "Available",
      });

      // Make Student Inactive
      await Student.findByIdAndUpdate(enrollment.studentId, {
        status: "Inactive",
      });

      console.log(
        `Enrollment ${enrollment._id} expired successfully.`
      );
    }
  } catch (error) {
    console.error("Cron Job Error:", error.message);
  }
});
const cron = require("node-cron");
const Enrollment = require("../Model/Enrollment");
const Seat = require("../Model/Seat");
const Student = require("../Model/Student");

cron.schedule("0 0 * * *", async () => {
  console.log("Checking expired enrollments...");

  const expiredEnrollments =
    await Enrollment.find({
      endDate: { $lt: new Date() },
      status: "Active",
    });

  for (const enrollment of expiredEnrollments) {
    enrollment.status = "Expired";
    await enrollment.save();

    await Seat.findByIdAndUpdate(
      enrollment.seatId,
      {
        status: "Available",
      }
    );

    await Student.findByIdAndUpdate(
      enrollment.studentId,
      {
        status: "Inactive",
      }
    );
  }
});
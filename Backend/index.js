const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./Jobs/enrollmentCron");

require("dotenv").config();


const authRoutes = require("./Routes/authRoutes");
const studentRoutes = require("./Routes/studentRoutes");
const seatRoutes = require("./Routes/seatRoutes");
const enrollmentRoutes = require("./Routes/enrollmentRoutes");
const paymentRoutes = require("./Routes/paymentRoutes");
const invoiceRoutes = require("./Routes/invooiceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/seats", seatRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/payments", require("./Routes/paymentRoutes"));
app.use("/api/invoices", require("./Routes/invooiceRoutes"));
app.use("/api/reports", require("./Routes/reportRoutes"));



mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

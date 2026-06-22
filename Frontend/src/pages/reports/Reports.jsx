import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import ReportStats from "../../components/reports/ReportStats";
import RevenueReport from "../../components/reports/RevenueReport";
import EnrollmentReport from "../../components/reports/EnrollmentReport";
import OccupancyReport from "../../components/reports/OccupancyReport";
import SubscriptionReport from "../../components/reports/SubscriptionReport";

import { getPayments } from "../../services/paymentService";
import { getEnrollments } from "../../services/enrollmentService";
import { getSeats } from "../../services/seatService";
import { getStudents } from "../../services/studentService";



export default function Reports() {
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [
      studentsRes,
      paymentsRes,
      enrollmentsRes,
      seatsRes,
    ] = await Promise.all([
      getStudents(),
      getPayments(),
      getEnrollments(),
      getSeats(),
    ]);

    setStudents(
      studentsRes.data.students || []
    );

    setPayments(
      paymentsRes.data.payments || []
    );

    setEnrollments(
      enrollmentsRes.data.enrollments || []
    );

    setSeats(seatsRes.data.seats || []);
  };

  const revenue = payments.reduce(
    (sum, payment) =>
      sum + payment.amount,
    0
  );

  const occupiedSeats = seats.filter(
    (seat) =>
      seat.status === "Occupied"
  ).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          Reports
        </h1>

        <ReportStats
          studentsCount={students.length}
          enrollmentsCount={
            enrollments.length
          }
          revenue={revenue}
          occupiedSeats={occupiedSeats}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <RevenueReport
            payments={payments}
          />

          <OccupancyReport
            seats={seats}
          />

          <EnrollmentReport
            enrollments={enrollments}
          />

          <SubscriptionReport
            enrollments={enrollments}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
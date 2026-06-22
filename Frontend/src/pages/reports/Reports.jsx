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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
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

      setSeats(
        seatsRes.data.seats || []
      );
    } catch (error) {
      console.error(
        "Failed to load reports:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const revenue = payments.reduce(
    (sum, payment) =>
      payment.paymentStatus === "Paid"
        ? sum + payment.amount
        : sum,
    0
  );

  const occupiedSeats = seats.filter(
    (seat) =>
      seat.status === "Occupied"
  ).length;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl shadow">
          Loading Reports...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          Reports Dashboard
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
import { useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import OccupancyChart from "../../components/dashboard/OccupancyChart";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import PendingPaymentsCard from "../../components/dashboard/PendingPaymentsCard";
import ExpiringMembershipsCard from "../../components/dashboard/ExpiringMembershipsCard";
import SeatMap from "../../components/dashboard/SeatMap";
import RecentEnrollmentsTable from "../../components/dashboard/RecentEnrollmentsTable";
import { getDashboardData } from "../../services/dashboardService";
import Card from "../../components/ui/Card";

import { iconStyles } from "../../constants/iconStyles";

import {
  Users,
  IndianRupee,
  CreditCard,
  Armchair,
} from "lucide-react";



const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [payments, setPayments] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [seats, setSeats] = useState([]);

  
 const loadDashboard = async () => {
  try {
    const data = await getDashboardData();

    setStudents(data.students);
    setEnrollments(data.enrollments);
    setPayments(data.payments);
    setInvoices(data.invoices);
    setSeats(data.seats);
  } catch (error) {
    console.log(error);
  }
};

loadDashboard();


  const totalStudents = students.length;

  const totalRevenue = payments
    .filter((p) => p.paymentStatus === "Paid")
    .reduce(
      (sum, p) => sum + Number(p.amount || 0),
      0
    );

  const occupiedSeats = seats.filter(
    (seat) => seat.status === "Occupied"
  ).length;

  const availableSeats = seats.filter(
    (seat) => seat.status === "Available"
  ).length;

  const occupancyPercentage =
    seats.length > 0
      ? Math.round(
          (occupiedSeats / seats.length) * 100
        )
      : 0;

  const activeMemberships = enrollments.filter(
    (e) => e.status === "Active"
  ).length;

  return (
    <DashboardLayout>

      <WelcomeCard
        name="Admin"
        revenue={`₹${totalRevenue}`}
        students={totalStudents}
        seats={availableSeats}
      />

      <h2 className="text-2xl font-semibold mt-8 mb-6">
        Dashboard Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Students"
          value={totalStudents}
          subtitle={`${enrollments.length} Enrollments`}
          icon={<Users size={20} />}
          iconColor={iconStyles.students}
        />

        <DashboardCard
          title="Revenue"
          value={`₹${totalRevenue}`}
          subtitle={`${payments.length} Payments`}
          icon={<IndianRupee size={20} />}
          iconColor={iconStyles.revenue}
        />

        <DashboardCard
          title="Occupancy"
          value={`${occupancyPercentage}%`}
          subtitle={`${occupiedSeats}/${seats.length} Seats`}
          icon={<Armchair size={20} />}
          iconColor={iconStyles.occupancy}
        />

        <DashboardCard
          title="Memberships"
          value={activeMemberships}
          subtitle={`${invoices.length} Invoices`}
          icon={<CreditCard size={20} />}
          iconColor={iconStyles.memberships}
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2">
          <Card title="Revenue Analytics">
            <RevenueChart payments={payments} />
          </Card>
        </div>

        <div>
          <Card title="Occupancy Overview">
            <OccupancyChart
              occupiedSeats={occupiedSeats}
              availableSeats={availableSeats}
            />
          </Card>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div>
          <Card title="Recent Enrollments">
            <RecentEnrollmentsTable
              enrollments={enrollments}
            />
          </Card>
        </div>

        <div className="space-y-6">

          <Card title="Pending Payments">
            <PendingPaymentsCard
              payments={payments}
            />
          </Card>

          <Card title="Expiring Memberships">
            <ExpiringMembershipsCard
              enrollments={enrollments}
            />
          </Card>

        </div>

        <div>
          <Card title="Seat Availability">
            <SeatMap seats={seats} />
          </Card>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
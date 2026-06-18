import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";

import {
  Users,
  IndianRupee,
  Building2,
  CreditCard,
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          
           <DashboardCard
          title="Total Students"
          value="320"
          subtitle="+12 this month"
          icon={<Users size={28} />}
        />

        <DashboardCard
          title="Revenue"
          value="₹1,25,000"
          subtitle="+8%"
          icon={<IndianRupee size={28} />}
        />

        <DashboardCard
          title="Occupancy"
          value="78%"
          subtitle="156/200 Seats"
          icon={<Building2 size={28} />}
        />

        <DashboardCard
          title="Memberships"
          value="245"
          subtitle="12 Expiring"
          icon={<CreditCard size={28} />}
        />


      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
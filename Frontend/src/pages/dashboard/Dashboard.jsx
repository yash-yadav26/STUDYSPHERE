import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import OccupancyChart from "../../components/dashboard/OccupancyChart";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import PendingPaymentsCard from "../../components/dashboard/PendingPaymentsCard";
import ExpiringMembershipsCard from "../../components/dashboard/ExpiringMembershipsCard";
import SeatMap from "../../components/dashboard/SeatMap";
import RecentEnrollmentsTable from "../../components/dashboard/RecentEnrollmentsTable";
import { iconStyles } from "../../constants/iconStyles";
import {
  Users,
  IndianRupee,
  CreditCard,
  Armchair,
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
       

  <WelcomeCard
    name="Admin"
    revenue="₹4,500"
    students="12"
    seats="44"
  />

  
         <h2 className="text-2xl font-semibold mt-8 mb-6">
             Dashboard Statistics
           </h2>

     

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          
           <DashboardCard
          title="Total Students"
          value="320"
          subtitle="+12 this month"
          icon={<Users size={20} />}
            iconColor={iconStyles.students}
        />

        <DashboardCard
          title="Revenue"
          value="₹1,25,000"
          subtitle="+8%"
          icon={<IndianRupee size={20} />}
            iconColor={iconStyles.revenue}
        />

        <DashboardCard
          title="Occupancy"
          value="78%"
          subtitle="156/200 Seats"
          icon={<Armchair size={20} />}
            iconColor={iconStyles.occupancy}
        />

        <DashboardCard
          title="Memberships"
          value="245"
          subtitle="12 Expiring"
          icon={<CreditCard size={20} />}
            iconColor={iconStyles.memberships}
        />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

         <div className="lg:col-span-2">
             <RevenueChart />
            </div>

         <div>
             <OccupancyChart />
           </div>

        </div>
         
         <div className="grid grid-clos-1 lg:grid-cols-3 md:grid cols-2 gap-6 mt-8">
           <div>
           <RecentEnrollmentsTable />
         </div>
        <div className="space-y-6">

         <PendingPaymentsCard />

         <ExpiringMembershipsCard />

        </div>   
        <div >
        <SeatMap />
        </div>   
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
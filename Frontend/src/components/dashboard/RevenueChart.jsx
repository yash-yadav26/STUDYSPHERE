import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 25000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 30000 },
  { month: "May", revenue: 40000 },
  { month: "Jun", revenue: 35000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 h-[350px] md:h-[400px]">
      <h2 className="text-lg font-semibold mb-4">
        Monthly Revenue
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
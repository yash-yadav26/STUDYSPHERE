import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const RevenueChart = ({
  payments = [],
}) => {
  const revenueData = [];

  for (let i = 0; i < 12; i++) {
    revenueData.push({
      month: new Date(
        0,
        i
      ).toLocaleString("default", {
        month: "short",
      }),
      revenue: 0,
    });
  }

  payments.forEach((payment) => {
    if (
      payment.paymentStatus === "Paid"
    ) {
      const month =
        new Date(
          payment.paymentDate
        ).getMonth();

      revenueData[month].revenue +=
        Number(payment.amount);
    }
  });

  return (
    <div className="bg-white rounded-xl p-6 h-[350px] md:h-[400px]">

      <h2 className="text-lg font-semibold mb-4">
        Monthly Revenue
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="revenue"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;
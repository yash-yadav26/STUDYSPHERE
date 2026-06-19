import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Occupied", value: 156 },
  { name: "Available", value: 44 },
];

const COLORS = ["#22C55E", "#CBD5E1"];

const OccupancyChart = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 h-[350px] md:h-[400px]">
      <h2 className="text-lg font-semibold mb-4">
        Seat Occupancy
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OccupancyChart;
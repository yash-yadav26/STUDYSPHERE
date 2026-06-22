import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22C55E", "#CBD5E1"];

const OccupancyChart = ({
  occupiedSeats,
  availableSeats,
}) => {
  const data = [
    {
      name: "Occupied",
      value: occupiedSeats,
    },
    {
      name: "Available",
      value: availableSeats,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 h-[350px] md:h-[400px]">

      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-green-500 rounded"></div>
        <span>Occupied</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <span>Available</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
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
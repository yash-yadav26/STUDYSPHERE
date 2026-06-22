export default function OccupancyReport({
  seats,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Occupancy Report
        </h2>

        <span className="text-sm text-slate-500">
          {seats.length} Seats
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Seat Number
              </th>

              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {seats.map((seat) => (
              <tr
                key={seat._id}
                className="border-b hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-4 font-medium text-slate-700">
                  {seat.seatNumber}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      seat.status === "OCCUPIED"
                        ? "bg-red-100 text-red-700"
                        : seat.status === "AVAILABLE"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {seat.status}
                  </span>
                </td>
              </tr>
            ))}

            {seats.length === 0 && (
              <tr>
                <td
                  colSpan="2"
                  className="text-center py-10 text-slate-500"
                >
                  No seat records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
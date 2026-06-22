export default function OccupancyReport({
  seats,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Occupancy Report
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Seat</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {seats.map((seat) => (
            <tr key={seat._id}>
              <td>
                {seat.seatNumber}
              </td>

              <td>
                {seat.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
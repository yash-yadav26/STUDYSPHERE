import { useState } from "react";
import Pagination from "../common/Pagination";

export default function OccupancyReport({
  seats = [],
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;

  const currentSeats = seats.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Occupancy Report
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Seat
              </th>

              <th className="text-left py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {currentSeats.length > 0 ? (
              currentSeats.map((seat) => (
                <tr
                  key={seat._id}
                  className="border-b"
                >
                  <td className="py-3">
                    {seat.seatNumber}
                  </td>

                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        seat.status === "Occupied"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {seat.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  className="text-center py-6 text-gray-500"
                >
                  No Seat Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={seats.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
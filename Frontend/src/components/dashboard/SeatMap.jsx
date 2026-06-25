import { useState } from "react";
import Pagination from "../common/Pagination";

const SeatMap = ({
  seats = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  const indexOfLastItem =
    currentPage * itemsPerPage;

  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;

  const currentSeats = seats.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="bg-white rounded-2xl shadow p-6 min-h-[500px] flex flex-col">

      {/* Seats Grid */}
      <div className="grid grid-cols-5 gap-3">

        {currentSeats.length > 0 ? (
          currentSeats.map((seat) => (
            <div
              key={seat._id}
              className={`
                h-16
                rounded-xl
                flex
                items-center
                justify-center
                font-semibold
                text-white
                shadow-sm
                transition
                hover:scale-105
                ${
                  seat.status === "Available"
                    ? "bg-emerald-500"
                    : "bg-rose-500"
                }
              `}
            >
              {seat.seatNumber}
            </div>
          ))
        ) : (
          <div className="col-span-5 text-center py-10 text-slate-500">
            No Seats Found
          </div>
        )}

      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mt-8">

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-500"></div>
          <span className="text-sm font-medium">
            Available
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-rose-500"></div>
          <span className="text-sm font-medium">
            Occupied
          </span>
        </div>

      </div>

      {/* Pagination */}
      <div className="mt-auto pt-6">
        <Pagination
          currentPage={currentPage}
          totalItems={seats.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

    </div>
  );
};

export default SeatMap;
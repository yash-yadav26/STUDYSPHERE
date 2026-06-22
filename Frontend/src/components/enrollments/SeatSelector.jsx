const SeatSelector = ({
  seats = [],
  enrollmentData,
  setEnrollmentData,
}) => {
  const handleSeatSelect = (seat) => {
    if (seat.status === "OCCUPIED") return;

    setEnrollmentData({
      ...enrollmentData,
      seatId: seat._id,
      seatNumber: seat.seatNumber,
    });
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
      <h2 className="font-semibold text-lg mb-4">
        Select Seat
      </h2>

      {/* Legend */}

      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-200"></div>
          <span>Available</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-200"></div>
          <span>Occupied</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500"></div>
          <span>Selected</span>
        </div>
      </div>

      {/* Seats */}

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {seats.map((seat) => {
          const isOccupied =
            seat.status === "OCCUPIED";

          const isSelected =
            enrollmentData.seatId === seat._id;

          return (
            <button
              key={seat._id}
              disabled={isOccupied}
              onClick={() =>
                handleSeatSelect(seat)
              }
              className={`
                p-3 rounded-lg font-medium transition
                ${
                  isOccupied
                    ? "bg-red-200 text-red-700 cursor-not-allowed"
                    : isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-green-200 text-green-700 hover:bg-green-300"
                }
              `}
            >
              {seat.seatNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelector;
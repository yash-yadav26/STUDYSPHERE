const SeatMap = ({
  seats = [],
}) => {
  return (
    <div className="bg-white rounded-xl min-h-[400px] p-6">

      <div className="grid grid-cols-5 gap-3">

        {seats.slice(0, 20).map(
          (seat) => (
            <div
              key={seat._id}
              className={`
              h-16 rounded-lg flex items-center justify-center
              font-semibold text-white
              ${
                seat.status ===
                "Available"
                  ? "bg-emerald-400"
                  : "bg-rose-400"
              }
            `}
            >
              {seat.seatNumber}
            </div>
          )
        )}

      </div>

      <div className="flex flex-wrap gap-6 mt-6">

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-400 rounded"></div>
          <span>Available</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-rose-400 rounded"></div>
          <span>Occupied</span>
        </div>

      </div>

    </div>
  );
};

export default SeatMap;
const SeatMap = () => {
  const seats = [
    { id: "A1", status: "available" },
    { id: "A2", status: "occupied" },
    { id: "A3", status: "available" },
    { id: "A4", status: "reserved" },
    { id: "A5", status: "occupied" },

    { id: "B1", status: "available" },
    { id: "B2", status: "available" },
    { id: "B3", status: "occupied" },
    { id: "B4", status: "available" },
    { id: "B5", status: "reserved" },
  ];

  return (
    <div className="bg-white rounded-xl border shadow-sm min-h-[400px] p-6">

      <h2 className="text-xl font-semibold mb-6">
        Seat Occupancy Map
      </h2>

      <div className="grid grid-cols-5 gap-3">

        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`
              h-16 rounded-lg flex items-center justify-center
              font-semibold text-white

              ${
                seat.status === "available"
                  ? "bg-emerald-400"
                  : seat.status === "occupied"
                  ? "bg-rose-400"
                  : "bg-amber-400"
              }
            `}
          >
            {seat.id}
          </div>
        ))}
        <div className="flex flex-wrap gap-6 mt-6">

  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-emerald-400 rounded"></div>
    <span>Available</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-rose-400 rounded"></div>
    <span>Occupied</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-amber-400 rounded"></div>
    <span>Reserved</span>
  </div>

</div>

      </div>

    </div>
  );
};

export default SeatMap;
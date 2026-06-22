const occupiedSeats = [
  "A2",
  "A5",
  "B3",
];

const seats = [
  "A1","A2","A3","A4","A5",
  "B1","B2","B3","B4","B5",
];

const SeatSelector = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Select Seat
      </h2>

      <div className="grid grid-cols-5 gap-3">
        {seats.map((seat) => {
          const occupied =
            occupiedSeats.includes(seat);

          const selected =
            enrollmentData.seat === seat;

          return (
            <button
              key={seat}
              disabled={occupied}
              onClick={() =>
                setEnrollmentData({
                  ...enrollmentData,
                  seat,
                })
              }
              className={`
                p-3 rounded-lg
                ${
                  occupied
                    ? "bg-red-200"
                    : selected
                    ? "bg-blue-500 text-white"
                    : "bg-green-200"
                }
              `}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelector;
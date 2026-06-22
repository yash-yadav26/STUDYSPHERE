import { useEffect, useState } from "react";
import { getSeats } from "../../services/seatService";

const SeatSelector = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSeats();
  }, []);

  const loadSeats = async () => {
    try {
      const res = await getSeats();

      setSeats(
        res.data.seats.filter(
          (seat) => seat.status === "Available"
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Select Seat
      </h2>

      {loading ? (
        <p>Loading Seats...</p>
      ) : seats.length === 0 ? (
        <p className="text-red-500">
          No Available Seats
        </p>
      ) : (
        <div className="grid grid-cols-5 gap-3">
          {seats.map((seat) => (
            <button
              type="button"
              key={seat._id}
              onClick={() =>
                setEnrollmentData({
                  ...enrollmentData,
                  seatId: seat._id,
                })
              }
              className={`p-3 rounded-lg border transition ${
                enrollmentData.seatId === seat._id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-green-100 hover:bg-green-200"
              }`}
            >
              {seat.seatNumber}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeatSelector;
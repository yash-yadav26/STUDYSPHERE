import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSeat } from "../../services/seatService";

export default function SeatForm() {
  const navigate = useNavigate();

  const [seatNumber, setSeatNumber] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createSeat({
        seatNumber,
      });

      navigate("/seats");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md">
      <h2 className="text-xl font-bold mb-6">
        Add Seat
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="number"
          placeholder="Seat Number"
          value={seatNumber}
          onChange={(e) =>
            setSeatNumber(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Save Seat
        </button>
      </form>
    </div>
  );
}
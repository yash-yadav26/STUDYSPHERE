import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getSeatByID, updateSeat } from "../../services/seatService";

export default function EditSeat() {
  const { id } = useParams();

  const [seatNumber, setSeatNumber] = useState("");

useEffect(() => {
  const loadSeat = async () => {
    const res = await getSeatByID(id);
    setSeatNumber(res.data.seat.seatNumber);
  };

  loadSeat();
}, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateSeat(id, {
      seatNumber,
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <h2 className="text-xl font-bold mb-6">Edit Seat</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Update Seat
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

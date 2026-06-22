import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deleteSeat } from "../../services/seatService";

export default function SeatTable({
  seats,
  refreshSeats,
}) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Seat?")) return;

    await deleteSeat(id);
    refreshSeats();
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full ">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Seat Number</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {seats.map((seat) => (
            <tr
              key={seat._id}
              className="border-t"
            >
              <td className="p-4">
                {seat.seatNumber}
              </td>

              <td className="p-4 flex gap-3">
                <button
                  onClick={() =>
                    navigate(
                      `/seats/edit/${seat._id}`
                    )
                  }
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() =>
                    handleDelete(seat._id)
                  }
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
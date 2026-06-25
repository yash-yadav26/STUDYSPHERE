import {
  Pencil,
  Trash2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

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
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Seat Number
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Status
              </th>

              <th className="px-6 py-4 text-center font-semibold text-slate-700">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {seats.length > 0 ? (

              seats.map((seat) => (

                <tr
                  key={seat._id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-5 font-semibold text-slate-800">
                    Seat {seat.seatNumber}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold ${
                        seat.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {seat.status === "Available" ? (
                        <CheckCircle2 size={15} />
                      ) : (
                        <XCircle size={15} />
                      )}

                      {seat.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          navigate(`/seats/edit/${seat._id}`)
                        }
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-indigo-50
                          text-indigo-600
                          hover:bg-indigo-100
                          transition
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(seat._id)
                        }
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-red-50
                          text-red-600
                          hover:bg-red-100
                          transition
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="3"
                  className="py-12 text-center text-slate-500"
                >
                  No Seats Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
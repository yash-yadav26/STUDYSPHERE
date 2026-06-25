import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import SeatTable from "../../components/seats/SeatTable";
import Pagination from "../../components/common/Pagination";

import { getSeats } from "../../services/seatService";

export default function SeatManagement() {
  const [seats, setSeats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const navigate = useNavigate();

  const fetchSeats = async () => {
    try {
      const res = await getSeats();
      setSeats(res.data.seats || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // schedule fetch asynchronously to avoid synchronous setState inside effect
    const t = setTimeout(() => {
      fetchSeats();
    }, 0);

    return () => clearTimeout(t);
  }, []);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentSeats = seats.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Seat Management
              </h1>

              <p className="text-slate-500 mt-2">
                Manage all library seats and their availability.
              </p>
            </div>

            <button
              onClick={() => navigate("/seats/add")}
              className="
                px-6
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition-all
              "
            >
              + Add Seat
            </button>
          </div>
        </div>

        {/* Table */}
        <SeatTable seats={currentSeats} refreshSeats={fetchSeats} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={seats.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </DashboardLayout>
  );
}

import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import SeatTable from "../../components/seats/SeatTable";
import { getSeats } from "../../services/seatService";
import { useNavigate } from "react-router-dom";

export default function SeatManagement() {
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await getSeats();
        setSeats(res.data.seats);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSeats();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Seat Management</h1>

          <button
            onClick={() => navigate("/seats/add")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Seat
          </button>
        </div>

        <SeatTable
          seats={seats}
          refreshSeats={async () => {
            try {
              const res = await getSeats();
              setSeats(res.data.seats || []);
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </div>
    </DashboardLayout>
  );
}

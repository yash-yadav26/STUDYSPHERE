import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import SeatTable from "../../components/seats/SeatTable";
import { getSeats } from "../../services/seatService";

export default function SeatManagement() {
  const [seats, setSeats] = useState([]);

  const fetchSeats = async () => {
    try {
      const res = await getSeats();
      setSeats(res.data.seats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            Seat Management
          </h1>
        </div>

        <SeatTable
          seats={seats}
          refreshSeats={fetchSeats}
        />
      </div>
    </DashboardLayout>
  );
}
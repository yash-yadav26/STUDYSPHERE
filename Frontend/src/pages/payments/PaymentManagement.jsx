import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PaymentTable from "../../components/payments/PaymentTable";
import { getPayments } from "../../services/paymentService";
import { useNavigate } from "react-router-dom";

export default function PaymentManagement() {
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    try {
      const res = await getPayments();
      setPayments(res.data.payments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Payment Management
          </h1>

          <button
            onClick={() =>
              navigate("/payments/create")
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Payment
          </button>
        </div>

        <PaymentTable
          payments={payments}
          refreshPayments={fetchPayments}
        />
      </div>
    </DashboardLayout>
  );
}
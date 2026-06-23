import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PaymentTable from "../../components/payments/PaymentTable";
import PaymentStats from "../../components/payments/PaymentStats";

import { getPayments } from "../../services/paymentService";

export default function PaymentManagement() {
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await getPayments();
        setPayments(res.data.payments || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

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
            onClick={() => navigate("/payments/create")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Payment
          </button>
        </div>

        <PaymentStats payments={payments} />

        {loading ? (
          <div className="bg-white p-6 rounded-xl shadow">
            Loading Payments...
          </div>
        ) : (
          <PaymentTable
            payments={payments}
            refreshPayments={async () => {
              try {
                const res = await getPayments();
                setPayments(res.data.payments || []);
              } catch (error) {
                console.error(error);
              }
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
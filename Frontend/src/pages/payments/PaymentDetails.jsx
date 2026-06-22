import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getPaymentById } from "../../services/paymentService";

export default function PaymentDetails() {
  const { id } = useParams();

  const [payment, setPayment] =
    useState(null);

  useEffect(() => {
    loadPayment();
  }, []);

  const loadPayment = async () => {
    const res =
      await getPaymentById(id);

    setPayment(res.data.payment);
  };

  if (!payment)
    return <div>Loading...</div>;

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">
          Payment Details
        </h2>

        <div className="space-y-3">
          <p>
            Transaction:
            {" "}
            {payment.transactionId}
          </p>

          <p>
            Amount: ₹
            {payment.amount}
          </p>

          <p>
            Method:
            {" "}
            {payment.paymentMethod}
          </p>

          <p>
            Status:
            {" "}
            {payment.paymentStatus}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
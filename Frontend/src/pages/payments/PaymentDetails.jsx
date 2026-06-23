import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { getPaymentById } from "../../services/paymentService";

export default function PaymentDetails() {
  const { id } = useParams();

  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadPayment = async () => {
    try {
      const res = await getPaymentById(id);

      setPayment(res.data.payment);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  loadPayment();
} , [id])


  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl shadow">
          Loading Payment...
        </div>
      </DashboardLayout>
    );
  }

  if (!payment) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl shadow">
          Payment Not Found
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6">
          Payment Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">
              Transaction ID
            </p>

            <p className="font-medium">
              {payment.transactionId}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Amount
            </p>

            <p className="font-medium">
              ₹{payment.amount}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Payment Method
            </p>

            <p className="font-medium">
              {payment.paymentMethod}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Payment Status
            </p>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                payment.paymentStatus === "Paid"
                  ? "bg-green-100 text-green-700"
                  : payment.paymentStatus === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {payment.paymentStatus}
            </span>
          </div>

          <div>
            <p className="text-gray-500">
              Payment Date
            </p>

            <p className="font-medium">
              {new Date(
                payment.paymentDate
              ).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Enrollment ID
            </p>

            <p className="font-medium">
              {payment.enrollmentId?._id}
            </p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { createInvoice } from "../../services/invoiceService";

export default function InvoiceForm() {
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {
    const res = await api.get("/payment/all");
    setPayments(res.data.payments || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createInvoice({
        paymentId,
      });

      navigate("/invoices");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-xl">
      <h2 className="text-xl font-bold mb-6">
        Generate Invoice
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <select
          value={paymentId}
          onChange={(e) =>
            setPaymentId(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="">
            Select Payment
          </option>

          {payments.map((payment) => (
            <option
              key={payment._id}
              value={payment._id}
            >
              {payment.transactionId} - ₹
              {payment.amount}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Generate Invoice
        </button>
      </form>
    </div>
  );
}
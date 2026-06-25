import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";
import { createInvoice } from "../../services/invoiceService";

export default function InvoiceForm() {
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);
  const [paymentId, setPaymentId] = useState("");

useEffect(() => {
  const loadPayments = async () => {
    try {
      const res = await api.get("/payments/all");

      setPayments(res.data.payments);
    } catch (error) {
      console.log(error);
    }
  };
  loadPayments();
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentId) {
      return toast.success("Student Created Successfully");
    }

    try {
      await createInvoice({
        paymentId,
      });

      toast.success("Invoice Generated Successfully");

      navigate("/invoices");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to generate invoice"
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
              {payment.transactionId} - ₹{payment.amount}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
}
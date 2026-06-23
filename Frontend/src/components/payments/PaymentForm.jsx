import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createPayment } from "../../services/paymentService";
import api from "../../services/api";

export default function PaymentForm() {
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([]);

  const [formData, setFormData] = useState({
    enrollmentId: "",
    amount: "",
    paymentMethod: "",
    transactionId: "",
    paymentStatus: "Paid",
  });


useEffect(() => {
  const loadEnrollments = async () => {
    const res = await api.get("/enrollments/all");

    setEnrollments(res.data.enrollments);
  };
  loadEnrollments();
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();

 try {
  await createPayment(formData);

  alert("Payment Created Successfully");

  navigate("/payments");
} catch (error) {
  console.log(error.response?.data);

  alert(
    error.response?.data?.message ||
      error.message
  );
}};
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
      <h2 className="text-xl font-bold mb-6">Create Payment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full border p-3 rounded-lg"
          value={formData.enrollmentId}
          onChange={(e) =>
            setFormData({
              ...formData,
              enrollmentId: e.target.value,
            })
          }
        >
          <option value="">Select Enrollment</option>

          {enrollments.map((enrollment) => (
            <option key={enrollment._id} value={enrollment._id}>
              {enrollment.studentId?.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          required
          placeholder="Amount"
          className="w-full border p-3 rounded-lg"
          value={formData.amount}
          onChange={(e) =>
            setFormData({
              ...formData,
              amount: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded-lg"
          value={formData.paymentMethod}
          onChange={(e) =>
            setFormData({
              ...formData,
              paymentMethod: e.target.value,
            })
          }
        >
          <option value="">Payment Method</option>

          <option value="Cash">Cash</option>

          <option value="UPI">UPI</option>

          <option value="Card">Card</option>
        </select>

        <input
          type="text"
          required
          placeholder="Transaction ID"
          className="w-full border p-3 rounded-lg"
          value={formData.transactionId}
          onChange={(e) =>
            setFormData({
              ...formData,
              transactionId: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded-lg"
          value={formData.paymentStatus}
          onChange={(e) =>
            setFormData({
              ...formData,
              paymentStatus: e.target.value,
            })
          }
        >
          <option value="Paid">Paid</option>

          <option value="Pending">Pending</option>

          <option value="Failed">Failed</option>
        </select>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Save Payment
        </button>
      </form>
    </div>
  );
}

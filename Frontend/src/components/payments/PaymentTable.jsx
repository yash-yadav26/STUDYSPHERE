import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deletePayment } from "../../services/paymentService";
import toast from "react-hot-toast";


export default function PaymentTable({ payments, refreshPayments }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this payment?")) return;

    try {
      await deletePayment(id);

      toast.success("Payment Deleted");

      refreshPayments();
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };
  const getStatusClass = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Failed":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Transaction</th>
            <th className="p-4">Student</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Method</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id} className="border-t">
              <td className="p-4">{payment.transactionId}</td>
              <td className="p-4">
                {payment.enrollmentId?.studentId?.name || "N/A"}
              </td>
              <td className="p-4">₹{payment.amount}</td>

              <td className="p-4">{payment.paymentMethod}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                    payment.paymentStatus,
                  )}`}
                >
                  {payment.paymentStatus}
                </span>
              </td>

              <td className="p-4 flex gap-3">
                <button onClick={() => navigate(`/payments/${payment._id}`)}>
                  <Eye size={18} />
                </button>

                <button onClick={() => handleDelete(payment._id)}>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

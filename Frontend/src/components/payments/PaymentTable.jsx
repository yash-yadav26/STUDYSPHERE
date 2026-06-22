import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deletePayment } from "../../services/paymentService";

export default function PaymentTable({
  payments,
  refreshPayments,
}) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this payment?"
      )
    )
      return;

    await deletePayment(id);

    refreshPayments();
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Partial":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full ">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Transaction</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Method</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment._id}
              className="border-t"
            >
              <td className="p-4">
                {payment.transactionId}
              </td>

              <td className="p-4">
                ₹{payment.amount}
              </td>

              <td className="p-4">
                {payment.paymentMethod}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                    payment.paymentStatus
                  )}`}
                >
                  {payment.paymentStatus}
                </span>
              </td>

              <td className="p-4 flex gap-3">
                <button
                  onClick={() =>
                    navigate(
                      `/payments/${payment._id}`
                    )
                  }
                >
                  <Eye size={18} />
                </button>

                <button
                  onClick={() =>
                    handleDelete(payment._id)
                  }
                >
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
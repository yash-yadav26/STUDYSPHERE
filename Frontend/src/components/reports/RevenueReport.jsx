export default function RevenueReport({
  payments = [],
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Revenue Report
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Transaction
              </th>

              <th className="text-left py-3">
                Amount
              </th>

              <th className="text-left py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.length > 0 ? (
              payments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b"
                >
                  <td className="py-3">
                    {payment.transactionId}
                  </td>

                  <td className="py-3 font-medium">
                    ₹{payment.amount}
                  </td>

                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        payment.paymentStatus ===
                        "Paid"
                          ? "bg-green-100 text-green-700"
                          : payment.paymentStatus ===
                            "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {payment.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-6 text-gray-500"
                >
                  No Revenue Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
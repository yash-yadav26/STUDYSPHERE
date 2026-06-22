export default function RevenueReport({
  payments,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Revenue Report
        </h2>

        <span className="text-sm text-slate-500">
          {payments.length} Transactions
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Transaction ID
              </th>

              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Amount
              </th>

              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment._id}
                className="border-b hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-4 font-medium text-slate-700">
                  {payment.transactionId}
                </td>

                <td className="px-4 py-4 font-semibold text-green-600">
                  ₹{payment.amount}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      payment.paymentStatus ===
                      "COMPLETED"
                        ? "bg-green-100 text-green-700"
                        : payment.paymentStatus ===
                          "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {payment.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}

            {payments.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-10 text-slate-500"
                >
                  No payment records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default function RevenueReport({
  payments,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Revenue Report
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>
                {payment.transactionId}
              </td>

              <td>
                ₹{payment.amount}
              </td>

              <td>
                {payment.paymentStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
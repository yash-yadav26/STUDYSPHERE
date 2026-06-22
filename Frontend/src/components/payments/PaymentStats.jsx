const PaymentStats = ({ payments }) => {
  const totalPayments = payments.length;

  const totalRevenue = payments.reduce(
    (sum, payment) =>
      payment.paymentStatus === "Paid"
        ? sum + payment.amount
        : sum,
    0
  );

  const paidPayments = payments.filter(
    (payment) =>
      payment.paymentStatus === "Paid"
  ).length;

  const pendingPayments = payments.filter(
    (payment) =>
      payment.paymentStatus === "Pending"
  ).length;

  const failedPayments = payments.filter(
    (payment) =>
      payment.paymentStatus === "Failed"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Total Payments
        </h3>

        <p className="text-2xl font-bold mt-2">
          {totalPayments}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Revenue
        </h3>

        <p className="text-2xl font-bold text-green-600 mt-2">
          ₹{totalRevenue}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Paid
        </h3>

        <p className="text-2xl font-bold text-green-600 mt-2">
          {paidPayments}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Pending / Failed
        </h3>

        <p className="text-2xl font-bold text-orange-600 mt-2">
          {pendingPayments + failedPayments}
        </p>
      </div>

    </div>
  );
};

export default PaymentStats;
const PendingPaymentsCard = ({
  payments = [],
}) => {
  const pendingPayments =
    payments.filter(
      (p) =>
        p.paymentStatus === "Pending"
    );

  return (
    <div className="bg-white rounded-xl p-6 min-h-[150px]">

      <div className="space-y-4">

        {pendingPayments.length > 0 ? (
          pendingPayments.map((payment) => (
            <div
              key={payment._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                {payment.transactionId}
              </span>

              <span className="font-semibold text-red-600">
                ₹{payment.amount}
              </span>
            </div>
          ))
        ) : (
          <p>No Pending Payments</p>
        )}

      </div>

    </div>
  );
};

export default PendingPaymentsCard;
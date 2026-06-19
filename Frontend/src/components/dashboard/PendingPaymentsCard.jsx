const payments = [
  {
    id: 1,
    name: "Rahul Sharma",
    amount: "₹500",
  },
  {
    id: 2,
    name: "Priya Verma",
    amount: "₹1000",
  },
];

const PendingPaymentsCard = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 min-h-[200px]">

      <h2 className="text-xl font-semibold mb-4">
        Pending Payments
      </h2>

      <div className="space-y-4">

        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{payment.name}</span>

            <span className="font-semibold text-red-600">
              {payment.amount}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default PendingPaymentsCard;
import {
  CreditCard,
  IndianRupee,
  CheckCircle,
  Clock,
} from "lucide-react";

const PaymentStats = ({ payments = [] }) => {
  const totalPayments = payments.length;

  const paidPayments = payments.filter(
    (payment) =>
      payment.paymentStatus === "PAID"
  );

  const pendingPayments = payments.filter(
    (payment) =>
      payment.paymentStatus === "PENDING"
  );

  const totalRevenue = paidPayments.reduce(
    (sum, payment) =>
      sum + Number(payment.amount || 0),
    0
  );

  const stats = [
    {
      title: "Total Payments",
      value: totalPayments,
      icon: CreditCard,
      bg: "bg-blue-100",
      text: "text-blue-600",
      line: "group-hover:bg-blue-500",
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue}`,
      icon: IndianRupee,
      bg: "bg-green-100",
      text: "text-green-600",
      line: "group-hover:bg-green-500",
    },
    {
      title: "Paid",
      value: paidPayments.length,
      icon: CheckCircle,
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      line: "group-hover:bg-emerald-500",
    },
    {
      title: "Pending",
      value: pendingPayments.length,
      icon: Clock,
      bg: "bg-orange-100",
      text: "text-orange-600",
      line: "group-hover:bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              group
              bg-white
              rounded-2xl
              p-4 sm:p-6
              border
              border-slate-200
              shadow-sm
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-1
              hover:border-slate-300
            "
          >
            <div className="flex justify-between items-start">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mt-2 break-words">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`
                  p-2 sm:p-3
                  rounded-xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:shadow-md
                  ${stat.bg}
                  ${stat.text}
                `}
              >
                <Icon size={22} />
              </div>
            </div>

            <div
              className={`
                mt-5
                h-1
                w-12
                rounded-full
                bg-slate-200
                transition-all
                duration-300
                group-hover:w-20
                ${stat.line}
              `}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PaymentStats;
const enrollments = [
  {
    id: 1,
    student: "Rahul Sharma",
    seat: "A12",
    slot: "Morning",
    plan: "Monthly",
    status: "Paid",
  },
  {
    id: 2,
    student: "Priya Verma",
    seat: "B05",
    slot: "Evening",
    plan: "Monthly",
    status: "Pending",
  },
  {
    id: 3,
    student: "Aman Singh",
    seat: "C08",
    slot: "Both",
    plan: "Daily",
    status: "Paid",
  },
];

const RecentEnrollmentsTable = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm min-h-[400px] p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Recent Enrollments
        </h2>

        <button className="text-blue-600 font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b text-left">

              <th className="py-3">Student</th>
              <th className="py-3">Seat</th>
              <th className="py-3">Slot</th>
              <th className="py-3">Plan</th>
              <th className="py-3">Status</th>

            </tr>
          </thead>

          <tbody>

            {enrollments.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-4">
                  {item.student}
                </td>

                <td>{item.seat}</td>

                <td>{item.slot}</td>

                <td>{item.plan}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentEnrollmentsTable;
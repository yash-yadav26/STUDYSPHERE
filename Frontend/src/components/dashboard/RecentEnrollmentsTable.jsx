const RecentEnrollmentsTable = ({
  enrollments = [],
}) => {
  return (
    <div className="bg-white rounded-xl min-h-[400px] p-6">

      <div className="flex justify-between items-center mb-6">
        <button className="text-blue-600 font-medium pointer">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b text-left">
              <th className="py-3">
                Student
              </th>
              <th className="py-3">
                Seat
              </th>
              <th className="py-3">
                Plan
              </th>
              <th className="py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            {enrollments
              .slice(0, 5)
              .map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="py-4">
                    {item.studentId?.name}
                  </td>

                  <td>
                    {
                      item.seatId
                        ?.seatNumber
                    }
                  </td>

                  <td>
                    {item.planType}
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status ===
                        "Active"
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
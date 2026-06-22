export default function EnrollmentReport({
  enrollments,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Enrollment Report
        </h2>

        <span className="text-sm text-slate-500">
          {enrollments.length} Enrollments
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Student
              </th>

              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Seat
              </th>

              <th className="text-left px-4 py-3 font-semibold text-slate-600">
                Plan
              </th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div>
                    <p className="font-medium text-slate-800">
                      {item.studentId?.name || "N/A"}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                    {item.seatId?.seatNumber || "N/A"}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {item.planType}
                  </span>
                </td>
              </tr>
            ))}

            {enrollments.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-10 text-slate-500"
                >
                  No enrollment records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
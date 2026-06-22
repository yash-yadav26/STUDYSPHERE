export default function EnrollmentReport({
  enrollments = [],
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Enrollment Report
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Student
              </th>

              <th className="text-left py-3">
                Seat
              </th>

              <th className="text-left py-3">
                Plan
              </th>
            </tr>
          </thead>

          <tbody>
            {enrollments.length > 0 ? (
              enrollments.map((item) => (
                <tr
                  key={item._id}
                  className="border-b"
                >
                  <td className="py-3">
                    {item.studentId?.name || "-"}
                  </td>

                  <td className="py-3">
                    {item.seatId?.seatNumber || "-"}
                  </td>

                  <td className="py-3">
                    {item.planType || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-6 text-gray-500"
                >
                  No Enrollment Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
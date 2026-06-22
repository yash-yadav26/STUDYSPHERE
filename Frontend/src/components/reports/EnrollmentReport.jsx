export default function EnrollmentReport({
  enrollments,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Enrollment Report
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Student</th>
            <th>Seat</th>
            <th>Plan</th>
          </tr>
        </thead>

        <tbody>
          {enrollments.map((item) => (
            <tr key={item._id}>
              <td>
                {item.studentId?.name}
              </td>

              <td>
                {item.seatId?.seatNumber}
              </td>

              <td>
                {item.planType}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default function SubscriptionReport({
  enrollments,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">
        Subscription Report
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Student</th>
            <th>Plan</th>
            <th>Expiry</th>
          </tr>
        </thead>

        <tbody>
          {enrollments.map((item) => (
            <tr key={item._id}>
              <td>
                {item.studentId?.name}
              </td>

              <td>
                {item.planType}
              </td>

              <td>
                {new Date(
                  item.endDate
                ).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import { useNavigate } from "react-router-dom";

const RecentEnrollmentsTable = ({
  enrollments = [],
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b">

        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Recent Enrollments
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Latest student admissions
          </p>
        </div>

        <button
          onClick={() => navigate("/enrollments")}
          className="
            px-4
            py-2
            rounded-xl
            bg-indigo-50
            text-indigo-600
            font-medium
            hover:bg-indigo-100
            transition
          "
        >
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Student
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Seat
              </th>

              <th className="px-10 py-5 text-left text-sm font-semibold text-slate-600">
                Plan
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {enrollments.length > 0 ? (

              enrollments.slice(0, 5).map((item) => (

                <tr
                  key={item._id}
                  className="
                    border-t
                    hover:bg-slate-50
                    transition
                  "
                >

                  <td className="px-6 py-4 font-medium text-slate-800">
                    {item.studentId?.name || "-"}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {item.seatId?.seatNumber || "-"}
                  </td>

                  <td className="px-6 py-4">

                    <span className="  rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">

                      {item.planType}

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  className="py-12 text-center text-slate-500"
                >
                  No recent enrollments found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentEnrollmentsTable;
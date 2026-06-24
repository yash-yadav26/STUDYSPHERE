import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnrollmentTable = ({
  enrollments,
  onDelete,
}) => {
  const navigate = useNavigate();

  if (!enrollments.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        No Enrollments Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow ">
      <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Seat
              </th>

              <th className="p-4 text-left">
                Plan
              </th>

              <th className="p-4 text-left">
                Start Date
              </th>

              <th className="p-4 text-left">
                End Date
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map(
              (enrollment) => (
                <tr
                  key={enrollment._id}
                  className="border-t"
                >
                  <td className="p-4">
                    {
                      enrollment.studentId
                        ?.name
                    }
                  </td>

                  <td className="p-4">
                    {
                      enrollment.seatId
                        ?.seatNumber
                    }
                  </td>

                  <td className="p-4">
                    {enrollment.planType}
                  </td>

                  <td className="p-4">
                    {new Date(
                      enrollment.startDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {new Date(
                      enrollment.endDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        enrollment.status ===
                        "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {enrollment.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() =>
                          navigate(
                            `/enrollments/${enrollment._id}`
                          )
                        }
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() =>
                          onDelete(
                            enrollment._id
                          )
                        }
                      >
                        <Trash2
                          size={18}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentTable;
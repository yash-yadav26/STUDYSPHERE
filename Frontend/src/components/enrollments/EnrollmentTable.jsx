import { useNavigate } from "react-router-dom";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const EnrollmentTable = ({
  enrollments,
}) => {
     const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow ">
      <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-4 text-left">
              ID
            </th>

            <th className="p-4 text-left">
              Student
            </th>

            <th className="p-4 text-left">
              Pass Type
            </th>

            <th className="p-4 text-left">
              Slot
            </th>

            <th className="p-4 text-left">
              Seat
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
                key={enrollment.id}
                className="border-t"
              >
                <td className="p-4">
                  {enrollment.id}
                </td>

                <td className="p-4">
                  {
                    enrollment.studentName
                  }
                </td>

                <td className="p-4">
                  {
                    enrollment.passType
                  }
                </td>

                <td className="p-4">
                  {enrollment.slot}
                </td>

                <td className="p-4">
                  {enrollment.seatNo}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    {
                      enrollment.status
                    }
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
  onClick={() =>
    navigate(
      `/enrollments/${enrollment.id}`
    )
  }
>
  <Eye size={18} />
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
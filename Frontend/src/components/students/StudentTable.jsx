import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const StudentTable = ({
  students,
  onView,
  onEdit,
  onDelete,
}) => {
  if (!students.length) {
  return (
    <div className="bg-white p-10 rounded-xl text-center">
      No students found
    </div>
  );
}
  return (
    <div className="bg-white rounded-xl shadow">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-t"
              >
                <td className="p-4">
                  {student.id}
                </td>

                <td className="p-4">
                  {student.firstName}{" "}
                  {student.lastName}
                </td>

                <td className="p-4">
                  {student.email}
                </td>

                <td className="p-4">
                  {student.phone}
                </td>

                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs
                      ${
                        student.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {student.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() =>
                        onView(student.id)
                      }
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() =>
                        onEdit(student.id)
                      }
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(student.id)
                      }
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
import {
  Eye,
  Pencil,
  Trash2,
  Mail,
  Phone,
  Armchair,
  BadgeIndianRupee,
} from "lucide-react";

const StudentTable = ({
  students,
  onView,
  onEdit,
  onDelete,
}) => {
  if (!students.length) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-16 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-3xl">
          🎓
        </div>

        <h3 className="text-2xl font-bold text-slate-700 mt-5">
          No Students Found
        </h3>

        <p className="text-slate-500 mt-2">
          Enroll your first student to start managing your library.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-100 text-slate-700">

              <th className="px-6 py-4 text-left font-semibold">
                Student
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Contact
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Seat
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Plan
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Total Fees
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Paid
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Remaining
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student._id}
                className="border-t hover:bg-slate-50 transition"
              >

                {/* Student */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold flex items-center justify-center">

                      {student.name?.charAt(0).toUpperCase()}

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-800">
                        {student.name}
                      </h3>

                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <Mail size={14} />
                        {student.email}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Contact */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-slate-600">

                    <Phone size={16} />

                    {student.phone}

                  </div>

                </td>

                {/* Seat */}

                <td className="px-6 py-5">

                  <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">

                    <Armchair size={15} />

                    {student.seatNumber}

                  </span>

                </td>

                {/* Plan */}

                <td className="px-6 py-5">
                  {student.planType}
                </td>

                {/* Total Fees */}

                <td className="px-6 py-5 font-semibold text-slate-700">

                  ₹{student.totalFees}

                </td>

                {/* Paid */}

                <td className="px-6 py-5 text-green-600 font-semibold">

                  ₹{student.paidAmount}

                </td>
                                {/* Remaining Fees */}

                <td className="px-6 py-5">

                  {student.remainingAmount > 0 ? (

                    <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">

                      <BadgeIndianRupee size={15} />

                      ₹{student.remainingAmount}

                    </span>

                  ) : (

                    <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

                      Paid

                    </span>

                  )}

                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onView(student._id)}
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-sky-50
                        text-sky-600
                        hover:bg-sky-100
                        transition
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(student._id)}
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-indigo-50
                        text-indigo-600
                        hover:bg-indigo-100
                        transition
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(student._id)}
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-red-50
                        text-red-600
                        hover:bg-red-100
                        transition
                        flex
                        items-center
                        justify-center"
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
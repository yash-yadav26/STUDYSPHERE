import { useState } from "react";
import Pagination from "../common/Pagination";

export default function EnrollmentReport({
  enrollments = [],
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentEnrollments = enrollments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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
            {currentEnrollments.length > 0 ? (
              currentEnrollments.map((item) => (
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

      <Pagination
        currentPage={currentPage}
        totalItems={enrollments.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
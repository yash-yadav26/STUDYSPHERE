import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrollmentTable from "../../components/enrollments/EnrollmentTable";
import Pagination from "../../components/common/Pagination";

import toast from "react-hot-toast";

import {
  getEnrollments,
  deleteEnrollment,
} from "../../services/enrollmentService";

const EnrollmentsList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getEnrollments();

        setEnrollments(res.data.enrollments || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentEnrollments = enrollments.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enrollment?",
    );

    if (!confirmDelete) return;

    try {
      await deleteEnrollment(id);

      setEnrollments((prev) => prev.filter((item) => item._id !== id));

      toast.success("Enrollment deleted successfully");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to delete enrollment",
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <h1 className="text-4xl font-bold text-slate-800">Enrollments</h1>

          <p className="text-slate-500 mt-2">
            Manage all active and expired memberships
          </p>
        </div>

        {loading ? (
          <div className="bg-white p-8 rounded-2xl shadow">
            Loading Enrollments...
          </div>
        ) : (
          <>
            <EnrollmentTable
              enrollments={currentEnrollments}
              onDelete={handleDelete}
            />

            <Pagination
              currentPage={currentPage}
              totalItems={enrollments.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EnrollmentsList;

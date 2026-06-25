import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrollmentTable from "../../components/enrollments/EnrollmentTable";
import toast from "react-hot-toast";

import {
  getEnrollments,
  deleteEnrollment,
} from "../../services/enrollmentService";

const EnrollmentsList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

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

      toast.error(error.response?.data?.message || "Failed to delete enrollment");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Enrollments</h1>

          <p className="text-gray-500 mt-1">
            Manage all active and expired memberships
          </p>
        </div>

        {loading ? (
          <div className="bg-white p-6 rounded-xl shadow">
            Loading Enrollments...
          </div>
        ) : (
          <EnrollmentTable enrollments={enrollments} onDelete={handleDelete} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default EnrollmentsList;

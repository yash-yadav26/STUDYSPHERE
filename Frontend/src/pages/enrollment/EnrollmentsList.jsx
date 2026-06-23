import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrollmentTable from "../../components/enrollments/EnrollmentTable";

import { getEnrollments } from "../../services/enrollmentService";

const EnrollmentsList = () => {
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchEnrollments = async () => {
    try {
      const res = await getEnrollments();

      setEnrollments(res.data.enrollments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
fetchEnrollments();
}, []);
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Enrollments
          </h1>

          <button
            onClick={() => navigate("/enrollments/add")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            + New Enrollment
          </button>
        </div>

        {loading ? (
          <div className="bg-white p-6 rounded-xl shadow">
            Loading Enrollments...
          </div>
        ) : (
          <EnrollmentTable enrollments={enrollments} />
        )}

      </div>
    </DashboardLayout>
  );
};

export default EnrollmentsList;
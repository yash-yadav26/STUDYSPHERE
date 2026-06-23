import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getEnrollmentById } from "../../services/enrollmentService";

const EnrollmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchEnrollment = async () => {
    try {
      const res = await getEnrollmentById(id);

      setEnrollment(res.data.enrollment);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchEnrollment();
}, [id]);
  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl shadow">
          Loading Enrollment...
        </div>
      </DashboardLayout>
    );
  }

  if (!enrollment) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl shadow">
          Enrollment Not Found
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              Enrollment Details
            </h1>

            <p className="text-gray-500">
              ID: {enrollment._id}
            </p>
          </div>

          <button
            onClick={() => navigate("/enrollments")}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg"
          >
            Back
          </button>
        </div>

        {/* Student Info */}

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Student Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-500">Name</p>

              <p className="font-medium">
                {enrollment.studentId?.name}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>

              <p className="font-medium">
                {enrollment.studentId?.email}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>

              <p className="font-medium">
                {enrollment.studentId?.phone}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Status</p>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  enrollment.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {enrollment.status}
              </span>
            </div>

          </div>
        </div>

        {/* Enrollment Info */}

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Enrollment Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-500">
                Plan Type
              </p>

              <p className="font-medium">
                {enrollment.planType}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Seat Number
              </p>

              <p className="font-medium">
                {enrollment.seatId?.seatNumber}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Start Date
              </p>

              <p className="font-medium">
                {new Date(
                  enrollment.startDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                End Date
              </p>

              <p className="font-medium">
                {new Date(
                  enrollment.endDate
                ).toLocaleDateString()}
              </p>
            </div>

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default EnrollmentDetails;
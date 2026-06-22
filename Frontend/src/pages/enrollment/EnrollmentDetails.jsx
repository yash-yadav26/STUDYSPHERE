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
    fetchEnrollment();
  }, [id]);

  const fetchEnrollment = async () => {
    try {
      const res = await getEnrollmentById(id);

      setEnrollment(
        res.data.enrollment || res.data
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl">
          Loading Enrollment...
        </div>
      </DashboardLayout>
    );
  }

  if (!enrollment) {
    return (
      <DashboardLayout>
        <div className="bg-white p-6 rounded-xl">
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
              Enrollment #{enrollment._id}
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/enrollments")
            }
            className="px-4 py-2 bg-slate-700 text-white rounded-lg"
          >
            Back
          </button>

        </div>

        {/* Student Information */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-semibold mb-4">
            Student Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-500">
                Student Name
              </p>

              <p className="font-medium">
                {enrollment.student?.firstName}{" "}
                {enrollment.student?.lastName}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Email
              </p>

              <p className="font-medium">
                {enrollment.student?.email}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Phone
              </p>

              <p className="font-medium">
                {enrollment.student?.phone}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Status
              </p>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  enrollment.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {enrollment.status}
              </span>
            </div>

          </div>

        </div>

        {/* Enrollment Information */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-semibold mb-4">
            Enrollment Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-500">
                Pass Type
              </p>

              <p className="font-medium">
                {enrollment.passType}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Slot
              </p>

              <p className="font-medium">
                {enrollment.slot}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Seat Number
              </p>

              <p className="font-medium">
                {enrollment.seat?.seatNumber}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Amount
              </p>

              <p className="font-medium">
                ₹{enrollment.amount}
              </p>
            </div>

          </div>

        </div>

        {/* Payment Summary */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-semibold mb-4">
            Payment Summary
          </h2>

          <div className="flex justify-between border-b pb-3">
            <span>Pass Amount</span>

            <span>
              ₹{enrollment.amount}
            </span>
          </div>

          <div className="flex justify-between pt-3 font-semibold text-lg">
            <span>Total</span>

            <span>
              ₹{enrollment.amount}
            </span>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default EnrollmentDetails;
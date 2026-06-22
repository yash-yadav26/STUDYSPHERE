import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrollmentForm from "../../components/enrollments/EnrollmentForm";
import { createEnrollment } from "../../services/enrollmentService";

const AddEnrollment = () => {
  const navigate = useNavigate();
  const [enrollmentData, setEnrollmentData] = useState({
    studentId: "",
    seatId: "",
    planType: "",
    startDate: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = async () => {
    if (
      !enrollmentData.studentId ||
      !enrollmentData.seatId ||
      !enrollmentData.planType
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createEnrollment({
        studentId: enrollmentData.studentId,
        seatId: enrollmentData.seatId,
        planType: enrollmentData.planType,
        startDate: enrollmentData.startDate,
      });

      alert("Enrollment Created");

      navigate("/enrollments");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">New Enrollment</h1>

        <EnrollmentForm
          enrollmentData={enrollmentData}
          setEnrollmentData={setEnrollmentData}
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Create Enrollment
        </button>
      </div>
    </DashboardLayout>
  );
};

export default AddEnrollment;

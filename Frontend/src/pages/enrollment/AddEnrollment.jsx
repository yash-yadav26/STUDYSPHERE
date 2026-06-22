import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrollmentForm from "../../components/enrollments/EnrollmentForm";
import { createEnrollment } from "../../services/enrollmentService";

const AddEnrollment = () => {
  const navigate = useNavigate();

  const [enrollmentData, setEnrollmentData] =
    useState({
      studentId: "",
      passType: "",
      slot: "",
     
      seatId: "",
    });

  const handleSubmit = async () => {
    try {
      await createEnrollment({
        studentId: enrollmentData.studentId,
        passType: enrollmentData.passType,
        slot: enrollmentData.slot,
        seatId: enrollmentData.seatId,
      });

      alert("Enrollment Created Successfully");

      navigate("/enrollments");
    } catch (error) {
      console.error(error);
      alert("Failed to create enrollment");
    }
  };
 
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          New Enrollment
        </h1>

        <EnrollmentForm
          enrollmentData={enrollmentData}
          setEnrollmentData={setEnrollmentData}
        />

      
      </div>
    </DashboardLayout>
  );
};

export default AddEnrollment;
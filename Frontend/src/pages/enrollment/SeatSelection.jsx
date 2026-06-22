import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrollmentForm from "../../components/enrollment/EnrollmentForm";

export default function EnrollStudent() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          Student Enrollment
        </h1>

        <EnrollmentForm />
      </div>
    </DashboardLayout>
  );
}
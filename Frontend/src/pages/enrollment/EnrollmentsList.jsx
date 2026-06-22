import { useNavigate } from "react-router-dom";
import EnrollmentTable from "../../components/enrollments/EnrollmentTable";
import DashboardLayout from "../../components/layout/DashboardLayout";
const dummyEnrollments = [
  {
    id: 1,
    studentName: "Khushi Jangid",
    passType: "Monthly",
    slot: "Morning",
    seatNo: "A5",
    status: "ACTIVE",
  },
  {
    id: 2,
    studentName: "Rahul Sharma",
    passType: "Quarterly",
    slot: "Evening",
    seatNo: "B2",
    status: "ACTIVE",
  },
];

const EnrollmentsList = () => {
  const navigate = useNavigate();

   
  return (
    <DashboardLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Enrollments
        </h1>

        <button
          onClick={() =>
            navigate("/enrollments/add")
          }
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          + New Enrollment
        </button>
      </div>

      <EnrollmentTable
        enrollments={dummyEnrollments}
      />
    </div>
    </DashboardLayout>
  );
};

export default EnrollmentsList;
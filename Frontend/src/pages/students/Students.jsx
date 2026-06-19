import DashboardLayout from "../../components/layout/DashboardLayout";
import StudentSearch from "../../components/students/StudentSearch";
import StudentTable from "../../components/students/StudentTable";
import { Plus } from "lucide-react";

const Students = () => {
  return (
    <DashboardLayout>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Students
        </h1>

      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
  <Plus size={18} />
  Add Student
</button>

      </div>

      <div className="mb-6">
        <StudentSearch />
      </div>

      <StudentTable />

    </DashboardLayout>
  );
};

export default Students;
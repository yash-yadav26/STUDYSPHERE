import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StudentStats from "../../components/students/StudentStats";
import StudentTable from "../../components/students/StudentTable";
import { useStudents } from "../../hooks/useStudents";
import { deleteStudent } from "../../services/studentService";

const StudentsList = () => {
  const navigate = useNavigate();
  const { students = [], loading, fetchStudents } = useStudents();

  const [search] = useState("");
  const [status, setStatus] = useState("");
  const filteredStudents = (students || []).filter((student) => {
    const matchesSearch = student.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = !status || student.status === status;

    return matchesSearch && matchesStatus;
  });
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Students</h1>

              <p className="text-slate-500 mt-2">
                Manage student admissions, memberships and seat allocations.
              </p>
            </div>

            <button
              onClick={() => navigate("/students/add")}
              className="
        px-6
        py-3
        rounded-2xl
        bg-gradient-to-r
        from-indigo-600
        to-violet-600
        text-white
        font-semibold
        shadow-lg
        hover:scale-105
        transition-all
      "
            >
              + Enroll Student
            </button>
          </div>
        </div>

        <div className="mt-2">
          <StudentStats students={students} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1"></div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
    bg-white
    border
    border-slate-200
    rounded-2xl
    px-5
    py-3
    shadow-sm
    min-w-[200px]
  "
          >
            <option value="">All Status</option>

            <option value="Active">Active</option>

            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {loading ? (
          <div className="bg-white p-10 rounded-xl">Loading students...</div>
        ) : (
          <StudentTable
            students={filteredStudents}
            onView={(id) => navigate(`/students/${id}`)}
            onEdit={(id) => navigate(`/students/edit/${id}`)}
            onDelete={handleDelete}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentsList;

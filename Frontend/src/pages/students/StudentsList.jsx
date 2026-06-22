import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StudentStats from "../../components/students/StudentStats";
import StudentSearch from "../../components/students/StudentSearch";
import StudentTable from "../../components/students/StudentTable";
import { useStudents } from "../../hooks/useStudents";
import { deleteStudent } from "../../services/studentService";


const StudentsList = () => {
  const navigate = useNavigate();

  const {
    students,
    loading,
    fetchStudents,
  } = useStudents();

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) => {
  const matchesSearch =
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesStatus =
    !status || student.status === status;

  return matchesSearch && matchesStatus;
});

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">
          Students
        </h1>

        <button
          onClick={() => navigate("/students/add")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Add Student
        </button>
      </div>
      <StudentStats students={students} />
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
  <div className="flex-1">
    <StudentSearch
      search={search}
      setSearch={setSearch}
    />
  </div>

  <select
    value={status}
    onChange={(e) =>
      setStatus(e.target.value)
    }
    className="border rounded-lg px-4 py-2 bg-white min-w-[180px]"
  >
    <option value="">All Status</option>
    <option value="ACTIVE">Active</option>
    <option value="INACTIVE">Inactive</option>
  </select>
</div>
   
      {loading ? (
       <div className="bg-white p-10 rounded-xl">
       Loading students...
       </div>
) : (
  
        <StudentTable
          students={filteredStudents}
          onView={(id) =>
            navigate(`/students/${id}`)
          }
          onEdit={(id) =>
            navigate(`/students/edit/${id}`)
          }
          onDelete={handleDelete}
        />
      )}
    </div>
    </DashboardLayout>
  );
};

export default StudentsList;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StudentStats from "../../components/students/StudentStats";
import StudentTable from "../../components/students/StudentTable";
import Pagination from "../../components/common/Pagination";

import { useStudents } from "../../hooks/useStudents";
import { deleteStudent } from "../../services/studentService";

const StudentsList = () => {
  const navigate = useNavigate();

  const { students = [], loading, fetchStudents } = useStudents();

  const [search] = useState("");
  const [status, setStatus] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = !status || student.status === status;

    return matchesSearch && matchesStatus;
  });


  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentStudents = filteredStudents.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}

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

        {/* Stats */}

        <StudentStats students={students} />

        {/* Filter */}

        <div className="flex justify-end">
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Status</option>

            <option value="Active">Active</option>

            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Table */}

        {loading ? (
          <div className="bg-white rounded-2xl p-10 text-center">
            Loading students...
          </div>
        ) : (
          <>
            <StudentTable
              students={currentStudents}
              onView={(id) => navigate(`/students/${id}`)}
              onEdit={(id) => navigate(`/students/edit/${id}`)}
              onDelete={handleDelete}
            />

            <Pagination
              currentPage={currentPage}
              totalItems={filteredStudents.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentsList;

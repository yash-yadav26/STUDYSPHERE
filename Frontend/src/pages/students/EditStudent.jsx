import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../../components/students/StudentForm";
import {
  getStudentById,
  updateStudent,
} from "../../services/studentService";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchStudent = async () => {
    try {
      const res = await getStudentById(id);
      setStudent(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchStudent();
}, [id]);

  const handleUpdate = async (data) => {
    try {
      await updateStudent(id, data);
      navigate("/students");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Edit Student
      </h1>

      <StudentForm
        initialData={student}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditStudent;
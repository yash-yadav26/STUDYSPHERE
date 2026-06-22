import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/students/StudentForm";
import { createStudent } from "../../services/studentService";

const AddStudent = () => {
  const navigate = useNavigate();

  const handleCreateStudent = async (data) => {
    try {
      await createStudent(data);

      navigate("/students");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Add Student
      </h1>

      <StudentForm
        onSubmit={handleCreateStudent}
      />
    </div>
  );
};

export default AddStudent;
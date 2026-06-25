import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/students/StudentForm";
import { createStudent } from "../../services/studentService";
import toast from "react-hot-toast";

const AddStudent = () => {
  const navigate = useNavigate();

const handleCreateStudent = async (data) => {
  console.log("Student Data:", data);

  try {
    const res = await createStudent(data);

    console.log("Success:", res);

    toast.success("Student Created");

    navigate("/students");
  } catch (error) {
    console.log("Error:", error);
    console.log("Response:", error?.response);

    toast.error(
      error?.response?.data?.message ||
      "Student creation failed"
    );
  }
};

  return (
    <div className="p-6">

      <StudentForm
        onSubmit={handleCreateStudent}
      />
    </div>
  );
};

export default AddStudent;
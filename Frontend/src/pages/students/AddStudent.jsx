import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/students/StudentForm";
import { createStudent } from "../../services/studentService";

const AddStudent = () => {
  const navigate = useNavigate();

const handleCreateStudent = async (data) => {
  console.log("Student Data:", data);

  try {
    const res = await createStudent(data);

    console.log("Success:", res);

    alert("Student Created");

    navigate("/students");
  } catch (error) {
    console.log("Error:", error);
    console.log("Response:", error?.response);

    alert(
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
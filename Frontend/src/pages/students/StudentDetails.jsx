import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../services/studentService";

const StudentDetails = () => {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await getStudentById(id);

      setStudent(res.data.student);
    } catch (error) {
      console.error(error);
    }
  };

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">
        Student Details
      </h1>

      <div className="space-y-4">
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <p>
          <strong>Admission Date:</strong>{" "}
          {new Date(
            student.admissionDate
          ).toLocaleDateString()}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {student.status}
        </p>

        <p>
          <strong>Address:</strong>{" "}
          {student.address}
        </p>
      </div>
    </div>
  );
};

export default StudentDetails;
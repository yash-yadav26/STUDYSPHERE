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
      setStudent(res.data);
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>
            <strong>Name:</strong>{" "}
            {student.firstName} {student.lastName}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {student.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {student.phone}
          </p>
        </div>

        <div>
          <p>
            <strong>Gender:</strong>{" "}
            {student.gender}
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
    </div>
  );
};

export default StudentDetails;
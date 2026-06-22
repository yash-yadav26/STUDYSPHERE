import { useEffect, useState } from "react";
import { getStudents } from "../../services/studentService";

const StudentSelector = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await getStudents();

      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Select Student
      </h2>

      {loading ? (
        <p>Loading Students...</p>
      ) : (
        <select
          className="w-full border rounded-lg p-3"
          value={enrollmentData.studentId}
          onChange={(e) =>
            setEnrollmentData({
              ...enrollmentData,
              studentId: e.target.value,
            })
          }
        >
          <option value="">
            Select Student
          </option>

          {students.map((student) => (
            <option
              key={student._id}
              value={student._id}
            >
              {student.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default StudentSelector;
const students = [
  {
    id: 1,
    name: "Khushi Jangid",
  },
  {
    id: 2,
    name: "Rahul Sharma",
  },
];

const StudentSelector = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Select Student
      </h2>

      <select
        className="w-full border rounded-lg p-3"
        value={
          enrollmentData.student?.id || ""
        }
        onChange={(e) => {
          const selectedStudent =
            students.find(
              (student) =>
                student.id ===
                Number(e.target.value)
            );

          setEnrollmentData({
            ...enrollmentData,
            student: selectedStudent,
          });
        }}
      >
        <option value="">
          Select Student
        </option>

        {students.map((student) => (
          <option
            key={student.id}
            value={student.id}
          >
            {student.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StudentSelector;
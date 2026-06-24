const StudentStats = ({
  students = [],
  seats = [],
}) => {
  const totalStudents = students.length;

  const activeStudents =
    students.filter(
      (student) =>
        student.status === "Active"
    ).length;

  const inactiveStudents =
    students.filter(
      (student) =>
        student.status === "Inactive"
    ).length;

  const occupiedSeats =
    seats.filter(
      (seat) =>
        seat.status === "Occupied"
    ).length;

  return (
    <div className="grid md:grid-cols-4 gap-4">

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">
          Total Students
        </h3>

        <p className="text-2xl font-bold">
          {totalStudents}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">
          Active Students
        </h3>

        <p className="text-2xl font-bold text-green-600">
          {activeStudents}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">
          Inactive Students
        </h3>

        <p className="text-2xl font-bold text-red-600">
          {inactiveStudents}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">
          Occupied Seats
        </h3>

        <p className="text-2xl font-bold text-indigo-600">
          {occupiedSeats}
        </p>
      </div>

    </div>
  );
};

export default StudentStats;
const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    seat: "A12",
    slot: "Morning",
    plan: "Monthly",
  },
  {
    id: 2,
    name: "Priya Verma",
    seat: "B08",
    slot: "Evening",
    plan: "Monthly",
  },
];

const StudentTable = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Seat</th>
              <th className="text-left py-3">Slot</th>
              <th className="text-left py-3">Plan</th>
              <th className="text-left py-3">Actions</th>

            </tr>
          </thead>

          <tbody>

            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b"
              >
                <td className="py-4">{student.name}</td>
                <td>{student.seat}</td>
                <td>{student.slot}</td>
                <td>{student.plan}</td>

                <td>
                  <div className="flex gap-2">

                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default StudentTable;
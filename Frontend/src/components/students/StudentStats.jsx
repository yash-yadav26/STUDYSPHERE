const StudentStats = ({ students }) => {
  const total = students.length;
  const active = students.filter(
    (s) => s.status === "ACTIVE"
  ).length;

  const inactive = students.filter(
    (s) => s.status === "INACTIVE"
  ).length;

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Total Students</h3>
        <p className="text-2xl font-bold">
          {total}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Active</h3>
        <p className="text-2xl font-bold text-green-600">
          {active}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Inactive</h3>
        <p className="text-2xl font-bold text-red-600">
          {inactive}
        </p>
      </div>
       <div className="bg-white p-5 rounded-xl shadow">
        <h3>New This Month</h3>
        <p className="text-2xl font-bold">
          12
        </p>
      </div>

      
      
    </div>
  );
};

export default StudentStats;
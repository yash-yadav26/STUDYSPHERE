import {
  Users,
  UserPlus,
  IndianRupee,
  Armchair,
} from "lucide-react";

export default function ReportStats({
  studentsCount = 0,
  enrollmentsCount = 0,
  revenue = 0,
  occupiedSeats = 0,
}) {
  const stats = [
    {
      title: "Students",
      value: studentsCount,
      icon: Users,
    },
    {
      title: "Enrollments",
      value: enrollmentsCount,
      icon: UserPlus,
    },
    {
      title: "Revenue",
      value: `₹${revenue}`,
      icon: IndianRupee,
    },
    {
      title: "Occupied Seats",
      value: occupiedSeats,
      icon: Armchair,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="p-3 bg-slate-100 rounded-lg">
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
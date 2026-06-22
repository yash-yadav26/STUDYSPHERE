import {
  Users,
  UserPlus,
  IndianRupee,
  Armchair,
} from "lucide-react";

export default function ReportStats({
  studentsCount,
  enrollmentsCount,
  revenue,
  occupiedSeats,
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
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-3">
                  {item.value}
                </h2>
              </div>

              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                <Icon size={26} />
              </div>
            </div>

            <div className="mt-5 h-1 w-12 rounded-full bg-indigo-100 group-hover:w-20 group-hover:bg-indigo-500 transition-all duration-300"></div>
          </div>
        );
      })}
    </div>
  );
}
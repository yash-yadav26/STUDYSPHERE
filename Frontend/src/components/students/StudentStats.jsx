import {
  Users,
  UserCheck,
  UserX,
  UserPlus,
} from "lucide-react";

const StudentStats = ({ students }) => {
  const total = students.length;

  const active = students.filter(
    (s) => s.status === "ACTIVE"
  ).length;

  const inactive = students.filter(
    (s) => s.status === "INACTIVE"
  ).length;

  const stats = [
    {
      title: "Total Students",
      value: total,
      icon: Users,
      iconBg: "bg-blue-100 text-blue-600 hover:bg-blue-200",
       
      valueColor: "text-blue-600",
      lineColor:
        "group-hover:bg-blue-500",
    },
    {
      title: "Active",
      value: active,
      icon: UserCheck,
      iconBg:
       "bg-green-100 text-green-600 hover:bg-green-200",
      valueColor: "text-green-600",
      lineColor:
        "group-hover:bg-green-500",
    },
    {
      title: "Inactive",
      value: inactive,
      icon: UserX,
      iconBg:
       "bg-red-100 text-red-600 hover:bg-red-200",
      valueColor: "text-red-600",
      lineColor:
        "group-hover:bg-red-500",
    },
    {
      title: "New This Month",
      value: 12,
      icon: UserPlus,
      iconBg:
         "bg-purple-100 text-purple-600 hover:bg-purple-200",
      valueColor: "text-purple-600",
      lineColor:
        "group-hover:bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2
                  className={`text-3xl font-bold mt-3 ${item.valueColor}`}
                >
                  {item.value}
                </h2>
              </div>

             <div
              className={`p-3 rounded-xl transition-all duration-300 ${item.iconBg}`}
             >
                <Icon size={26} />
              </div>
            </div>

            <div
              className={`mt-5 h-1 w-12 rounded-full bg-slate-100 group-hover:w-20 transition-all duration-300 ${item.lineColor}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StudentStats;
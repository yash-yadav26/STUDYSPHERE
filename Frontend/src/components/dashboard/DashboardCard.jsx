 const DashboardCard = ({
  title,
  value,
  subtitle,
  icon,
  iconColor = {
    bg: "bg-slate-100",
    text: "text-slate-600",
  },
}) => {
  return (
    <div className=" bg-white rounded-xl p-6 shadow-sm border border-slate-200  hover:shadow-lg hover:-translate-y-1">

      <div className="flex justify-between items-start ">

        <div>
          <h3 className="text-slate-500 text-sm">
            {title}
          </h3>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-sm text-teal-600 mt-2">
            {subtitle}
          </p>
        </div>

        <div className={`p-3 rounded-lg   hover:shadow-lg hover:-translate-y-1 ${iconColor.bg} ${iconColor.text}`}>
          {icon}
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;
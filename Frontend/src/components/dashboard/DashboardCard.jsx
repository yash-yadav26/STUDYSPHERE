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
    <div
      className="
        group
        bg-white
        rounded-2xl
        p-6
        border
        border-slate-200
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-slate-300
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-slate-500 text-sm font-medium">
            {title}
          </h3>

          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            {value}
          </h2>

          <p className="text-sm text-teal-600 mt-2">
            {subtitle}
          </p>
        </div>

        <div
          className={`
            p-3
            rounded-xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:shadow-md
            ${iconColor.bg}
            ${iconColor.text}
          `}
        >
          {icon}
        </div>
      </div>

      <div className="mt-5 h-1 w-12 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-20 group-hover:bg-teal-500" />
    </div>
  );
};

export default DashboardCard;
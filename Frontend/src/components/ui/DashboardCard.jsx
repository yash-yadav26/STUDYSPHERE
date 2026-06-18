const DashboardCard = ({
  title,
  value,
  subtitle,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div>
          {icon}
        </div>

      </div>

      <p className="text-green-600 text-sm mt-4">
        {subtitle}
      </p>

    </div>
  );
};

export default DashboardCard;
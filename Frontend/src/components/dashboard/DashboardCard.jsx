const DashboardCard = ({
  title,
  value,
  subtitle,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">

      <h3 className="text-slate-500 text-sm">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

      <p className="text-sm text-green-600 mt-2">
        {subtitle}
      </p>

    </div>
  );
};

export default DashboardCard;
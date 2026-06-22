const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-4xl border border-slate-200 shadow-sm  hover:shadow-lg transition-all duration-300">
      {title && (
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800">
            {title}
          </h2>
        </div>
      )}

      <div className="p-2">
        {children}
      </div>
    </div>
  );
};

export default Card;
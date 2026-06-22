 const WelcomeCard = ({
  name = "Admin",
  revenue = "₹4,500",
  students = "12",
  seats = "44",
}) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-lg  hover:shadow-xl
       hover:-translate-y-1">

      <h1 className="text-3xl font-bold">
        Welcome Back, {name} 
      </h1>

      <p className="mt-2 text-slate-300">
        Here's what's happening in your StudySphere today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">

        <div>
          <p className="text-slate-300 text-sm">
            Today's Revenue
          </p>

          <h3 className="text-2xl font-bold mt-1">
            {revenue}
          </h3>
        </div>

        <div>
          <p className="text-slate-300 text-sm">
            New Students
          </p>

          <h3 className="text-2xl font-bold mt-1">
            {students}
          </h3>
        </div>

        <div>
          <p className="text-slate-300 text-sm">
            Available Seats
          </p>

          <h3 className="text-2xl font-bold mt-1">
            {seats}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default WelcomeCard;
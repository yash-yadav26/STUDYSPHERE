import { useNavigate } from "react-router-dom";

const ExpiringMembershipsCard = ({ enrollments = [] }) => {
  const navigate = useNavigate();

  const expiringMemberships = enrollments
    .sort((a, b) => new Date(a.endDate) - new Date(b.endDate))
    .slice(0, 5);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Expiring Memberships
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Upcoming membership expirations
          </p>
        </div>

        <button
          onClick={() => navigate("/enrollments")}
          className="
            px-4
            py-2
            rounded-xl
            bg-orange-50
            text-orange-600
            font-medium
            hover:bg-orange-100
            transition
          "
        >
          View All
        </button>
      </div>

      <div className="p-6 space-y-4">
        {expiringMemberships.length > 0 ? (
          expiringMemberships.map((member) => (
            <div
              key={member._id}
              className="
                flex
                justify-between
                items-center
                border
                border-slate-200
                rounded-2xl
                p-4
                hover:bg-slate-50
                transition
              "
            >
              <div>
                <h3 className="font-semibold text-slate-800">
                  {member.studentId?.name || "Student"}
                </h3>

                <p className="text-sm text-slate-500">{member.planType}</p>
              </div>

              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                {new Date(member.endDate).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-slate-500">
            No Memberships Found
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpiringMembershipsCard;

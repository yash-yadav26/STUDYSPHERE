const memberships = [
  {
    id: 1,
    name: "Aman Singh",
    days: "2 Days Left",
  },
  {
    id: 2,
    name: "Neha Gupta",
    days: "5 Days Left",
  },
];

const ExpiringMembershipsCard = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-4">
        Expiring Memberships
      </h2>

      <div className="space-y-4">

        {memberships.map((member) => (
          <div
            key={member.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{member.name}</span>

            <span className="font-semibold text-orange-500">
              {member.days}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ExpiringMembershipsCard;
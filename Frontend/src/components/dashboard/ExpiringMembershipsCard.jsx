const ExpiringMembershipsCard = ({
  enrollments = [],
}) => {
  const expiringMemberships =
    enrollments.slice(0, 5);

  return (
    <div className="bg-white rounded-xl p-6 min-h-[150px]">

      <div className="space-y-4">
        {expiringMemberships.length > 0 ? (
          expiringMemberships.map((member) => (
            <div
              key={member._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                {member.studentId?.name ||
                  "Student"}
              </span>

              <span className="font-semibold text-orange-500">
                {new Date(
                  member.endDate
                ).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <p>No Memberships Found</p>
        )}
      </div>

    </div>
  );
};

export default ExpiringMembershipsCard;
const slots = [
  "Morning",
  "Afternoon",
  "Evening",
];

const SlotSelector = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Select Slot
      </h2>

      <div className="flex gap-4">
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() =>
              setEnrollmentData({
                ...enrollmentData,
                slot,
              })
            }
            className={`px-5 py-3 rounded-lg border ${
              enrollmentData.slot === slot
                ? "bg-indigo-600 text-white"
                : ""
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlotSelector;
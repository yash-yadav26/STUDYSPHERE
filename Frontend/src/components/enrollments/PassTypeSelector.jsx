const passTypes = [
  "Daily Pass",
  "Monthly Pass",
  "Full Day Plan",
];

const PassTypeSelector = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Select Pass Type
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {passTypes.map((pass) => (
          <button
            type="button"
            key={pass}
            onClick={() =>
              setEnrollmentData({
                ...enrollmentData,
                planType: pass,
              })
            }
            className={`p-5 rounded-xl border text-left ${
              enrollmentData.planType === pass
                ? "border-indigo-600 bg-indigo-50"
                : ""
            }`}
          >
            <h3 className="font-semibold">
              {pass}
            </h3>

            <p className="text-sm text-gray-500">
              Click to select
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PassTypeSelector;
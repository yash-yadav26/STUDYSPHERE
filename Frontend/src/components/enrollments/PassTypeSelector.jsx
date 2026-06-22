const passTypes = [
  {
    name: "Monthly",
    amount: 2000,
  },
  {
    name: "Quarterly",
    amount: 5000,
  },
  {
    name: "Yearly",
    amount: 18000,
  },
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
            key={pass.name}
            onClick={() =>
              setEnrollmentData({
                ...enrollmentData,
                passType: pass,
              })
            }
            className={`p-5 rounded-xl border text-left ${
              enrollmentData.passType
                ?.name === pass.name
                ? "border-indigo-600 bg-indigo-50"
                : ""
            }`}
          >
            <h3 className="font-semibold">
              {pass.name}
            </h3>

            <p>
              ₹{pass.amount}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PassTypeSelector;
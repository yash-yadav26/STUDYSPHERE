const EnrollmentSummary = ({
  enrollmentData,
}) => {
  const handleConfirm = () => {
    if (!enrollmentData.student) {
      alert(
        "Please select a student"
      );
      return;
    }

    if (!enrollmentData.passType) {
      alert(
        "Please select a pass type"
      );
      return;
    }

    if (!enrollmentData.slot) {
      alert(
        "Please select a slot"
      );
      return;
    }

    if (!enrollmentData.seat) {
      alert(
        "Please select a seat"
      );
      return;
    }

    console.log(enrollmentData);

    alert(
      "Enrollment Created Successfully"
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-5">
      <h2 className="font-semibold text-lg mb-5">
        Enrollment Summary
      </h2>

      <div className="space-y-3">
        <p>
          <strong>Student:</strong>{" "}
          {enrollmentData.student
            ?.name || "-"}
        </p>

        <p>
          <strong>Pass:</strong>{" "}
          {enrollmentData.passType
            ?.name || "-"}
        </p>

        <p>
          <strong>Slot:</strong>{" "}
          {enrollmentData.slot || "-"}
        </p>

        <p>
          <strong>Seat:</strong>{" "}
          {enrollmentData.seat || "-"}
        </p>

        <p>
          <strong>Amount:</strong> ₹
          {enrollmentData.passType
            ?.amount || 0}
        </p>
      </div>

      <button
        onClick={handleConfirm}
        className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
      >
        Confirm Enrollment
      </button>
    </div>
  );
};

export default EnrollmentSummary;
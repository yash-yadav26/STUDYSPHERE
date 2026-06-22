import StudentSelector from "./StudentSelector";
import PassTypeSelector from "./PassTypeSelector";
import SeatSelector from "./SeatSelector";

const EnrollmentForm = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  return (
    <div className="space-y-6">

      <StudentSelector
        enrollmentData={enrollmentData}
        setEnrollmentData={setEnrollmentData}
      />

      <PassTypeSelector
        enrollmentData={enrollmentData}
        setEnrollmentData={setEnrollmentData}
      />

      <SeatSelector
        enrollmentData={enrollmentData}
        setEnrollmentData={setEnrollmentData}
      />

      <div className="bg-white p-6 rounded-xl shadow">
        <label className="block mb-2 font-medium">
          Start Date
        </label>

        <input
          type="date"
          value={enrollmentData.startDate}
          onChange={(e) =>
            setEnrollmentData({
              ...enrollmentData,
              startDate: e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

    </div>
  );
};

export default EnrollmentForm;
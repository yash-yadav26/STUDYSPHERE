import StudentSelector from "./StudentSelector";
import PassTypeSelector from "./PassTypeSelector";
import SlotSelector from "./SlotSelector";
import SeatSelector from "./SeatSelector";
import EnrollmentSummary from "./EnrollmentSummary";

const EnrollmentForm = ({
  enrollmentData,
  setEnrollmentData,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className="lg:col-span-2 space-y-6">

        <StudentSelector
          enrollmentData={enrollmentData}
          setEnrollmentData={
            setEnrollmentData
          }
        />

        <PassTypeSelector
          enrollmentData={enrollmentData}
          setEnrollmentData={
            setEnrollmentData
          }
        />

        <SlotSelector
          enrollmentData={enrollmentData}
          setEnrollmentData={
            setEnrollmentData
          }
        />

        <SeatSelector
          enrollmentData={enrollmentData}
          setEnrollmentData={
            setEnrollmentData
          }
        />
      </div>

      <EnrollmentSummary
        enrollmentData={enrollmentData}
      />
    </div>
  );
};

export default EnrollmentForm;
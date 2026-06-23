import { useState } from "react";
import { StudentContext } from "./StudentContext";

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...student,
      },
    ]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
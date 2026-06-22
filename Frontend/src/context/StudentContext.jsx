import { createContext, useContext, useState } from "react";


const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState();

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

export const useStudents = () =>
  useContext(StudentContext);
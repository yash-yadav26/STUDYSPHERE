import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";

export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const fetchStudents = async () => {
    try {
      setLoading(true);

      const res = await getStudents();

      setStudents(res.data.students);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchStudents();
}, []);


  return {
    students,
    loading,
  };
};
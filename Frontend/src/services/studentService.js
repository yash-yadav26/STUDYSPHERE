import api from "./api";

export const getStudents = () =>
  api.get("/student/all");

export const getStudentById = (id) =>
  api.get(`/student/${id}`);

export const createStudent = (data) =>
  api.post("/student/create", data);

export const updateStudent = (id, data) =>
  api.put(`/student/update/${id}`, data);

export const deleteStudent = (id) =>
  api.delete(`/student/delete/${id}`);
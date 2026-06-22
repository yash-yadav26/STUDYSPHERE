import api from "./api";

export const getStudents = () => api.get("/students/all");

export const getStudentById = (id) => api.get(`/students/${id}`);

export const createStudent = (data) => api.post("/students/create", data);

export const updateStudent = (id, data) => api.put(`/students/update/${id}`, data);

export const deleteStudent = (id) => api.delete(`/students/delete/${id}`);

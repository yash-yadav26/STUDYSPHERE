import api from "./api";

export const getEnrollments = () => api.get("/enrollments/all");

export const getEnrollmentById = (id) => api.get(`/enrollments/${id}`);

export const createEnrollment = (data) => api.post("/enrollments/create", data);

export const deleteEnrollment = (id) => api.delete(`/enrollments/delete/${id}`);

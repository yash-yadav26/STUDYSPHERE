import api from "./api";

export const getEnrollments = () =>
  api.get("/enrollment/all");

export const getEnrollmentById = (id) =>
  api.get(`/enrollment/${id}`);

export const createEnrollment = (data) =>
  api.post("/enrollment/create", data);

export const deleteEnrollment = (id) =>
  api.delete(`/enrollment/delete/${id}`);
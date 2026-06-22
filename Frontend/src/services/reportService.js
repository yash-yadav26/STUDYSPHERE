import api from "./api";

export const getStudents = () => api.get("/students/all");

export const getEnrollments = () => api.get("/enrollment/all");

export const getPayments = () => api.get("/payment/all");

export const getInvoices = () => api.get("/invoice/all");

export const getSeats = () => api.get("/seats/all");

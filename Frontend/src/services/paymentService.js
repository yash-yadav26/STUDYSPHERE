import api from "./api";

export const getPayments = () => api.get("/payments/all");

export const getPaymentById = (id) => api.get(`/payments/${id}`);

export const createPayment = (data) => api.post("/payments/create", data);

export const deletePayment = (id) => api.delete(`/payments/delete/${id}`);

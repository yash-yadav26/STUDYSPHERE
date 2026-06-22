import api from "./api";

export const getPayments = () =>
  api.get("/payment/all");

export const getPaymentById = (id) =>
  api.get(`/payment/${id}`);

export const createPayment = (data) =>
  api.post("/payment/create", data);

export const deletePayment = (id) =>
  api.delete(`/payment/delete/${id}`);
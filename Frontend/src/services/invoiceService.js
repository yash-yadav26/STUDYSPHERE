import api from "./api";

export const getInvoices = () =>
  api.get("/invoice/all");

export const getInvoiceById = (id) =>
  api.get(`/invoice/${id}`);

export const createInvoice = (data) =>
  api.post("/invoice/create", data);

export const deleteInvoice = (id) =>
  api.delete(`/invoice/delete/${id}`);
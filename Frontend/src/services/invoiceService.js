import api from "./api";

export const getInvoices = () =>
  api.get("/invoices/all");

export const getInvoiceById = (id) =>
  api.get(`/invoices/${id}`);

export const createInvoice = (data) =>
  api.post("/invoices/create", data);

export const deleteInvoice = (id) =>
  api.delete(`/invoices/delete/${id}`);
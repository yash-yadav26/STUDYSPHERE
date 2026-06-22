import api from "./api";

export const getSeats = () => api.get("/seats/all");

export const getSeatByID = (id) => api.get(`/seats/${id}`);

export const createSeat = (data) => api.post("/seats/create", data);

export const updateSeat = (id, data) => api.put(`/seats/update/${id}`, data);

export const deleteSeat = (id) => api.delete(`/seats/delete/${id}`);

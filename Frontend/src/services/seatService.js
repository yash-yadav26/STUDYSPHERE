import api from "./api";

export const getSeats = () =>
  api.get("/seat/all");

export const getSeatByID = (id) =>
  api.get(`/seat/${id}`);

export const createSeat = (data) =>
  api.post("/seat/create", data);

export const updateSeat = (id, data) =>
  api.put(`/seat/update/${id}`, data);

export const deleteSeat = (id) =>
  api.delete(`/seat/delete/${id}`);
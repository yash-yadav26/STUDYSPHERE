import API from "./api";

export const loginAdmin = (data) =>
  API.post("/auth/login", data);

export const registerAdmin = (data) =>
  API.post("/auth/register", data);
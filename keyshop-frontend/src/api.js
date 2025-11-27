
import axios from "axios";
export const API_URL = "https://keyshop-backend-n11g.onrender.com";
export const api = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem("token") || ""}` },
});

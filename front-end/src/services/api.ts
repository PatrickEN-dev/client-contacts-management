import axios from "axios";

export const API = axios.create({
  baseURL: "http://back-end:3001",
  timeout: 5000,
});

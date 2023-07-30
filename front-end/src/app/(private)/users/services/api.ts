import axios from "axios";

export const API = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
});

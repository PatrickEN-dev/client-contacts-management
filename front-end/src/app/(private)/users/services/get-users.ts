import { API } from "./api";

export async function getUsers() {
  const response = await API.get("/users");

  const users = await response.data;

  return users?.data || [];
}

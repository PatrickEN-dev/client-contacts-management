import { API } from "./api";

export async function getUsersById(userId: string) {
  const response = await API.get(`/users/${userId}`);

  const users = await response.data;

  return users.data;
}

import { API } from "../../api";

export async function getUsers() {
  try {
    const response = await API.get("/users");

    const users = await response.data;

    return users?.data || [];
  } catch (error) {
    console.error(error);
  }
}

import { API } from "../../api";

export async function getUsersById(userId: string) {
  try {
    const response = await API.get(`/users/${userId}`);

    const users = await response.data;

    return users.data;
  } catch (error) {
    console.error(error);

    // ver se posso retornar um elemento HTMl para cada erro
  }
}

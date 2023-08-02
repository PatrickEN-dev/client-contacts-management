import { API } from "@/services/api";
import { createContext } from "react";
import { IProviderChildrenProps, IUserListContext } from "./interfaces";
import { IUser } from "@/@types/users.types";

export const USerCrudContext = createContext<IUserListContext>({} as IUserListContext);

export const UsercrudProvider = ({children}: IProviderChildrenProps) => {

  async function getUsers() {
    try {
      const response = await API.get<IUser[]>("/users");
  
      const users: IUser[] = response.data;
  
      return users || [];
    } catch (error) {
      console.error(error);
      throw new Error("usuários não encontrados")
    }
  }

  async function getUserById(userId: number) {
    try {
      const response = await API.get<IUser>(`/users/${userId}`);

      const user = response.data;
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("usuários não encontrados")
    }
  }

  return (
    <USerCrudContext.Provider value={{ getUsers, getUserById}}>
      {children}
    </USerCrudContext.Provider>
  );
};
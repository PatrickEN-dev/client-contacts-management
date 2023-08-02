import { API } from "@/services/api";
import { createContext } from "react";
import { IProviderChildrenProps, IUserListContext } from "./interfaces";
import { IUser } from "@/@types/users.types";

export const USerCrudContext = createContext<IUserListContext>({} as IUserListContext);

export const UsercrudProvider = ({children}: IProviderChildrenProps) => {

async function getUsers() {
    const response = await API.get("/users");

    const users: IUser[] = response.data;

    return users || [];
  }

  async function getUserById(userId: number) {
    const response = await API.get(`/users/${userId}`);
    
    const users = response.data;
    return users;
  }

  return (
    <USerCrudContext.Provider value={{ getUsers, getUserById}}>
      {children}
    </USerCrudContext.Provider>
  );
};
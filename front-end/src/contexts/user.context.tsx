import React, { createContext } from "react";
import { IProviderChildrenProps } from "./interfaces";
import { API } from "@/app/(private)/users/services/api";

export const UserRequestsContext = createContext({});

export default function UserRequestsProvider({
  children,
}: IProviderChildrenProps) {
  async function getUsers() {
    const response = await API.get("/users");

    const users = response.data;

    return users || [];
  }

  async function getUsersById(userId: string | number) {
    const response = await API.get(`/users/${userId}`);
    
    const users = response.data;
    return users;
  }

  return (
    <UserRequestsContext.Provider value={{getUsers, getUsersById}}>
      {children}
    </UserRequestsContext.Provider>
  );
}
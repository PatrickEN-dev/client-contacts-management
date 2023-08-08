"use client";

import { API } from "@/services/api";
import { createContext, useContext, useState } from "react";
import { IProviderChildrenProps, IUserRequestContext } from "./interfaces";
import { Userdata } from "@/@types/users.types";
import { parseCookies } from "nookies";
import { AuthContext } from "./authContext";

export const USerCrudContext = createContext<IUserRequestContext>(
  {} as IUserRequestContext
);

export const UsercrudProvider = ({ children }: IProviderChildrenProps) => {
  const { token } = useContext(AuthContext);
  const cookies = parseCookies();
  const [userData, setUserData] = useState<Userdata | null>(null);

  if (cookies["ccm.token"]) {
    API.defaults.headers.common.authorization = `Bearer ${cookies["ccm.token"]}`;
  }

  function getUserById(userId: number) {
    return API.get<Userdata>(`/users/${userId}`)
      .then((response) => {
        console.log("GETUSERBYID", response.data);
        const userInfo: Userdata = response.data;
        return userInfo;
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Usuário não encontrado");
      });
  }

  // const updateUserRequest = async (data: IUser, id: number) => {
  //   try {
  //     await API.put(`users/${id}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     toast.success("Seu perfil foi atualizado com sucesso!");

  //     const updatedContact: IUser = user.map((user) =>
  //       user.id === id ? { ...user, ...data } : user
  //     );
  //     setUser(updatedContact);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Não foi póssível atualizar suas informações");
  //   }
  // };

  // const deleteUserRequest = async (id: number) => {
  //   try {
  //     await API.delete(`/users${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const deletedContact = user.filter((user) => user.id !== id);

  //     setusers(deletedContact);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Não foi póssível deletar seu perfil");
  //   }
  // }

  return (
    <USerCrudContext.Provider value={{ getUserById }}>
      {children}
    </USerCrudContext.Provider>
  );
};

"use client";

import { API } from "@/services/api";
import { createContext, useContext, useState } from "react";
import { IProviderChildrenProps, IUserRequestContext } from "./interfaces";
import { IUserInfos, UserData, UserUpdateData } from "@/@types/users.types";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { AuthContext } from "./authContext";

export const USerCrudContext = createContext<IUserRequestContext>(
  {} as IUserRequestContext
);

export const UsercrudProvider = ({ children }: IProviderChildrenProps) => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const cookies = parseCookies();

  if (cookies["ccm.token"]) {
    API.defaults.headers.common.authorization = `Bearer ${cookies["ccm.token"]}`;
  }

  function getUserById() {
    return API.get<IUserInfos>(`/users`)
      .then((response) => {
        const userInfo: IUserInfos = response.data;

        setUser(userInfo);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Usuário não encontrado");
      });
  }

  const updateUserRequest = async (data: UserUpdateData, id: number) => {
    try {
      await API.patch(`/users/${id}`, data);

      setUser({ ...data, ...user });
      toast.success("Seu perfil foi atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi póssível atualizar suas informações");
    }
  };

  const deleteUserRequest = async (id: number) => {
    try {
      await API.delete(`/users/${id}`);

      setUser({
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Não foi póssível deletar seu perfil");
    }
  };

  return (
    <USerCrudContext.Provider
      value={{
        getUserById,
        updateUserRequest,
        deleteUserRequest,
        loading,
        setLoading,
      }}
    >
      {children}
    </USerCrudContext.Provider>
  );
};

"use client";

import { API } from "@/services/api";
import { createContext, useContext, useState } from "react";
import { IUserInfos, UserUpdateData } from "@/@types/users.types";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { useRequest } from "@/hooks/useRequest";
import { IChildrenProps } from "@/@types/context";
import { IUserRequestContext } from "./interfaces";
import { AuthContext } from "../auth";

export const USerCrudContext = createContext<IUserRequestContext>(
  {} as IUserRequestContext
);

export const UsercrudProvider = ({ children }: IChildrenProps) => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const cookies = parseCookies();

  if (cookies["ccm.token"]) {
    API.defaults.headers.common.authorization = `Bearer ${cookies["ccm.token"]}`;
  }

  const request = useRequest();

  const getUserById = () => {
    return request({
      tryFn: async () => {
        const response = await API.get<IUserInfos>(`/users`);
        const userInfo: IUserInfos = response.data;
        setUser(userInfo);
        setLoading(false);
      },
      onErrorFn: () => {
        throw new Error("Usuário não encontrado");
      },
    });
  };

  const updateUserRequest = async (data: UserUpdateData, id: number) => {
    await request({
      tryFn: async () => {
        await API.patch(`/users/${id}`, data);
        setUser({ ...data, ...user });
        toast.success("Seu perfil foi atualizado com sucesso!");
      },
      onErrorFn: () => {
        toast.error("Não foi possível atualizar suas informações");
      },
    });
  };

  const deleteUserRequest = async (id: number) => {
    await request({
      tryFn: async () => {
        await API.delete(`/users/${id}`);
        setUser({
          id: 0,
          first_name: "",
          last_name: "",
          email: "",
          telephone: "",
          password: "",
        });
      },
      onErrorFn: () => toast.error("Não foi possível deletar seu perfil"),
    });
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

import React, { createContext, useState } from "react";
import {
  IProviderChildrenProps,
  IUserLoginForm,
  IUserLoginResponse,
  IUserRegister,
  IUserRequestContext,
  iAxiosError,
} from "./interfaces";
import { API } from "@/services/api";
import { toast } from "react-toastify";
import axios from "axios";

export const UserRequestsContext = createContext<IUserRequestContext>(
  {} as IUserRequestContext
);

export default function UserRequestsProvider({
  children,
}: IProviderChildrenProps) {
  const [user, setUser] = useState<IUserLoginResponse | null>(null);

  const createUserRequest = async (data: IUserRegister) => {
    try {
      await API.post<IUserRegister>("/users", data);

      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possível realizar o cadastro");
    }
  };

  const loginUserRequest = async (data: IUserLoginForm) => {
    try {
      const response = await API.post<IUserLoginResponse>("/login", data);

      toast.success("Login realizado com sucesso!");
      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possivel realizar o login");
    }
  };

  // const autoLogin = async (userId: string | null) => {
  //   const token = "ainda preciso ver como faz"
  //   if (token) {
  //     try {
  //       const response = await API.get(`/users/${userId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       setUser(response.data);
  //     } catch (error) {
  //       if (axios.isAxiosError<iAxiosError>(error)) {
  //         const errorMessage = error.response?.data?.message;
  //         toast.error(errorMessage);
  //       }
  //       console.error(error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   autoLogin(userID);
  // }, []);

  return (
    <UserRequestsContext.Provider
      value={{ user, setUser, createUserRequest, loginUserRequest }}
    >
      {children}
    </UserRequestsContext.Provider>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { IProviderChildrenProps, authProviderData } from "./interfaces";
import { IUserInfos, LoginData, UserData } from "@/@types/users.types";
import { API } from "@/services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import { useRequest } from "@/hooks/useRequest";

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);
export const AuthProvider = ({ children }: IProviderChildrenProps) => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUserInfos>({} as IUserInfos);
  const { push } = useRouter();

  const request = useRequest();

  const registerUser = (userData: UserData) => {
    request({
      tryFn: async () => {
        await API.post("/users", userData);
        push("/login");
        toast.success("Cadastro realizado com sucesso!");
      },
      onErrorFn: () => toast.error("Não foi possível realizar o cadastro"),
    });
  };

  const loginUser = (loginData: LoginData) => {
    request({
      tryFn: async () => {
        const response = await API.post("/login", loginData);
        setCookie(null, "ccm.token", response.data.token, {
          maxAge: 60 * 40,
          path: "/",
        });
        setToken(response.data.token);
        toast.success("Login realizado com sucesso!");
        push("/contacts");
      },
      onErrorFn: () => toast.error("Não foi possível realizar o login"),
    });
  };

  const autoLogin = async () => {
    if (token) {
      await request({
        tryFn: async () => {
          const response = await API.get("/users", {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUser(response.data);
        },
      });
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  const logout = () => {
    setUser({} as IUserInfos);
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        registerUser,
        token,
        setToken,
        user,
        setUser,
        autoLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

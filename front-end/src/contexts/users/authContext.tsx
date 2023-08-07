"use client";

import { useRouter } from "next/navigation";
import { IProviderChildrenProps, authProviderData } from "./interfaces";
import { LoginData, Userdata } from "@/@types/users.types";
import { API } from "@/services/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);
export const AuthProvider = ({ children }: IProviderChildrenProps) => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  const registerUser = (userData: Userdata) => {
    API.post("/users", userData)
      .then(() => {
        router.push("/login");
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((err) => {
        toast.error("Não foi possível realizar o cadastro"), console.error(err);
      });
  };

  const loginUser = (loginData: LoginData) => {
    API.post("/login", loginData)
      .then((response) => {
        setCookie(null, "ccm.token", response.data.token, {
          maxAge: 60 * 40,
          path: "/",
        }),
          setCookie(null, "ccm.userId", response.data.userId, {
            maxAge: 60 * 400000,
            path: "/",
          });
        toast.success("Login realizado com sucesso!");
        router.push("/contacts");
      })
      .catch((err) => {
        toast.error("Não foi possível realizar o login"), console.error(err);
      });
  };
  return (
    <AuthContext.Provider value={{ loginUser, registerUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

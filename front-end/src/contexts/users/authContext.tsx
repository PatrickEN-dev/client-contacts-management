"use client";

import { useRouter } from "next/navigation";
import { IProviderChildrenProps, authProviderData } from "./interfaces";
import { IUserInfos, LoginData, UserData } from "@/@types/users.types";
import { API } from "@/services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);
export const AuthProvider = ({ children }: IProviderChildrenProps) => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUserInfos>({} as IUserInfos);
  const router = useRouter();

  const registerUser = (userData: UserData) => {
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
          setToken(response.data.token);
        toast.success("Login realizado com sucesso!");
        router.push("/contacts");
      })
      .catch((err) => {
        toast.error("Não foi possível realizar o login"), console.error(err);
      });
  };

  const autoLogin = async () => {
    if (token) {
      try {
        const response = await API.get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
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

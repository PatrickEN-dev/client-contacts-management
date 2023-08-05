import { useRouter } from "next/router";
import { IProviderChildrenProps, authProviderData } from "./interfaces";
import { LoginData, Userdata } from "@/@types/users.types";
import { API } from "@/services/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);
export const AuthProvider = ({ children }: IProviderChildrenProps) => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  const registerUser = (userData: Userdata) => {
    API.post("/users", userData)
      .then(() => router.push("/auth/login"))
      .catch((err) => {
        toast.error("Não foi possível realizar o cadastro"), console.error(err);
      });
  };

  const loginUser = (loginData: LoginData) => {
    API.post("/login", loginData)
      .then(() => router.push("/"))
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

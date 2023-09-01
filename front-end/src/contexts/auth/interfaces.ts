import { IUserInfos, LoginData, UserData } from "@/@types/users.types";
import { Dispatch, SetStateAction } from "react";

export interface authProviderData {
  setToken: Dispatch<SetStateAction<string>>;
  token: string | undefined;
  user: IUserInfos;
  setUser: React.Dispatch<SetStateAction<IUserInfos>>;

  registerUser: (userData: UserData) => void;
  loginUser: (loginData: LoginData) => void;
  autoLogin: () => Promise<void>;
  logout: () => void;
}

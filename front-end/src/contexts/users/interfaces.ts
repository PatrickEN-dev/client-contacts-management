import { Dispatch } from "react";
import { SetStateAction } from "react";
import { UserUpdateData } from "@/@types/users.types";

export interface IUserRequestContext {
  getUserById: () => Promise<void>;
  updateUserRequest: (data: UserUpdateData, id: number) => Promise<void>;
  deleteUserRequest: (id: number) => Promise<void>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}

export type iAxiosError = {
  status: string;
  message: string;
};

export type IUserRegister = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  error?: string | undefined;
  axiosError: iAxiosError;
};

export type IUserData = {
  id: string;
  name: string;
  email: string;
};

export type IUserLoginForm = {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
};

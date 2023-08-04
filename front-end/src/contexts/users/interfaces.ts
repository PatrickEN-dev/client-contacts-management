import React from "react";
import { SetStateAction } from "react";
import { IUser } from "@/@types/users.types";

export interface IProviderChildrenProps {
  children: React.ReactNode;
}

export interface IUserContext {
  name: string;
  email: string;
}

export interface IUserRequestContext {
  user: IUserLoginResponse | null;
  setUser: React.Dispatch<SetStateAction<IUserLoginResponse | null>>;

  createUserRequest: (data: IUserRegister) => Promise<iAxiosError | void>;
  loginUserRequest: (data: IUserLoginForm) => Promise<iAxiosError | void>;
}

export type iAxiosError = {
  status: string;
  message: string;
};

export interface IUserListContext {
  getUserById: (userId: number) => Promise<IUser>;
}

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

export type IUserLoginResponse = {
  token: string;
  user: IUserData;
};

export type IUserLoginForm = {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
};

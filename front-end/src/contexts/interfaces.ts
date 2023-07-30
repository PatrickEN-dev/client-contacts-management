import React from "react";

export interface IProviderChildrenProps {
  children: React.ReactNode;
}

export interface IUserContext {
  name: string;
  email: string;
}

"use client";

import { createContext, useState } from "react";
import { ILoadingContext } from "./interfaces";
import { IChildrenProps } from "@/@types/context";

export const LoadingContext = createContext<ILoadingContext>(
  {} as ILoadingContext
);

export const LoadingProvider = ({ children }: IChildrenProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

"use client";

import { LoadingContext } from "@/contexts/Loading";
import { useContext } from "react";

interface IRequestParams {
  tryFn: () => Promise<void>;
  onErrorFn?: () => void;
}

export const useRequest = () => {
  const { setLoading } = useContext(LoadingContext);

  const request = async ({ tryFn, onErrorFn }: IRequestParams) => {
    try {
      setLoading(true);
      if (tryFn) await tryFn();
    } catch (error) {
      console.error(error);
      if (onErrorFn) onErrorFn();
    } finally {
      setLoading(false);
    }
  };
  return request;
};

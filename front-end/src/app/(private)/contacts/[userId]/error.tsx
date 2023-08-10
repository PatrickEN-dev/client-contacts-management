"use client";

import { IErrorProps } from "@/@types/error.types";
import { useEffect } from "react";

export default function Error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Algo deu errado</h1>

      <button onClick={reset}>Tentar novamente</button>
    </>
  );
}

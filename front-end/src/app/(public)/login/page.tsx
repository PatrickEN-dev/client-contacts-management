"use client";

import LoginForm from "@/components/Forms/FormLogin";
import styles from "../register/styles.module.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/users/authContext";

// const { logout } = useContext(AuthContext);

export default function Login() {
  // useEffect(() => {
  //   logout();
  // }, []);

  return (
    <>
      <main className={styles.main}>
        <h2>Página de Login</h2>
        <LoginForm />
      </main>
    </>
  );
}

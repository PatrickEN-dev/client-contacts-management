"use client";
import LoginForm from "@/components/Forms/FormLogin";
import styles from "../auth/register/styles.module.scss";

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <h2>Página de Login</h2>
        <LoginForm />
      </main>
    </>
  );
}

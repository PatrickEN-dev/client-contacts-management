"use client";
import RegisterForm from "@/components/Forms/FormRegister";
import styles from "./styles.module.scss";

export default function RegisterPage() {
  return (
    <main className={styles.main}>
      <h2>Página de Cadastro</h2>
      <RegisterForm />
    </main>
  );
}

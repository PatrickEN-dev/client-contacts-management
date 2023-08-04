"use client";
import RootLayout from "./layout";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.homepage}>
        <h1>Bem-vindo à nossa breve Home Page!</h1>
        <p>Esta é uma página simples e agradável criada com SCSS.</p>
      </main>
    </>
  );
}

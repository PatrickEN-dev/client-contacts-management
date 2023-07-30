"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <main>
        <h1>Página de Login</h1>

        <form
          onSubmit={(event) => {
            router.push("/users");
            event.preventDefault();
          }}
        >
          <div>
            <label>
              Email
              <input type="mail" placeholder="Digite seu email" />
            </label>
          </div>

          <div>
            <label>
              Senha
              <input type="password" placeholder="Digite sua senha" />
            </label>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </>
  );
}
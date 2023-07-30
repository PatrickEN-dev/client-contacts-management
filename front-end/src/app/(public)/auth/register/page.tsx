"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <main>
        <h1>Página de Cadastro</h1>

        <form
          onSubmit={(event) => {
            router.push("/auth/login");
            event.preventDefault();
          }}
        >
          <div>
            <label>
              Primeiro nome
              <input type="text" placeholder="Digite seu nome" />
            </label>
          </div>

          <div>
            <label>
              Sobrenome
              <input type="text" placeholder="Digite seu nome" />
            </label>
          </div>

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

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </>
  );
}
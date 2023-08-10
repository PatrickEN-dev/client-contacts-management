"use client";

import { AuthContext } from "@/contexts/users/authContext";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";

export default function UserDatailsPage() {
  const { getUserById, loading } = useContext(USerCrudContext);
  const { user } = useContext(AuthContext);

  const cookies = parseCookies();
  const token = cookies["ccm.token"];

  useEffect(() => {
    if (token) getUserById();
  }, [token]);

  return (
    <main>
      {loading ? (
        <div>
          <h1>Carregando...</h1>
        </div>
      ) : (
        <>
          <section>
            <div>
              <h2>
                Usuário: {user.first_name} {user.last_name}
              </h2>
              <h3>Email: {user.email}</h3>
              <h3>Telefone: {user.telephone}</h3>
            </div>

            <button onClick={() => {}}>Editar perfil</button>
          </section>

          <button onClick={() => {}}>Deletar perfil</button>
        </>
      )}
    </main>
  );
}

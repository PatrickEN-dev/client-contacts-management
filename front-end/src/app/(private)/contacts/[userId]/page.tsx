"use client";

import { ModalDeleteUser, ModalUpdateUser } from "@/components/Modal";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { AuthContext } from "@/contexts/users/authContext";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";

export default function UserDatailsPage() {
  const { getUserById, loading } = useContext(USerCrudContext);
  const { user } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(UserContactsContext);

  const cookies = parseCookies();
  const token = cookies["ccm.token"];

  useEffect(() => {
    if (token) getUserById();
  }, [token]);

  return (
    <main className={styles.userPage}>
      {loading ? (
        <div>
          <h1>Carregando...</h1>
        </div>
      ) : (
        <>
          <section>
            {showModal === "updateUser" && <ModalUpdateUser />}
            {showModal === "deleteUser" && <ModalDeleteUser id={user.id} />}

            <div>
              <h2>
                Usuário: {user.first_name} {user.last_name}
              </h2>
              <h3>Email: {user.email}</h3>
              <h3>Telefone: {user.telephone}</h3>
            </div>

            <button onClick={() => setShowModal("updateUser")}>
              Editar perfil
            </button>
          </section>

          <button onClick={() => setShowModal("deleteUser")}>
            Deletar perfil
          </button>
        </>
      )}
    </main>
  );
}

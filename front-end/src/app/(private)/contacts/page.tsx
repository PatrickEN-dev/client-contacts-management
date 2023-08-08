"use client";

import Card from "@/components/Card";
import styles from "./styles.module.scss";
import { ContactData } from "@/@types/contacts.types";
import { Button } from "@/components/Button";
import { useContext } from "react";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { ModalCreateContact } from "@/components/Modal";

interface HomeProps {
  contacts: ContactData[];
}

export default function UserPage() {
  const { showModal, setShowModal, contacts } = useContext(UserContactsContext);
  const handleCreateModalOpen = () => setShowModal("createContactModal");

  return (
    <main className={styles.userPage}>
      <h1>Página Principal usuário logado</h1>

      {showModal === "createContactModal" && <ModalCreateContact />}

      <Button type="button" onClick={() => handleCreateModalOpen()}>
        Criar contato
      </Button>

      {contacts?.length === 0 ? (
        <p>O usuário não possui contatos cadastrados.</p>
      ) : (
        <ul>
          {contacts?.map((contact: ContactData) => (
            <Card key={contact.id} user={contact} />
          ))}
        </ul>
      )}
    </main>
  );
}

"use client";

import Card from "@/components/Card";
import styles from "./styles.module.scss";
import { ContactData, ContactDataRequest } from "@/@types/contacts.types";
import { Button } from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import {
  ModalCreateContact,
  ModalDeleteContact,
  ModalUpdateContact,
} from "@/components/Modal";

interface HomeProps {
  contacts: ContactData[];
}

export default function UserPage() {
  const {
    showModal,
    setShowModal,
    contacts,
    setContacts,
    setContactInfo,
    contactInfo,
  } = useContext(UserContactsContext);

  const handleCreateModalOpen = () => {
    setShowModal("createContactModal");
    setContactInfo({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      telephone: "",
    });
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  return (
    <main className={styles.userPage}>
      <h1>Página Principal usuário logado</h1>

      {showModal === "createContactModal" ||
        (showModal === "updateContactModal" && <ModalCreateContact />)}
      {showModal === "deleteContactModal" && (
        <ModalDeleteContact id={contactInfo.id} />
      )}

      <Button type="button" onClick={() => handleCreateModalOpen()}>
        Criar contato
      </Button>

      {contacts?.length === 0 ? (
        <p>O usuário não possui contatos cadastrados.</p>
      ) : (
        <ul>
          {contacts?.map((contact: ContactData) => (
            <Card key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </main>
  );
}

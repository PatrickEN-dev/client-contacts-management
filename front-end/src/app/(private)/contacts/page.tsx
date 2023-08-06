"use client";

import Card from "@/components/Card";
import styles from "./styles.module.scss";
import { ContactData } from "@/@types/contacts.types";
import { GetServerSideProps } from "next";
import { API } from "@/services/api";
import { Button } from "@/components/Button";

interface HomeProps {
  contacts: ContactData[];
}

export default function UserPage({ contacts }: HomeProps) {
  return (
    <>
      <main className={styles.userPage}>
        <h1>Página Principal usuário logado</h1>
        <Button
          type="button"
          onClick={() =>
            "Aqui abrirá um modal de criar contato que eu preciso fazer"
          }
        />
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await API.get<ContactData[]>("/contacts");

  return {
    props: { contacts: response.data },
  };
};
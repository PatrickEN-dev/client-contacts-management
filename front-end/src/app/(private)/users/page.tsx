import Card from "@/components/Card";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { IContact } from "@/contexts/contact/interfaces";
import { useContext } from "react";
import styles from "./styles.module.scss";

export default function UserPage() {
  const { contacts } = useContext(UserContactsContext);

  return (
    <>
      <main className={styles.userPage}>
        <h1>Página Principal usuário logado</h1>
        {contacts.length === 0 ? (
          <p>O usuário não possui contatos cadastrados.</p>
        ) : (
          <ul>
            {contacts.map((contact: IContact) => (
              <Card key={contact.id} user={contact} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

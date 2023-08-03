import Card from "@/components/Card";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { IContact } from "@/contexts/contact/interfaces";
import { useContext } from "react";

export default async function userPage() {
  const { contacts } = useContext(UserContactsContext);

  return (
    <>
      <main>
        <h1>Página Principal usuário logado</h1>
        <h3>Contatos</h3>
        <ul>
          {contacts.map((contact: IContact) => (
            <Card key={contact.id} user={contact} />
          ))}
        </ul>
      </main>
    </>
  );
}

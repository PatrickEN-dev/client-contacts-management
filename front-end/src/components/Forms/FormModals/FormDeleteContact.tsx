import { ContactData } from "@/@types/contacts.types";
import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { contactSchemaRequest } from "@/schemas/contacts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type FormUpdateContactProps = {
  id: number;
};

export default function FormDeleteContactModal({ id }: FormUpdateContactProps) {
  const { handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(contactSchemaRequest),
  });

  const { deleteContactRequest, closeModal } = useContext(UserContactsContext);

  const submit = () => {
    deleteContactRequest(id);
  };

  return (
    <section className={styles.modalContainer}>
      <div>
        <h2>Deletar contato</h2>
        <button className={styles.buttonClose} onClick={closeModal}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Button type="submit">Deletar</Button>
      </form>
    </section>
  );
}

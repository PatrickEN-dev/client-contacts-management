import { ContactData } from "@/@types/contacts.types";
import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { contactsSchema } from "@/schemas/contacts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type FormUpdateContactProps = {
  id: number;
};

export default function FormDeleteContactModal({ id }: FormUpdateContactProps) {
  const { handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(contactsSchema),
  });

  const { deleteContactRequest, closeModal } = useContext(UserContactsContext);

  const submit = () => {
    deleteContactRequest(id);
  };

  return (
    <section>
      <div>
        <h2>Deletar contato</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Button type="submit">Deletar</Button>
      </form>
    </section>
  );
}

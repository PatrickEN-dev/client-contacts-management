import { ContactDataRequest } from "@/@types/contacts.types";
import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { contactSchemaRequest } from "@/schemas/contacts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles.module.scss";

export default function FormCreateContactModal() {
  const {
    createContactRequest,
    updateContactRequest,
    closeModal,
    contactInfo,
    showModal,
  } = useContext(UserContactsContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactDataRequest>({
    resolver: zodResolver(contactSchemaRequest),
    defaultValues: contactInfo,
  });

  const isCreating = showModal === "createContact";
  const formTitle = isCreating ? "Novo contato" : "Editar contato";
  const submitButtonText = isCreating ? "Criar" : "Editar";

  const onSubmit = (formData: ContactDataRequest) => {
    const requestFunction = isCreating
      ? createContactRequest
      : updateContactRequest;
    const contactId = isCreating ? -1 : contactInfo.id;
    requestFunction(formData, contactId);
  };

  return (
    <section className={styles.modalContainer}>
      <div>
        <h2>{formTitle}</h2>
        <button className={styles.buttonClose} onClick={closeModal}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="ex: Ana"
            {...register("first_name")}
          />
          <p>{errors.first_name?.message}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="ex: Julia"
            {...register("last_name")}
          />
          <p>{errors.last_name?.message}</p>
        </div>

        <div>
          <input
            type="mail"
            placeholder="ex: julia@mail.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="tel"
            placeholder="ex: 14991335453"
            {...register("telephone")}
          />
          <p>{errors.telephone?.message}</p>
        </div>

        <Button type="submit">{submitButtonText}</Button>
      </form>
    </section>
  );
}

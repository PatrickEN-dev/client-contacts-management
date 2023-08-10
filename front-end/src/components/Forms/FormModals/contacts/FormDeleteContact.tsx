import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { useContext } from "react";
import styles from "../styles.module.scss";

type FormUpdateContactProps = {
  id: number;
};

export default function FormDeleteContactModal({ id }: FormUpdateContactProps) {
  const { deleteContactRequest, closeModal } = useContext(UserContactsContext);

  return (
    <section className={styles.modalContainer}>
      <div>
        <h2>Deletar contato</h2>
        <button className={styles.buttonClose} onClick={closeModal}>
          X
        </button>
      </div>
      <Button type="button" onClick={() => deleteContactRequest(id)}>
        Deletar
      </Button>
    </section>
  );
}

import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { useContext } from "react";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import styles from "../styles.module.scss";

type FormDeleteUserModalProps = { id: number };

export default function FormDeleteUserModal({ id }: FormDeleteUserModalProps) {
  const { closeModal } = useContext(UserContactsContext);
  const { deleteUserRequest } = useContext(USerCrudContext);

  return (
    <section className={styles.modalContainer}>
      <div>
        <h2>Deletar contato</h2>
        <button className={styles.buttonClose} onClick={closeModal}>
          X
        </button>
      </div>
      <Button type="button" onClick={() => deleteUserRequest(id)}>
        Deletar
      </Button>
    </section>
  );
}

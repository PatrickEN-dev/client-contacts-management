import styles from "./styles.module.scss";
import { IContact } from "@/contexts/contact/interfaces";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { ModalDeleteContact, ModalUpdateContact } from "../Modal";

interface ICardProps {
  user: IContact;
}

export default function Card({ user }: ICardProps) {
  const handleEditClick = () => {
    ModalUpdateContact();
  };

  const handleDeleteClick = () => {
    ModalDeleteContact();
  };

  return (
    <>
      <li className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <div className={styles.icons}>
            <FaPencilAlt
              onClick={handleEditClick}
              className={styles.editIcon}
            />
            <FaTrash
              onClick={handleDeleteClick}
              className={styles.deleteIcon}
            />
          </div>
        </div>
        <p>{user.email}</p>
      </li>
    </>
  );
}

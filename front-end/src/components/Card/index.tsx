"use client";

import styles from "./styles.module.scss";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { ModalDeleteContact, ModalUpdateContact } from "../Modal";
import { ContactData } from "@/@types/contacts.types";

interface ICardProps {
  user: ContactData;
}

export default function Card({ user }: ICardProps) {
  console.log("USER ID NO CARD", user.id);
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

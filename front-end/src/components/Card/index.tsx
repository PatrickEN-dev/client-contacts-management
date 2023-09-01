"use client";

import styles from "./styles.module.scss";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import { ContactData } from "@/@types/contacts.types";
import { useContext } from "react";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";

interface ICardProps {
  contact: ContactData;
}

export default function Card({ contact }: ICardProps) {
  const { setShowModal, setContactInfo } = useContext(UserContactsContext);

  const handleUpdateModalOpen = (contact: ContactData) => {
    setContactInfo(contact);
    setShowModal("updateContact");
  };

  const handleDeleteModalOpen = (contact: ContactData) => {
    setShowModal("deleteContact");
    setContactInfo(contact);
  };

  return (
    <>
      <li className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3>
            {contact.first_name} {contact.last_name}
          </h3>
          <div className={styles.icons}>
            <FaPencilAlt
              onClick={() => handleUpdateModalOpen(contact)}
              className={styles.editIcon}
            />
            <FaTrash
              onClick={() => handleDeleteModalOpen(contact)}
              className={styles.deleteIcon}
            />
          </div>
        </div>
        <p>{contact.email}</p>
      </li>
    </>
  );
}

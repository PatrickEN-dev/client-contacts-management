"use client";

import { createContext, useState } from "react";
import { IProviderChildrenProps } from "../users/interfaces";
import { API } from "@/services/api";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { ContactData } from "@/@types/users.types";
import { IContactContext } from "./interfaces";
import { ContactDataRequest } from "@/@types/contacts.types";

export const UserContactsContext = createContext<IContactContext>(
  {} as IContactContext
);

export const UsercontactsProvider = ({ children }: IProviderChildrenProps) => {
  const [showModal, setShowModal] = useState("");
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactDataRequest>({
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
  });
  const [page, setPage] = useState(0);
  const cookies = parseCookies();

  if (cookies["ccm.token"]) {
    API.defaults.headers.common.authorization = `Bearer ${cookies["ccm.token"]}`;
  }

  const closeModal = () => {
    setShowModal("");
  };

  const createContactRequest = (formData: ContactData) => {
    const cookies = parseCookies();
    const userId = cookies["ccm.token"];

    if (!userId) {
      console.error("ID do usuário não encontrado nos cookies.");
      return;
    }

    formData.id = Number(userId);

    API.post<ContactData>(`/contacts`, formData)
      .then((res) => {
        toast.success("Contato criado com sucesso!");
        const createdContact = res.data;
        setContacts([...contacts, createdContact]);
        closeModal();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Não foi possível criar seu contato");
      });
  };

  const updateContactRequest = (data: ContactData, id: number) => {
    API.patch(`/contacts/${id}`, data)
      .then(() => {
        toast.success("Seu contato foi atualizado com sucesso!");
        const updatedContact: ContactData[] = contacts.map((contact) =>
          Number(contact.id) === id ? { ...contact, ...data } : contact
        );
        setContacts(updatedContact);
        closeModal();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Não foi possível atualizar o seu contato");
      });
  };

  const deleteContactRequest = (id: number) => {
    API.delete(`/contacts/${id}`)
      .then(() => {
        toast.success("Contato deletado com sucesso!");
        const deletedContact = contacts.filter(
          (contact) => Number(contact.id) !== id
        );
        setContacts(deletedContact);
        closeModal();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Não foi possível deletar seu contato");
      });
  };

  return (
    <UserContactsContext.Provider
      value={{
        contacts,
        setContacts,
        showModal,
        setShowModal,
        closeModal,
        contactInfo,
        setContactInfo,
        createContactRequest,
        updateContactRequest,
        deleteContactRequest,
      }}
    >
      {children}
    </UserContactsContext.Provider>
  );
};

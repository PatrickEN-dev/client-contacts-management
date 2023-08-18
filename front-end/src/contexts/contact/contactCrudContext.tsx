"use client";

import { createContext, useState } from "react";
import { IProviderChildrenProps } from "../users/interfaces";
import { API } from "@/services/api";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { ContactData } from "@/@types/users.types";
import { IContactContext } from "./interfaces";
import { ContactDataRequest, ContactUpdateData } from "@/@types/contacts.types";

export const UserContactsContext = createContext<IContactContext>(
  {} as IContactContext
);

export const UsercontactsProvider = ({ children }: IProviderChildrenProps) => {
  const [showModal, setShowModal] = useState("");
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactData>({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
  });
  const cookies = parseCookies();

  if (cookies["ccm.token"]) {
    API.defaults.headers.common.authorization = `Bearer ${cookies["ccm.token"]}`;
  }

  const closeModal = () => setShowModal("");

  const getAllContactsRequest = () => {
    API.get(`/contacts`)
      .then((res) => {
        const contactData = res.data;
        setContacts(contactData);
        localStorage.setItem("contacts", JSON.stringify(contactData));
      })
      .catch((error) => {
        console.error(error);
        toast.error("Não foi possível renderizar seus contatos");
      });
  };

  const createContactRequest = async (formData: ContactDataRequest) => {
    API.post<ContactData>(`/contacts`, formData, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        toast.success("Contato criado com sucesso!");
        closeModal();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Não foi possível criar seu contato");
      });
  };

  const updateContactRequest = (data: ContactUpdateData, id: number) => {
    API.patch(`/contacts/${id}`, data)
      .then(() => {
        toast.success("Seu contato foi atualizado com sucesso!");
        const updatedContact: ContactData[] = contacts.map((contact) =>
          Number(contact.id) === id ? { ...contact, ...data } : contact
        );
        setContacts(updatedContact);
        localStorage.setItem("contacts", JSON.stringify(updatedContact));
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
        localStorage.setItem("contacts", JSON.stringify(deletedContact));
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
        getAllContactsRequest,
        createContactRequest,
        updateContactRequest,
        deleteContactRequest,
      }}
    >
      {children}
    </UserContactsContext.Provider>
  );
};

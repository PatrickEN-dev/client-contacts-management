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

  const getAllContactsRequest = () => {
    API.get(`/contacts`)
      .then((res) => {
        const contactData = res.data;
        setContacts(contactData);
        localStorage.setItem("contacts", JSON.stringify(contactData));
        closeModal();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Não foi possível deletar seu contato");
      });
  };

  const createContactRequest = async (formData: ContactDataRequest) => {
    console.log("FORMDATA", formData);
    API.post<ContactData>(`/contacts`, formData, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log("RESPONSE CREATE CONTACT", res);
        getAllContactsRequest();
      })
      .then(() => {
        toast.success("Contato criado com sucesso!");
        console.log("CONTACTS", contacts);
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

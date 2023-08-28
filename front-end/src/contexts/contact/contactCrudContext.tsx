"use client";

import { createContext, useState } from "react";
import { IProviderChildrenProps } from "../users/interfaces";
import { API } from "@/services/api";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { ContactData } from "@/@types/users.types";
import { IContactContext } from "./interfaces";
import { ContactDataRequest, ContactUpdateData } from "@/@types/contacts.types";
import { useRequest } from "@/hooks/useRequest";

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

  const request = useRequest();

  const getAllContactsRequest = async () => {
    await request({
      tryFn: async () => {
        const res = await API.get(`/contacts`);
        const contactData = res.data;
        setContacts(contactData);
        localStorage.setItem("contacts", JSON.stringify(contactData));
      },
      onErrorFn: () => toast.error("Não foi possível renderizar seus contatos"),
    });
  };

  const createContactRequest = async (formData: ContactDataRequest) => {
    await request({
      tryFn: async () => {
        await API.post<ContactData>(`/contacts`, formData, {
          headers: {
            Accept: "application/json",
          },
        });
        toast.success("Contato criado com sucesso!");
        closeModal();
      },
      onErrorFn: () => toast.error("Não foi possível criar seu contato"),
    });
  };

  const updateContactRequest = async (data: ContactUpdateData, id: number) => {
    await request({
      tryFn: async () => {
        await API.patch(`/contacts/${id}`, data);
        toast.success("Seu contato foi atualizado com sucesso!");
        const updatedContact: ContactData[] = contacts.map((contact) =>
          Number(contact.id) === id ? { ...contact, ...data } : contact
        );
        setContacts(updatedContact);
        localStorage.setItem("contacts", JSON.stringify(updatedContact));
        closeModal();
      },
      onErrorFn: () => toast.error("Não foi possível atualizar o seu contato"),
    });
  };

  const deleteContactRequest = async (id: number) => {
    await request({
      tryFn: async () => {
        await API.delete(`/contacts/${id}`);
        toast.success("Contato deletado com sucesso!");
        const deletedContact = contacts.filter(
          (contact) => Number(contact.id) !== id
        );
        setContacts(deletedContact);
        localStorage.setItem("contacts", JSON.stringify(deletedContact));
        closeModal();
      },
      onErrorFn: () => toast.error("Não foi possível deletar seu contato"),
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

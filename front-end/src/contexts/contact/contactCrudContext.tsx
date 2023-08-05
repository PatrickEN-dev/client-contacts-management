"use client";

import { createContext, useEffect, useState } from "react";
import { IContact, IContactContext } from "./interfaces";
import { IProviderChildrenProps, iAxiosError } from "../users/interfaces";
import { API } from "@/services/api";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";

export const UserContactsContext = createContext<IContactContext>(
  {} as IContactContext
);

export const UsercontactsProvider = ({ children }: IProviderChildrenProps) => {
  const [showModal, setShowModal] = useState("");
  const [contacts, setContacts] = useState<IContact[]>([]);

  const token = localStorage.getItem("@TOKEN") || "";

  const closeModal = () => {
    setShowModal("");
  };

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await API.get<IContact[]>("/contacts");

        const contacts: IContact[] = response.data;
        setContacts(contacts);
      } catch (error) {
        console.error(error);
        throw new Error("Contatos não encontrados");
      }
    }
    getContacts();
  }, []);

  const createContactRequest = async (
    data: IContact
  ): Promise<IContact | iAxiosError | void> => {
    try {
      const response: AxiosResponse<IContact> = await API.post(
        "contacts",
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Contato criado com sucesso!");
      const createdContact = response.data;
      setContacts([...contacts, createdContact]);

      closeModal();

      return response.data;
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possível realizar o cadastro");
    }
  };

  const updateContactRequest = async (data: IContact, id: number) => {
    try {
      await API.put(`contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Seu contato foi atualizado com sucesso!");

      const updatedContact: IContact[] = contacts.map((contact) =>
        contact.id === id ? { ...contact, ...data } : contact
      );
      setContacts(updatedContact);
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error("Não foi póssível atualizar o seu contato");
    }
  };

  const deleteContactRequest = async (id: number) => {
    try {
      await API.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato deletado com sucesso!");
      const deletedContact = contacts.filter((contact) => contact.id !== id);

      setContacts(deletedContact);
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error("Não foi póssível deletar seu contato");
    }
  };

  return (
    <UserContactsContext.Provider
      value={{
        contacts,
        setContacts,
        showModal,
        setShowModal,
        createContactRequest,
        updateContactRequest,
        deleteContactRequest,
        closeModal,
      }}
    >
      {children}
    </UserContactsContext.Provider>
  );
};

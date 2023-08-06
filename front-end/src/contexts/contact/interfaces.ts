import { ContactData, ContactDataRequest } from "@/@types/contacts.types";

export type IContact = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
};

export interface IContactContext {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;

  contacts: ContactData[];
  setContacts: React.Dispatch<React.SetStateAction<ContactData[]>>;

  contactInfo: ContactDataRequest;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactDataRequest>>;

  createContactRequest: () => void;
  updateContactRequest: (data: ContactData, id: number) => void;
  deleteContactRequest: (id: number) => void;
}

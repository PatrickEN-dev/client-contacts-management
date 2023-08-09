import {
  ContactData,
  ContactDataRequest,
  ContactUpdateData,
} from "@/@types/contacts.types";

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

  contactInfo: ContactData;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactData>>;

  createContactRequest: (formData: ContactDataRequest) => void;
  updateContactRequest: (data: ContactUpdateData, id: number) => void;
  deleteContactRequest: (id: number) => void;
}

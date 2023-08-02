import { iAxiosError } from "../users/interfaces";

export type IContact = {
  id: number;
  name: string;
  email: string;
  telehone: string;
  error?: string | undefined;
  axiosError: iAxiosError;
};

export interface IContactContext {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  closeModal: () => void;
  createContactRequest: (
    data: IContact
  ) => Promise<IContact | iAxiosError | void>;
  updateContactRequest: (data: IContact, id: number) => Promise<void>;
  deleteContactRequest: (id: number) => Promise<void>;
}

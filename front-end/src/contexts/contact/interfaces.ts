import { SetStateAction } from "react";
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
  contacts: IContact | null;
  setContacts: React.Dispatch<SetStateAction<IContact | null>>;
}

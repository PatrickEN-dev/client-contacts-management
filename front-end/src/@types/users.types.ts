import { z } from "zod";
import { contactsSchema } from "@/schemas/contacts.schema";
import {
  loginSchema,
  userSchema,
  userUpdateSchema,
} from "@/schemas/users.schema";
import { IContact } from "@/contexts/contact/interfaces";

export type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  password: string;
  contact: IContact[];
};

export type IUserInfos = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  password: string;
};

export interface IUserDatails {
  params: { id: number };
}

export type UserData = z.infer<typeof userSchema>;
export type UserUpdateData = z.infer<typeof userUpdateSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type ContactData = z.infer<typeof contactsSchema>;

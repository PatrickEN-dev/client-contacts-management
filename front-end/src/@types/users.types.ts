import { z } from "zod";
import { contactsSchema } from "@/schemas/contacts.schema";
import { loginSchema, userSchema } from "@/schemas/users.schema";
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

export interface IUserDatails {
  params: { id: number };
}

export type Userdata = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type ContactData = z.infer<typeof contactsSchema>;

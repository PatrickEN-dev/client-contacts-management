import {
  contactSchemaRequest,
  contactsSchema,
} from "@/schemas/contacts.schema";
import { z } from "zod";

export type ContactData = z.infer<typeof contactsSchema>;
export type ContactDataRequest = z.infer<typeof contactSchemaRequest>;

import { z } from "zod";

export const contactsSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email("Deve ser um email válido"),
  telephone: z.string(),
});

export const contactSchemaRequest = contactsSchema.omit({ id: true });

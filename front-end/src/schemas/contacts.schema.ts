import { z } from "zod";

export const contactsSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
});

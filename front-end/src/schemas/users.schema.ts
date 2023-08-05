import { z } from "zod";

export const userSchema = z.object({
  first_name: z.string().nonempty("Campo obrigatório"),
  last_name: z.string().nonempty("Campo obrigatório"),
  email: z
    .string()
    .email("Deve ser um email válido")
    .nonempty("Campo obrigatório"),
  password: z.string().min(8).nonempty("Campo obrigatório"),
});

export const loginSchema = z.object({
  email: z.string().email("Deve ser um e-mail").nonempty("Campo obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});

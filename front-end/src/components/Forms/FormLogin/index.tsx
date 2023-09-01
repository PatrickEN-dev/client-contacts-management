import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { LoginData } from "@/@types/users.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/users.schema";
import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { AuthContext } from "@/contexts/auth";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(loginSchema) });

  const { loginUser } = useContext(AuthContext);

  const submit = (formData: LoginData) => loginUser(formData);

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div>
        <input
          type="mail"
          placeholder="Digite seu E-mail"
          {...register("email")}
        />
        <p>{errors && errors.email?.message}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors && errors.password?.message}</p>
      </div>

      <div>
        <Button type="submit">Entrar</Button>
      </div>

      <Link href={"/register"}>Não é cadastrado ainda? Clique aqui</Link>
    </form>
  );
}

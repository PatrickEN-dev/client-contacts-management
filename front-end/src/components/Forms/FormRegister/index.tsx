import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/users.schema";
import { AuthContext } from "@/contexts/users/authContext";
import { Userdata } from "@/@types/users.types";
import Link from "next/link";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Userdata>({ resolver: zodResolver(userSchema) });

  const { registerUser } = useContext(AuthContext);

  const submit = (formData: Userdata) => {
    console.log(formData);
    registerUser(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("first_name")}
        />
        <p>{errors && errors.first_name?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Digite seu sobrenome"
          {...register("last_name")}
        />
        <p>{errors && errors.last_name?.message}</p>
      </div>

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
          placeholder="Sua senha"
          {...register("password")}
        />
        <p>{errors && errors.password?.message}</p>
      </div>

      <div>
        <Button type="submit">Cadastrar</Button>
      </div>

      <Link href={"/auth/login"}>Ir para o login</Link>
    </form>
  );
}

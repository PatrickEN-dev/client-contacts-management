import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { IUser } from "@/@types/users.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/users.schema";
import { UserRequestsContext } from "@/contexts/users/userRequestContext";
import { useContext } from "react";
import Input from "@/components/Input";
import styles from "./styles.module.scss";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>({ resolver: zodResolver(userSchema) });

  const { loginUserRequest } = useContext(UserRequestsContext);

  const submit = (formData: IUser) => {
    loginUserRequest(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          id={"email"}
          label="Email"
          type="mail"
          placeholder="Digite seu Email"
          {...register("email")}
        />
        <p>{errors && errors.email?.message}</p>
      </div>

      <div>
        <Input
          label="Senha"
          id="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors && errors.password?.message}</p>
      </div>

      <div>
        <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
}

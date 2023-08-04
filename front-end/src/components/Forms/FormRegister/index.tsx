import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserRequestsContext } from "@/contexts/users/userRequestContext";
import { IUserRegister } from "@/contexts/users/interfaces";
import Input from "@/components/Input";
import styles from "./styles.module.scss";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserRegister>();
  const { createUserRequest } = useContext(UserRequestsContext);

  const submit = (formData: IUserRegister) => {
    createUserRequest(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          label={"Primeiro nome"}
          id="first_name"
          type="text"
          placeholder="Digite seu nome"
          {...register("first_name")}
        />
        <p>{errors && errors.first_name?.message}</p>
      </div>

      <div>
        <Input
          label="Sobrenome"
          id="last_name"
          type="text"
          placeholder="Digite seu sobrenome"
          {...register("last_name")}
        />
        <p>{errors && errors.last_name?.message}</p>
      </div>

      <div>
        <Input
          label="Email"
          id="email"
          type="mail"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p>{errors && errors.email?.message}</p>
      </div>

      <div>
        <Input
          label="Senha"
          id="password"
          type="mail"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors && errors.password?.message}</p>
      </div>

      <div>
        <Button type="submit">Cadastrar</Button>
      </div>
    </form>
  );
}

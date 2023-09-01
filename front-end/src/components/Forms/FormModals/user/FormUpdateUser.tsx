import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import { UserUpdateData } from "@/@types/users.types";
import { userUpdateSchema } from "@/schemas/users.schema";
import styles from "../styles.module.scss";
import { AuthContext } from "@/contexts/auth";

export default function FormUpdateUserModal() {
  const { closeModal } = useContext(UserContactsContext);
  const { updateUserRequest } = useContext(USerCrudContext);
  const { user } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserUpdateData>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: user,
  });

  const submit = (formData: UserUpdateData) => {
    updateUserRequest(formData, user.id);
  };

  return (
    <section className={styles.modalContainer}>
      <div>
        <h2>Editar perfil</h2>

        <button className={styles.buttonClose} onClick={closeModal}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            type="text"
            placeholder="ex: Ana"
            {...register("first_name")}
          />
          <p>{errors.first_name?.message}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="ex: Julia"
            {...register("last_name")}
          />
          <p>{errors.last_name?.message}</p>
        </div>

        <div>
          <input
            type="mail"
            placeholder="ex: julia@mail.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="tel"
            placeholder="ex: 14991335453"
            {...register("telephone")}
          />
          <p>{errors.telephone?.message}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="ex: senhasupersecreta"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <Button type="submit">Editar</Button>
      </form>
    </section>
  );
}

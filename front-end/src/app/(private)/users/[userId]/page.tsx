import { IUser, IUserDatails } from "@/@types/users.types";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import { useContext } from "react";

export default async function UserDatailsPage({ params }: IUserDatails) {
  const { getUserById } = useContext(USerCrudContext);
  const userDataById: IUser = await getUserById(params.id);

  return (
    <>
      <main>
        <section>
          <h2>
            Usuário: {userDataById.first_name} {userDataById.last_name}
          </h2>
          <h3>Email: {userDataById.email}</h3>
        </section>
      </main>
    </>
  );
}

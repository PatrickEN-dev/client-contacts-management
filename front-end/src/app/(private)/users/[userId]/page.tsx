import { IUser, IUserDatails } from "@/@types/users.types";
import OtherUsers from "../../contacts/page";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import { useContext } from "react";


export default async function UserDatailsPage({
  params,
}: {
  params: IUserDatails;
}) {
  const {getUserById} = useContext(USerCrudContext)
  const userDataById: IUser = await getUserById(params.userId)

  return (
    <>
      <main>
        <div>
          <h2>
            Usuário: {userDataById.first_name} {userDataById.last_name}
          </h2>
          <h3>Email: {userDataById.email}</h3>
          <h3> Telefone: {userDataById.telephone}</h3>
        </div>

        <hr />

        <h3>Seus contatos</h3>

        <OtherUsers currentUserId={params.userId} />
      </main>
    </>
  );
}
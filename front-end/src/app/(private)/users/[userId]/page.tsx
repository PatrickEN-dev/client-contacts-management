import { getUsersById } from "../services/get-user-by-id";
import OtherUsers from "../components/other-users";

export interface IUserDatails {
  userId: string;
}

export default async function UserDatailsPage({
  params,
}: {
  params: IUserDatails;
}) {
  const userDataById = await getUsersById(params.userId);

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

        <h3>Outros usuários</h3>

        <OtherUsers currentUserId={params.userId} />
      </main>
    </>
  );
}
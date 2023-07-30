import Link from "next/link";
import { getUsers } from "./services/get-users";

export default async function userPage() {
  const usersData = await getUsers();

  return (
    <>
      <main>
        <h1>Página do usuário</h1>

        <h3>Usuários</h3>

        <ul>
          {usersData.map((user: any) => (
            <li key={user.id}>
              <img src={user.avatar} alt="foto-de-perfil" />
              <Link href={`/users/${user.id}`}>
                {user.first_name} {user.last_name}({user.email})
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
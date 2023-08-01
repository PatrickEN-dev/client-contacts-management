import Link from "next/link";
import { getUsers } from "../../../services/users/gets/get-users";

export default async function userPage() {
  const usersData = await getUsers();

  return (
    <>
      <main>
        <h1>Página Principal usuário logado</h1>
        <h3>Contatos</h3>
        <ul>
          {usersData.map((user: any) => (
            <li key={user.id}>
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
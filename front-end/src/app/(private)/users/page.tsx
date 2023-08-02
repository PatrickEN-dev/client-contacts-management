import { IUser } from "@/@types/users.types";
import { USerCrudContext } from "@/contexts/users/userCrudContext";
import Link from "next/link";
import { useContext } from "react";

export default async function userPage() {
  const {getUsers} = useContext(USerCrudContext)
  const usersData: IUser[] = await getUsers()

  return (
    <>
      <main>
        <h1>Página Principal usuário logado</h1>
        <h3>Contatos</h3>
        <ul>
          {usersData.map((user: IUser) => (
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

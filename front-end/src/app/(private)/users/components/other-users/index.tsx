"use client";

//page de user
import { useEffect, useState } from "react";
import { getUsers } from "../../services/get-users";
import Link from "next/link";

interface IOtherUsers {
  currentUserId: string;
}

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string
}

export default function OtherUsers({ currentUserId }: IOtherUsers) {
  const [otherUsers, setOtherUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      const others = users.filter(
        (user: IUser) => user.id !== parseInt(currentUserId)
      );
      setOtherUsers(others);
    };

    fetchUsers();
  }, [currentUserId]);

  if (otherUsers.length === 0) {
    return <p>carregando...</p>;
  }

  return (
    <ul>
      {otherUsers.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.first_name} {user.last_name} ({user.email} {user.telephone})
          </Link>
        </li>
      ))}
    </ul>
  );
}
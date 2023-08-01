"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IUser } from "@/@types/users.types";
import { getUsers } from "@/services/users/gets/get-users";

interface IOtherUsers {
  currentUserId: string;
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

  return (
    <ul>
      {otherUsers.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.first_name} {user.last_name} ({user.email})
          </Link>
        </li>
      ))}
    </ul>
  );
}
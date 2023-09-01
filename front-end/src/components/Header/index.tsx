"use client";

import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/auth";

export default function Header() {
  const { user } = useContext(AuthContext);

  const { back } = useRouter();

  return (
    <header>
      <nav>
        <li>
          <button onClick={() => back()}>Voltar</button>
        </li>
        <li>
          <Link href={`/contacts/${user.id}`}>Perfil</Link>
        </li>
      </nav>
    </header>
  );
}

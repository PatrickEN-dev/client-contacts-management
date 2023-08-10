import { AuthContext } from "@/contexts/users/authContext";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={`/contacts/${user.id}`}>Perfil</Link>
        </li>
      </nav>
    </header>
  );
}

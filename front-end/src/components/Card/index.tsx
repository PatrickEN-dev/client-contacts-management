import styles from "./styles.module.scss";
import { IContact } from "@/contexts/contact/interfaces";
import Link from "next/link";

interface ICardProps {
  user: IContact;
}

export default function Card({ user }: ICardProps) {
  return (
    <>
      <li className={styles.cardContent}>
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </li>
    </>
  );
}

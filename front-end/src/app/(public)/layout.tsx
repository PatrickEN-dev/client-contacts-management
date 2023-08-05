import Link from "next/link";
import styles from "./styles.module.scss";
import Toast from "@/components/Toast";

export default function RootLayout({
  children,
  homePage = false,
}: {
  children: React.ReactNode;
  homePage?: boolean;
}) {
  return (
    <html lang="pt-BR">
      <body className={styles.layout}>
        <Toast message="" />
        <header>
          <div className={styles.logo}>Client Contact Management</div>
          {!homePage && (
            <nav>
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <Link href={"/auth/login"}>Entrar</Link>
                </li>

                <li>
                  <Link href={"/auth/register"}>Cadastro</Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}

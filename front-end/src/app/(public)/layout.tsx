import Link from "next/link";
import styles from "./styles.module.scss";
import ToastProvider from "@/contexts/Toast/toastifyContext";
import { AuthProvider } from "@/contexts/users/authContext";

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
        <AuthProvider>
          <ToastProvider>
            <header>
              <div className={styles.logo}>Client Contact Management</div>
              {!homePage && (
                <nav>
                  <ul>
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>

                    <li>
                      <Link href={"/login"}>Entrar</Link>
                    </li>

                    <li>
                      <Link href={"/register"}>Cadastro</Link>
                    </li>
                  </ul>
                </nav>
              )}
            </header>
            {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

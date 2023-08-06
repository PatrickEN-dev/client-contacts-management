import ToastProvider from "@/contexts/Toast/toastifyContext";
import { UsercontactsProvider } from "@/contexts/contact/contactCrudContext";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={styles.layout}>
        <UsercontactsProvider>
          <ToastProvider>
            <header>
              <nav>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={`/contacts`}>Perfil</Link>
                </li>
              </nav>
            </header>
            {children}
          </ToastProvider>
        </UsercontactsProvider>
      </body>
    </html>
  );
}

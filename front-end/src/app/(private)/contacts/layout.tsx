"use client";

import { UsercrudProvider } from "@/contexts/users/userCrudContext";
import { UsercontactsProvider } from "@/contexts/contact/contactCrudContext";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import ToastProvider from "@/components/Toast";
import { AuthProvider } from "@/contexts/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={styles.layout}>
        <AuthProvider>
          <UsercrudProvider>
            <UsercontactsProvider>
              <ToastProvider>
                <Header />
                {children}
              </ToastProvider>
            </UsercontactsProvider>
          </UsercrudProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

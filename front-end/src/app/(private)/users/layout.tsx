import ToastProvider from "@/contexts/Toast/toastifyContext";
import { UsercontactsProvider } from "@/contexts/contact/contactCrudContext";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastProvider>
          <UsercontactsProvider>
            <header>
              <nav>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
              </nav>
            </header>

            <h1>Layout da página users</h1>
            {children}
            <footer>
              <p>Contact management</p>
            </footer>
          </UsercontactsProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

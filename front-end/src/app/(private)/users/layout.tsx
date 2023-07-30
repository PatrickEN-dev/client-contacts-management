import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
          </nav>
        </header>

        <h1>Layout da página users</h1>

        <hr />

        {children}

        <hr />

        <footer>
          <p>Contact management</p>
        </footer>
      </body>
    </html>
  );
}
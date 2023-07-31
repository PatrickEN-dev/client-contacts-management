import Link from "next/link";

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
        </header>

        <h1>Layout de rotas autenticadas</h1>

        <hr />

        {children}

        <hr />

        <footer>
          <p>Aprendendo o Next.js 13</p>
        </footer>
      </body>
    </html>
  );
}
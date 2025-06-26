import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AdotePet - Adoção de Animais",
  description: "Encontre seu novo melhor amigo através da adoção responsável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
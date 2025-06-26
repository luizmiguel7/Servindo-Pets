import "./globals.css";


export const metadata: { title: string; description: string } = {
  title: "AdotePet - Adoção de Animais",
  description: "Encontre seu novo melhor amigo através da adoção responsável",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}

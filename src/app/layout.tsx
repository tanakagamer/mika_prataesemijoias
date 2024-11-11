// src/app/layout.tsx

import "./globals.css";
import { Montserrat } from "next/font/google";

// Importando a fonte Montserrat Thin
const montserrat = Montserrat({ subsets: ["latin"], weight: "100" }); // '100' é o peso para Montserrat Thin

export const metadata = {
  title: "Catálogo Online - Mika Prata e Semijoias",
  description: "Catálogo de joias da marca Mika Prata e Semijoias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

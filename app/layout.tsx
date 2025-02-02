import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { ThemeProvider } from '@/context/theme-context'

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Pra Ver Ouvir - Por um mundo mais acessível",
  description:
    "Empresa especializada em audiodescrição e acessibilidade em Maceió/AL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={libreBaskerville.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

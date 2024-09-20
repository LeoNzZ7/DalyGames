import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "DalyGames - Descubra Jogos incríveis para se divertir",
  description: "Descubra Jogos incríveis para se divertir",
  keywords: ["games", "jogos", "stem"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

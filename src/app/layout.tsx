import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/sidebar";
import Board from "@/components/board";

export const metadata: Metadata = {
  title: "Tableaux | Trello",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body>
        <Sidebar />
        <main className="relative flex w-full h-[calc(100vh-3rem)] bg-[#8f3f64]">
          <Board />
          {children}
        </main>
      </body>
    </html>
  );
}

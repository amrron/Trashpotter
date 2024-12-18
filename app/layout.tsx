import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Sidebar from "./components/sections/Sidebar";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trashpotter",
  description: "Pilah sampah dengan mudah",
};

export default function RootLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <main className="m-auto flex min-h-dvh max-w-md flex-col items-start justify-start gap-2 shadow-md">
          <header className="relative flex h-16 w-full items-center justify-between bg-white px-4">
            <Sidebar />
            <h1 className="grow text-center font-poppins font-semibold">
              {title}
            </h1>
          </header>
          <section className="flex w-full flex-col p-4">{children}</section>
        </main>
      </body>
    </html>
  );
}

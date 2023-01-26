import "./globals.css";
import { Inter } from "@next/font/google";
import classNames from "classnames/bind";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <head />
      <body className={"h-full"}>
        <main className="max-w-5xl mx-auto h-full w-full">{children}</main>
      </body>
    </html>
  );
}

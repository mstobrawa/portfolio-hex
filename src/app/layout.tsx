// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Michał | Frontend",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

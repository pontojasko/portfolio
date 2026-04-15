import type { Metadata } from "next";
import "./globals.css";
import { Source_Code_Pro } from "next/font/google";
import { cn } from "@/lib/utils";

const serif = Source_Code_Pro({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "jasko",
  description: "meu portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("h-full", "antialiased", serif.variable)}>
      <body className="min-h-full flex flex-col text">{children}</body>
    </html>
  );
}

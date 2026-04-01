import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MotoMarket — E-Commerce Proposal",
  description:
    "Next-Generation Motorcycle Gear E-Shop. Custom platform proposal by Gen2 Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.className} antialiased`}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelvin Nii Amu Okai | Full-Stack Developer",
  description:
    "Portfolio of Kelvin Nii Amu Okai — Full-Stack Developer at Klyvin, building AI-powered SaaS with Next.js, React, TypeScript, and Django.",
  keywords: [
    "Kelvin Nii Amu Okai",
    "Full-Stack Developer",
    "Klyvin",
    "Next.js",
    "React",
    "TypeScript",
    "Accra Ghana",
  ],
  authors: [{ name: "Kelvin Nii Amu Okai" }],
  openGraph: {
    title: "Kelvin Nii Amu Okai | Full-Stack Developer",
    description: "Building AI-powered SaaS platforms with Next.js, React, TypeScript, and Django.",
    type: "website",
    url: "https://klyvin.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

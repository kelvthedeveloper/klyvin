import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelvin | Full-Stack Software Engineer & Product Builder",
  description: "Explore the professional portfolio of Kelvin, a Full-Stack Developer specializing in SaaS platforms, AI-powered applications, and clean software architecture.",
  keywords: ["Full-Stack Engineer", "React Developer", "Next.js Portfolio", "Software Engineer Portfolio", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Kelvin" }],
  openGraph: {
    title: "Kelvin | Full-Stack Software Engineer",
    description: "Explore my projects, SaaS platforms, and software engineering insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin | Full-Stack Software Engineer",
    description: "Explore my projects, SaaS platforms, and software engineering insights.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen gradient-bg">
            <Navbar />
            <main className="flex-1 flex flex-col w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

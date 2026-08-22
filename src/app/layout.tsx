import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Shinde | Full Stack Developer & Designer",
  description:
    "Aman Shinde — Full Stack Developer and Computer Science Engineer. I build interfaces, backend systems and AI-powered applications.",
  keywords: [
    "Aman Shinde",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Python",
    "Computer Vision",
    "MERN",
    "Portfolio",
    "UI/UX",
  ],
  openGraph: {
    title: "Aman Shinde | Full Stack Developer",
    description:
      "Full Stack Developer — React, Node.js, Python, Computer Vision.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

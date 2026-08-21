import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

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

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Shinde | Full Stack Developer",
  description:
    "Portfolio of Aman Shinde, a Full Stack Developer and Computer Science Engineer specializing in React, Node.js, Python, MongoDB, and computer vision.",
  keywords: [
    "Aman Shinde",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Python",
    "Computer Vision",
    "MERN",
    "Portfolio",
  ],
  openGraph: {
    title: "Aman Shinde | Full Stack Developer",
    description:
      "Portfolio of Aman Shinde — Full Stack Developer & Computer Science Engineer.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} ${pressStart2P.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

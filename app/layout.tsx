import type { Metadata } from "next";
import { Geist, Geist_Mono, Londrina_Sketch, Lacquer } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import BrushHeart from "./components/BrushHeart";
import FooterWrapper from "./components/FooterWrapper";
import BackgroundMusic from "./components/BackgroundMusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const londrinaSketch = Londrina_Sketch({
  weight: "400",
  variable: "--font-londrina-sketch",
  subsets: ["latin"],
});

const lacquer = Lacquer({
  weight: "400",
  variable: "--font-lacquer",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thank God for Vals Day",
  description: "Valentine's Day 2026 digital val's day card to mama essien from essien family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${londrinaSketch.variable} ${lacquer.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="absolute top-6 left-6 z-50">
          <Link href="/">
            <BrushHeart className="w-20 h-20" />
          </Link>
        </div>
        <div className="flex-1">
          {children}
        </div>
        <FooterWrapper />
        <BackgroundMusic />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Londrina_Sketch, Lacquer } from "next/font/google";
import "./globals.css";

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
        <div className="flex-1">
          {children}
        </div>
        <footer className="p-4 text-center text-sm text-foreground/60">
          &copy; Vals Day 2026. All Rights Reserved. Made with ♥️ by{" "}
          <a
            href="https://idong-essien.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            idongCodes
          </a>
          .
        </footer>
      </body>
    </html>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import FooterNav from "./FooterNav";

export default function FooterWrapper({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className={`${isHome ? "mt-4" : "mt-16"} p-4 text-center text-sm text-foreground/60`}>
      <FooterNav />
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
  );
}

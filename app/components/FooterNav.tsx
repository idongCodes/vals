"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrushHeart from "./BrushHeart";

export default function FooterNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/card", label: "Card" },
    { href: "/messages", label: "Messages" },
  ];

  return (
    <nav className="mb-4 text-red-500 font-lacquer text-lg flex items-center justify-center gap-4">
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <div key={link.href} className="relative flex items-center">
            {index > 0 && <span className="mr-4 text-red-500">|</span>}
            <div className="relative">
              {isActive && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce">
                  <BrushHeart className="w-4 h-4" />
                </div>
              )}
              <Link
                href={link.href}
                className={`pb-1 border-b-2 border-transparent hover:border-red-500 transition-colors ${
                  isActive ? "font-bold border-red-500" : ""
                }`}
              >
                {link.label}
              </Link>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

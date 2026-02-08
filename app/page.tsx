import Link from "next/link";
import BrushHeart from "./components/BrushHeart";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-8 text-center font-sans">
      <div className="absolute top-6 left-6">
        <Link href="/">
          <BrushHeart className="w-20 h-20" />
        </Link>
      </div>
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-7xl font-bold text-red-500 -rotate-[8deg] font-sketch">
          Thank God for<br />Valentine's Day
        </h1>
        <p className="text-lg text-foreground/80">
          Mobile-first Next.js Application
        </p>
      </main>
    </div>
  );
}
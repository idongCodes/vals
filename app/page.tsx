import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-8 text-center font-sans">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-7xl font-bold text-red-500 -rotate-[8deg] font-sketch">
          Thank God for<br />Valentine's Day
        </h1>
        <p className="text-2xl text-foreground/80 max-w-md mx-auto mt-8 font-lacquer">
          as it is a special day we can use to remember the very special woman whom, through God, two generations of this family exists
        </p>
        <Link
          href="/card"
          className="mt-4 inline-block rounded-full bg-red-400 px-8 py-3 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-500 font-sketch"
        >
          open card
        </Link>
      </main>
    </div>
  );
}
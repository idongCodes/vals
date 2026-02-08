import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans pt-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/momma.JPG')" }}
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#fff1f2_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fff1f2] via-[#fff1f2]/50 to-transparent" />
      </div>

      <main className="flex flex-1 flex-col gap-4 items-center -mt-4 relative z-10 px-4 text-center">
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
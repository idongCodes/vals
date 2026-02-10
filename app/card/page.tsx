import Link from "next/link";

export default function CardPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
           <source src="/videos/grandchildren.mp4" type="video/mp4" />
           Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text contrast if needed later, but keeping it clean for now */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#fff1f2_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fff1f2] to-transparent" />
      </div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500 font-sketch">
          Happy Valentine&apos;s Day!
        </h1>
        <p className="text-2xl text-foreground/80 max-w-md mx-auto mt-8 font-lacquer">
          To the heart of our family, thank you for your endless love and sacrifices. Thank you for never giving up. Thank you for being you. You&apos;re the reason we&apos;re all here!
        </p>
        <p className="text-2xl text-foreground/80 max-w-md mx-auto mt-4 font-lacquer">
          With ♥️ from Dad, your sons, your daughters, daughter in-laws, and all your grand babies!
        </p>

        <Link
          href="/messages"
          className="mt-8 inline-block rounded-full bg-red-400 px-8 py-3 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-500 font-sketch"
        >
          Read Messages
        </Link>
      </main>
    </div>
  );
}

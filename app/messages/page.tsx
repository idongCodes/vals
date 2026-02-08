export default function MessagesPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#fff1f2_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fff1f2] to-transparent" />
      </div>

      <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500 font-sketch">
          Messages from<br />Loved Ones
        </h1>
         {/* Content */}
      </main>
    </div>
  );
}

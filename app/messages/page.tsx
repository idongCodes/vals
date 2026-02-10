import MessageCarousel from "../components/MessageCarousel";

interface Message {
  name: string;
  text: string;
  image?: string;
}

const messages: Message[] = [
  {
    name: "Gloria",
    text: "Happy Valentine's Day mommy, my first & forever Valentine! 💘 Love you!",
    image: "/images/gloria.jpg"
  },
  {
    name: "Clara",
    text: "Happy Valentine's Day to the woman with the biggest heart I know. I love you, mom",
    image: "/images/clara.jpg"
  },
  {
    name: "Charles, Fiona, Micah, Remi & Luca",
    text: "Happy Valentine's Gi Gi! We love you with all of our little (and big) hearts ♥️",
    image: "/images/charles.jpg"
  },
  {
    name: "Kingsley, Nadescka, Charlie & Theo",
    text: "Happy valentines day Mom/Grandma!",
    image: "/images/knct.jpg"
  },
  {
    name: "Idong",
    text: "Happy Valentine's Day Mom! All your sacrifices do not go unoticed! We thank God for you everyday. We love you always!",
    image: "/images/idong.jpg"
  },
  {
    name: "Husband",
    text: "Happy Valentine's day. I love you very much from the bottom of my heart ❤️",
    image: "/images/dad.jpg"
  },
];

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

      <main className="flex flex-col gap-8 items-center w-full max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500 font-sketch">
          Messages from<br />Loved Ones
        </h1>
        
        <MessageCarousel messages={messages} />
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  name: string;
  text: string;
  image?: string;
}

export default function MessageCarousel({ messages }: { messages: Message[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextMessage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full max-w-2xl flex flex-col items-center gap-4">
      <div className="relative w-full h-80 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevMessage}
          className="absolute -left-4 md:-left-12 z-10 p-2 text-red-500 hover:scale-110 transition-transform focus:outline-none"
          aria-label="Previous message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="w-full h-full relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full flex items-center justify-center p-2"
            >
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-red-100 w-full h-full flex flex-col justify-center items-center text-center relative">
                <div className="flex-1 flex items-center justify-center overflow-y-auto w-full custom-scrollbar">
                  <p className="text-2xl md:text-3xl text-foreground/80 font-lacquer leading-relaxed">
                    "{messages[currentIndex].text}"
                  </p>
                </div>
                <p className="text-2xl text-red-500 font-sketch mt-6 w-full text-right pr-4">
                  - {messages[currentIndex].name}
                </p>
                {/* Circular photo on bottom left */}
                {messages[currentIndex].image && (
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full overflow-hidden border-2 border-red-300 shadow-md">
                    <img 
                      src={messages[currentIndex].image} 
                      alt={`${messages[currentIndex].name}'s photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextMessage}
          className="absolute -right-4 md:-right-12 z-10 p-2 text-red-500 hover:scale-110 transition-transform focus:outline-none"
          aria-label="Next message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex gap-2 mt-4">
        {messages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-red-500 w-6" : "bg-red-200 hover:bg-red-300"
            }`}
            aria-label={`Go to message ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

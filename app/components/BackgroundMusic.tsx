"use client";

import { useState, useRef } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { motion } from "framer-motion";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    // Set volume to low (20%)
    event.target.setVolume(20);
    // Try to play automatically
    event.target.playVideo();
  };

  const onStateChange = (event: YouTubeEvent) => {
    // PlayerState.PLAYING is 1
    if (event.data === 1) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      playlist: "2LapBD802O0", // Required for loop to work
    },
  };

  return (
    <>
      <div className="hidden">
        <YouTube
          videoId="2LapBD802O0"
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </div>

      <motion.button
        onClick={togglePlay}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 ${
          isPlaying 
            ? "bg-red-500/80 text-white border-red-400" 
            : "bg-white/80 text-red-500 border-red-200"
        }`}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? (
          <div className="flex gap-1 items-end h-4">
             {/* Simple equalizer animation */}
             <motion.div 
               animate={{ height: ["20%", "100%", "20%"] }} 
               transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
               className="w-1 bg-current rounded-full"
             />
             <motion.div 
               animate={{ height: ["50%", "100%", "30%", "50%"] }} 
               transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
               className="w-1 bg-current rounded-full"
             />
             <motion.div 
               animate={{ height: ["30%", "80%", "20%", "40%"] }} 
               transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
               className="w-1 bg-current rounded-full"
             />
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
        )}
      </motion.button>
    </>
  );
}

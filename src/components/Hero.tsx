"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.defaultMuted = true;
      video.muted = true;
    }
  }, []);

  return (
    <section className="relative isolate flex min-h-[460px] flex-col items-center justify-between pt-28 text-center sm:min-h-[620px] sm:pt-32 md:min-h-[700px] md:pt-40">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="https://cdn.playadopt.me/websites/playadoptme/video/720p-Hero-Video-v4.webm"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-pink-200/40 via-indigo-900/75 to-slate-950/85" />

      <div className="relative z-10 mx-auto my-auto flex max-w-5xl flex-col items-center justify-center px-4 py-8 sm:px-6">
        <img
          src="/images/hero.png"
          alt="hero-image"
          className="mb-6 h-auto w-full max-w-[22rem] object-contain drop-shadow-2xl sm:max-w-2xl lg:max-w-3xl"
        />

        {/* Hero CTA Button Container */}
        <div className="mt-4 flex w-full items-center justify-center">
          <a
            href="https://www.roblox.com.mu/games/920587237/24H-Adopt-Me?privateServerLinkCode=62041869677502889309248447910791"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block cursor-pointer select-none"
          >
            {/* Outer White Outline Box (STATIONARY - Does not move) */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-2xl border-4 border-white/90 transition-all duration-200 ease-out group-hover:-inset-2.5 group-hover:rounded-2xl pointer-events-none" />

            {/* Front White Filled Play Button (ONLY THIS MOVES - Subtle Maju Mundur Animation) */}
            <motion.div
              animate={{
                x: [8, 12, 8],
                y: [-8, -12, -8],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                x: 0,
                y: 0,
                transition: { duration: 0.15, ease: [0.34, 1.75, 0.64, 1] }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex items-center justify-center bg-white w-54 sm:w-64 h-24 sm:h-32 rounded-xl sm:rounded-xl shadow-2xl border border-slate-100"
            >
              <svg className="w-18 h-18 sm:w-24 sm:h-24 fill-[#e6007e] drop-shadow-md ml-2" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </a>
        </div>
      </div>

      {/* Hero Bottom Illustration Overlapping into LatestNews (Full Screen Width) */}
      <div className="relative top-[40px] sm:-bottom-28 lg:-bottom-36 left-0 right-0 z-30 flex w-full justify-center pointer-events-none">
        <img
          src="/assets/hero.png"
          alt="Adopt Me Characters Overlap"
          className="h-auto w-full max-w-none object-cover brightness-0 sm:object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        />
      </div>
    </section>
  );
}
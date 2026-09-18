"use client";
import { useEffect, useRef } from "react";
import { Play } from "@deemlol/next-icons";

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
    <section className="relative isolate flex min-h-[560px] flex-col items-center justify-between pt-28 text-center sm:min-h-[620px] sm:pt-32 md:min-h-[700px] md:pt-40">
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

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="https://www.roblox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-base font-extrabold text-purple-950 shadow-lg transition hover:scale-105 hover:bg-yellow-300 sm:px-8 sm:py-3.5 sm:text-lg"
          >
            <Play size={28} />
            PLAY NOW
          </a>
        </div>
      </div>
    </section>
  );
}
"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FooterCTA() {
  const [isOpen, setIsOpen] = useState(false)

  // Link tetap sesuai bawaan kode
  const playUrl =
    "https://www.roblox.com.mu/games/920587237/24H-Adopt-Me?privateServerLinkCode=62041869677502889309248447910791"

  return (
    <section className="relative z-20 w-full bg-[#18191c] text-white pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-0 flex flex-col items-center">
      {/* Call to Action Section */}
      <div className="text-center mb-6 px-6">
        <h3 className="text-pink-500 font-bold tracking-widest text-sm md:text-base uppercase mb-1">
          JOIN MILLIONS OF OTHERS PLAYING ADOPT ME
        </h3>
        <h1 className="text-4xl md:text-6xl font-black text-pink-500 tracking-tight uppercase mb-8">
          FOR FREE!
        </h1>

        {/* Play Button */}
        <div className="flex justify-center my-2">
          <button
            onClick={() => setIsOpen(true)}
            className="relative group inline-block cursor-pointer select-none bg-transparent border-none outline-none"
          >
            {/* Outer Outline Box */}
            <div className="absolute inset-0 rounded-lg sm:rounded-lg border-4 border-[#00a2ff] transition-all duration-200 ease-out group-hover:-inset-2 group-hover:rounded-2xl sm:group-hover:rounded-2xl pointer-events-none" />

            {/* Front Filled Play Button */}
            <div className="relative z-10 flex items-center justify-center bg-[#00a2ff] text-white w-44 sm:w-56 h-14 sm:h-16 rounded-lg sm:rounded-lg shadow-xl translate-x-2.5 -translate-y-2.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-150 ease-[cubic-bezier(0.34,1.75,0.64,1)] active:scale-95">
              <svg className="w-17 h-17 fill-white drop-shadow-md ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Hero PNG Character Decoration */}
      <div className="relative w-full flex justify-center items-end mt-6 pointer-events-none">
        <img
          src="/assets/hero.png"
          alt="Adopt Me Characters Decoration"
          className="h-auto w-full max-w-none object-cover sm:object-contain translate-y-1"
          style={{
            filter: 'brightness(0) invert(0.098) drop-shadow(0px -35px 20px rgba(0,0,0,0.85))',
          }}
        />
      </div>

      {/* Modal Browser Frame Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-700 text-left"
            >
              {/* Floating Close Button Khusus Mobile/Layar Sempit */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Tutup Browser"
                className="absolute top-3 right-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/90 text-white shadow-lg border border-neutral-600 active:bg-red-600 focus:outline-none sm:hidden border-none cursor-pointer"
              >
                ✕
              </button>

              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-3 py-2 sm:px-4 bg-neutral-800 border-b border-neutral-700 text-neutral-300 text-xs">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Modal"
                    className="w-3.5 h-3.5 rounded-full bg-red-500 hover:opacity-80 transition cursor-pointer border-none"
                  />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>

                {/* URL Address Bar Display */}
                <div className="flex-1 max-w-xs sm:max-w-xl mx-2 sm:mx-4 bg-neutral-900 text-neutral-400 py-1 px-3 rounded-md text-center truncate border border-neutral-700 text-[11px] sm:text-xs">
                  {playUrl}
                </div>

                {/* Close Button Icon (Desktop) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="hidden sm:block text-neutral-400 hover:text-white text-lg font-bold px-2 py-1 bg-transparent border-none cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Web Content Iframe */}
              <div className="flex-1 w-full bg-white relative">
                <iframe
                  src={playUrl}
                  className="w-full h-full border-none"
                  title="Roblox Game"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
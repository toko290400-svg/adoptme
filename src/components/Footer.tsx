"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  // Link URL tetap sesuai bawaan
  const footerUrl =
    "https://www.roblox.com.mu/games/920587237/24H-Adopt-Me?privateServerLinkCode=62041869677502889309248447910791"

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <footer className="relative w-full bg-[#18191c] text-white pt-8 pb-12 px-6 flex flex-col items-center">
      {/* Social Media Icons (SVG Native) */}
      <div className="flex items-center gap-3 mb-12">
        {/* Discord */}
        <button
          onClick={handleOpenModal}
          className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white hover:scale-110 transition border-none cursor-pointer outline-none"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </button>

        {/* Instagram */}
        <button
          onClick={handleOpenModal}
          className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center text-white hover:scale-110 transition border-none cursor-pointer outline-none"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </button>

        {/* Twitter */}
        <button
          onClick={handleOpenModal}
          className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition border-none cursor-pointer outline-none"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </button>

        {/* YouTube */}
        <button
          onClick={handleOpenModal}
          className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition border-none cursor-pointer outline-none"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </button>

        {/* TikTok */}
        <button
          onClick={handleOpenModal}
          className="w-10 h-10 rounded-full bg-black border border-slate-700 flex items-center justify-center text-white hover:scale-110 transition border-none cursor-pointer outline-none"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.55-1.28 2.54.02.82.42 1.61 1.08 2.09.84.62 1.97.74 2.93.38.9-.32 1.61-1.1 1.83-2.03.09-.45.08-.92.08-1.38.01-4.78 0-9.56.01-14.34z" />
          </svg>
        </button>
      </div>

      {/* Navigation Links Columns */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-slate-800/80 pt-10">
        <div className="flex flex-col gap-3 items-center md:items-start text-sm font-semibold text-pink-400">
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Support</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">FAQ</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Content Creators</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Press</button>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start text-sm font-semibold text-pink-400 md:border-l md:border-r md:border-slate-800 md:px-8">
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Privacy Policy</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Terms of Service</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">California Notice at Collection</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Fan Art & Ideas Policy</button>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start text-sm font-semibold text-pink-400 md:pl-4">
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Contact Us</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Careers</button>
          <button onClick={handleOpenModal} className="hover:text-pink-300 transition bg-transparent border-none p-0 cursor-pointer text-pink-400 font-semibold">Accessibility</button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-12 text-center text-xs text-slate-500">
        <p>© 2026 Pt Reacreative. All rights reserved.</p>
      </div>

      {/* Modal Browser Frame Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-5xl h-[85vh] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-700 text-left"
            >
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700 text-neutral-300 text-xs">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition cursor-pointer border-none"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* URL Address Bar Display */}
                <div className="flex-1 max-w-xl mx-4 bg-neutral-900 text-neutral-400 py-1 px-3 rounded-md text-center truncate border border-neutral-700 text-xs">
                  {footerUrl}
                </div>

                {/* Close Button Icon */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white text-lg font-bold px-1 cursor-pointer bg-transparent border-none"
                >
                  ✕
                </button>
              </div>

              {/* Web Content Iframe */}
              <div className="flex-1 w-full bg-white relative">
                <iframe
                  src={footerUrl}
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
    </footer>
  )
}
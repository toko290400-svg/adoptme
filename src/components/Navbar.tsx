"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ROBLOX_PLAY_LINK } from '@/lib/secureLink'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMediaOpen, setIsMediaOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState(ROBLOX_PLAY_LINK)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleOpenModal = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setModalUrl(url)
    setIsModalOpen(true)
    if (isOpen) setIsOpen(false) // Tutup mobile sidebar jika sedang terbuka
  }

  return (
    <>
      {/* Top Fixed Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-[999] flex h-16 sm:h-20 w-full items-center justify-between bg-[#232323] px-0 shadow-md">
        {/* Left Side: Magenta Butterfly Logo Block + Title */}
        <div className="flex h-full items-center">
          <Link href="/" className="flex h-full items-center">
            {/* Magenta Pink Square Logo Box */}
            <div className="flex h-full w-16 sm:w-20 items-center justify-center bg-[#b91c5c] px-3">
              <img
                src="/images/header.png"
                alt="Adopt Me Icon"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain brightness-0 invert"
              />
            </div>
            {/* Title Text */}
            <span className="ml-4 text-2xl sm:text-3xl font-black uppercase tracking-wider text-white drop-shadow-sm">
              ADOPT ME!
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 px-6 font-black uppercase text-base tracking-wider text-white">
          <Link href="/" className="hover:text-[#e6007e] transition-colors">
            DISCOVER
          </Link>
          <Link href="/news" className="hover:text-[#e6007e] transition-colors">
            NEWS
          </Link>

          {/* Desktop Merch Link -> Modal Browser Popup */}
          <button
            onClick={handleOpenModal(ROBLOX_PLAY_LINK)}
            className="flex items-center gap-1 hover:text-[#e6007e] transition-colors bg-transparent border-none text-white font-black uppercase text-base tracking-wider cursor-pointer p-0"
          >
            MERCH
            <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M6 6v2h8.59L3.41 19.17l1.41 1.41L16 9.41V18h2V6H6z" />
            </svg>
          </button>
        </nav>

        {/* Right Side: Mobile Hamburger Button & Desktop CTA */}
        <div className="flex items-center px-4 sm:px-6 gap-3 z-10 pointer-events-auto">
          {/* Desktop Play CTA Button */}
          <button
            onClick={handleOpenModal(ROBLOX_PLAY_LINK)}
            className="hidden sm:flex items-center gap-2 bg-[#e6007e] hover:bg-[#d00070] text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wider shadow-lg transition active:scale-95 border-none outline-none cursor-pointer"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            PLAY
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="lg:hidden flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-[#e6007e] text-white shadow-md active:scale-95 transition-transform pointer-events-auto border-none outline-none"
          >
            <svg className="h-7 w-7 stroke-white stroke-[3.5] fill-none pointer-events-none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="fixed top-0 right-0 z-[1001] flex h-full w-[310px] max-w-[85vw] flex-col bg-[#232323] p-5 text-white shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Top Controls Row inside Sidebar (Play, Close X) */}
              <div className="flex items-center justify-between gap-3 mb-8">
                {/* Play CTA Button inside Sidebar */}
                <button
                  onClick={handleOpenModal(ROBLOX_PLAY_LINK)}
                  className="flex flex-1 h-12 items-center justify-center rounded-2xl bg-[#e6007e] text-white shadow-md active:scale-95 transition-transform border-none outline-none cursor-pointer"
                >
                  <svg className="h-6 w-6 fill-white ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Close 'X' Button */}
                <button
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6007e] text-white shadow-md active:scale-95 transition-transform shrink-0 border-none outline-none cursor-pointer"
                >
                  <svg className="h-6 w-6 stroke-white stroke-[3.5] fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Menu List */}
              <nav className="flex flex-col gap-5 text-xl font-black uppercase tracking-wider">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="text-white hover:text-[#e6007e] transition-colors py-1"
                >
                  DISCOVER
                </Link>

                <Link
                  href="/news"
                  onClick={toggleMenu}
                  className="text-white hover:text-[#e6007e] transition-colors py-1"
                >
                  NEWS
                </Link>

                {/* Media Accordion Link */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsMediaOpen(!isMediaOpen)}
                    className="flex items-center justify-between text-white hover:text-[#e6007e] transition-colors py-1 uppercase font-black bg-transparent border-none text-left cursor-pointer"
                  >
                    MEDIA
                    <svg
                      className={`h-4 w-4 fill-white transition-transform duration-200 ${
                        isMediaOpen ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>

                  {/* Sub-menu */}
                  <AnimatePresence>
                    {isMediaOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-2 pl-4 pt-2 text-base font-bold text-slate-300 overflow-hidden"
                      >
                        <Link href="/#media" onClick={toggleMenu} className="hover:text-[#e6007e] transition">
                          Videos & Trailers
                        </Link>
                        <Link href="/#wallpapers" onClick={toggleMenu} className="hover:text-[#e6007e] transition">
                          Wallpapers
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/#next-update"
                  onClick={toggleMenu}
                  className="text-white hover:text-[#e6007e] transition-colors py-1"
                >
                  NEXT UPDATE
                </Link>

                <Link
                  href="/#support"
                  onClick={toggleMenu}
                  className="text-white hover:text-[#e6007e] transition-colors py-1"
                >
                  SUPPORT
                </Link>

                {/* Mobile Merch Link -> Modal Browser Popup */}
                <button
                  onClick={handleOpenModal("https://store.playadopt.me")}
                  className="flex items-center justify-between text-white hover:text-[#e6007e] transition-colors py-1 uppercase font-black text-xl tracking-wider bg-transparent border-none cursor-pointer w-full text-left p-0"
                >
                  MERCH
                  <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                    <path d="M6 6v2h8.59L3.41 19.17l1.41 1.41L16 9.41V18h2V6H6z" />
                  </svg>
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal Browser Frame Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-5xl h-[85vh] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-700"
            >
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700 text-neutral-300 text-xs">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition border-none cursor-pointer"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* URL Address Bar Display */}
                <div className="flex-1 max-w-xl mx-4 bg-neutral-900 text-neutral-400 py-1 px-3 rounded-md text-center truncate border border-neutral-700 text-xs">
                  {modalUrl}
                </div>

                {/* Close Button Icon */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-neutral-400 hover:text-white text-lg font-bold px-1 bg-transparent border-none cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Web Content Iframe */}
              <div className="flex-1 w-full bg-white relative">
                <iframe
                  src={modalUrl}
                  className="w-full h-full border-none"
                  title="Roblox Game or Merch Store"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
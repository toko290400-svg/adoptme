"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function BuildYourHome() {
  const homesData = [
    {
      id: 1,
      name: 'Treehouse',
      icon: '/assets/treehouse-icon.png',
      displayImage: '/assets/treehouse-icon.png',
      description: 'Fancy a treehouse, an igloo, or a mansion? Decorate your pick or build with friends to feel right at home!'
    },
    {
      id: 2,
      name: 'Fantasy Castle',
      icon: '/assets/castle-icon.png',
      displayImage: '/assets/castle-icon.png',
      description: 'Fancy a treehouse, an igloo, or a mansion? Decorate your pick or build with friends to feel right at home!'
    },
    {
      id: 3,
      name: 'Modern Mansion',
      icon: '/assets/mansion-icon.png',
      displayImage: '/assets/mansion-icon.png',
      description: 'Fancy a treehouse, an igloo, or a mansion? Decorate your pick or build with friends to feel right at home!'
    },
  ]

  const [selectedHome, setSelectedHome] = useState(homesData[2])

  return (
    <section className="relative flex w-full min-h-screen items-center justify-center px-4 py-14 sm:px-6 sm:px-12 md:py-20">
      {/* Background Section with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home-bg.png"
          alt="Build Your Home Background"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        {/* Shadow & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-sky-500/50 via-cyan-950/25 to-transparent pointer-events-none" />
      </div>

      {/* Top Clouds Divider (Smaller & Sleek) */}
      <div className="absolute -top-8 sm:-top-14 md:-top-20 lg:-top-24 left-0 right-0 z-20 flex w-full justify-center pointer-events-none">
        <img
          src="/assets/awan-awan.png"
          alt="Clouds Section Divider"
          className="w-full h-16 sm:h-28 md:h-36 lg:h-44 object-cover object-top drop-shadow-lg"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-6 min-h-[500px] lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Pre-rendered stacked display images */}
        <div className="order-2 flex items-center justify-center lg:order-1 lg:col-span-6">
          <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[22rem] lg:max-w-xl">
            {homesData.map((home) => {
              const isSelected = selectedHome.id === home.id
              return (
                <motion.img
                  key={home.id}
                  src={home.displayImage}
                  alt={home.name}
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    scale: isSelected ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`absolute inset-0 m-auto h-auto max-h-[360px] w-full object-contain sm:max-h-[420px] lg:max-h-[550px] ${isSelected
                      ? 'z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]'
                      : 'z-0 pointer-events-none opacity-0'
                    }`}
                />
              )
            })}
          </div>
        </div>

        {/* Right Column: Text & Selector Thumbnails */}
        <div className="order-1 flex flex-col items-center justify-center text-center lg:order-2 lg:col-span-6 lg:items-end lg:text-right">
          <h2 className="text-4xl font-black uppercase leading-none tracking-wider text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            BUILD
          </h2>
          <h1 className="mb-4 text-5xl font-black uppercase leading-none tracking-tight text-cyan-300 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] sm:text-6xl md:text-8xl">
            YOUR HOME
          </h1>

          {/* Pre-rendered description text */}
          <div className="relative mb-8 min-h-[64px] w-full max-w-lg flex items-center justify-center lg:justify-end">
            {homesData.map((home) => {
              const isSelected = selectedHome.id === home.id
              return (
                <motion.p
                  key={home.id}
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    y: isSelected ? 0 : 4,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
                  className={`text-base font-semibold leading-relaxed text-slate-100 drop-shadow sm:text-lg md:text-xl ${isSelected ? 'relative z-10' : 'absolute inset-0 z-0'
                    }`}
                >
                  {home.description}
                </motion.p>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-5 lg:justify-end">
            {homesData.map((home) => {
              const isActive = selectedHome.id === home.id

              return (
                <button
                  key={home.id}
                  onClick={() => setSelectedHome(home)}
                  className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-800/80 p-1 focus:outline-none sm:h-20 sm:w-20 md:h-24 md:w-24 active:scale-95 transition-transform"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHomeRing"
                      className="absolute inset-0 rounded-full border-4 border-cyan-400 shadow-cyan-500/50 shadow-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  <Image
                    src={home.icon}
                    alt={home.name}
                    width={96}
                    height={96}
                    className={`h-full w-full rounded-full object-cover transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                      }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 sm:-bottom-4 md:-bottom-8 lg:-bottom-12 left-0 right-0 z-20 flex w-full justify-center pointer-events-none">
        <img
          src="/assets/hero.png"
          alt="Adopt Me Characters Overlap"
          className="h-auto w-full max-w-none object-cover sm:object-contain"
          style={{ filter: 'brightness(0) invert(0.098)' }}
        />
      </div>
    </section>
  )
}

export default BuildYourHome
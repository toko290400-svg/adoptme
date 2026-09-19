"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function MakeNewPals() {
  const palsData = [
    {
      id: 1,
      name: 'Pizza',
      icon: '/assets/pizza.png',
      displayImage: '/assets/pals-display-2.png',
      description: 'Grab a pizza with your bestie after racing around Adoption Island in your new ride!'
    },
    {
      id: 2,
      name: 'Ride',
      icon: '/assets/ride.png',
      displayImage: '/assets/pals-display-1.png',
      description: 'Race around Adoption Island with your bestie in your brand new ride!'
    },
    {
      id: 3,
      name: 'Pet',
      icon: '/assets/Friends-Kart.webp',
      displayImage: '/assets/pals-display-3.png',
      description: 'Explore the world together with your favorite cute little companion!'
    },
  ]

  const [selectedPal, setSelectedPal] = useState(palsData[1])

  return (
    <section className="relative flex w-full min-h-screen items-center justify-center px-4 py-14 sm:px-6 sm:px-12 md:py-20">
      {/* Background Section with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/palsbg.png"
          alt="Pals Background"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        {/* Shadow & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/50 via-cyan-950/25 to-transparent pointer-events-none" />
      </div>

      {/* Top Divider Illustration (Full Screen Width 100vw Edge-to-Edge) */}
      <div className="absolute -top-14 sm:-top-24 md:-top-36 lg:-top-48 left-0 right-0 z-20 w-full pointer-events-none">
        <img
          src="/assets/build-home.png"
          alt="Build Home Section Divider"
          className="w-full h-auto min-w-full object-cover object-top drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-6 min-h-[500px] lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Title, Description, & Circular Selectors */}
        <div className="order-2 flex flex-col items-center justify-center text-center lg:order-1 lg:col-span-6 lg:items-start lg:text-left">
          <h2 className="text-4xl font-black uppercase leading-none tracking-wider text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            MAKE
          </h2>
          <h1 className="mb-4 text-5xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] sm:text-6xl md:text-8xl">
            NEW PALS
          </h1>

          {/* Optimized description text */}
          <div className="relative mb-8 min-h-[64px] w-full max-w-lg flex items-center justify-center lg:justify-start">
            {palsData.map((pal) => {
              const isSelected = selectedPal.id === pal.id
              return (
                <motion.p
                  key={pal.id}
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
                  {pal.description}
                </motion.p>
              )
            })}
          </div>

          {/* Selector Thumbnails */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 lg:justify-start">
            {palsData.map((pal) => {
              const isActive = selectedPal.id === pal.id

              return (
                <button
                  key={pal.id}
                  onClick={() => setSelectedPal(pal)}
                  className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-800/80 p-1 focus:outline-none sm:h-20 sm:w-20 md:h-24 md:w-24 active:scale-95 transition-transform"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePalRing"
                      className="absolute inset-0 rounded-full border-2 border-dashed border-white ring-4 ring-white/30 shadow-2xl"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  <Image
                    src={pal.icon}
                    alt={pal.name}
                    width={96}
                    height={96}
                    className={`h-full w-full rounded-full object-contain transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                      }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Optimized Display Images */}
        <div className="order-1 flex items-center justify-center lg:order-2 lg:col-span-6">
          <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[24rem] lg:max-w-lg">
            {palsData.map((pal) => {
              const isSelected = selectedPal.id === pal.id
              return (
                <motion.img
                  key={pal.id}
                  src={pal.displayImage}
                  alt={pal.name}
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    scale: isSelected ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute inset-0 m-auto h-auto max-h-[360px] w-full object-contain sm:max-h-[420px] lg:max-h-[500px] ${isSelected
                      ? 'z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]'
                      : 'z-0 pointer-events-none opacity-0'
                    }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeNewPals
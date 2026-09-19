"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function YourPets() {
  const petsData = [
    {
      id: 1,
      name: 'Bee',
      icon: '/assets/Bee.webp',
      displayImage: '/assets/CarouselBee.webp',
      description: "Adopt your hard-working Bee! Sweet, energetic, and always ready to make honey."
    },
    {
      id: 2,
      name: 'Penguin',
      icon: '/assets/Penguin.webp',
      displayImage: '/assets/pet1.png',
      description: "Adopt your loyal Penguin companion! Always waddling by your side wherever you go."
    },
    {
      id: 3,
      name: 'Dragon',
      icon: '/assets/Dragon.webp',
      displayImage: '/assets/Dragon.png',
      description: "Adopt your legendary Dragon! A powerful and mystical creature to raise."
    },
  ]

  const [selectedPet, setSelectedPet] = useState(petsData[0])

  return (
    <section className="relative flex w-full min-h-screen items-center justify-center px-4 py-14 sm:px-6 md:py-20">
      {/* Background Section with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background1.png"
          alt="Pets Background"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-l from-sky-500/50 via-cyan-950/25 to-transparent pointer-events-none" />
      </div>

      {/* Top Tree Canopy Divider (Full Screen Width 100vw Edge-to-Edge) */}
      <div className="absolute -top-11 sm:-top-24 md:-top-36 lg:-top-48 left-0 right-0 z-20 w-full pointer-events-none">
        <img
          src="/assets/yourpers.png"
          alt="Your Pets Tree Canopy Divider"
          className="w-full h-auto min-w-full object-cover object-top drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 min-h-[500px] lg:grid-cols-12 lg:min-h-[600px]">
        {/* Left Column: Display Gambar Pet Utama (Pre-rendered GPU Stack) */}
        <div className="order-2 flex items-center justify-center lg:order-1 lg:col-span-6">
          <div className="relative flex aspect-square w-full max-w-[22rem] items-center justify-center sm:max-w-[26rem] lg:max-w-xl">
            {petsData.map((pet) => {
              const isSelected = selectedPet.id === pet.id
              return (
                <motion.img
                  key={pet.id}
                  src={pet.displayImage}
                  alt={pet.name}
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    scale: isSelected ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`absolute inset-0 m-auto h-auto max-h-[380px] w-full object-contain sm:max-h-[440px] lg:max-h-[520px] ${isSelected
                    ? 'z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]'
                    : 'z-0 pointer-events-none opacity-0'
                    }`}
                />
              )
            })}
          </div>
        </div>

        {/* Right Column: Detail & Tombol Pilihan */}
        <div className="order-1 flex flex-col items-center justify-center text-center lg:order-2 lg:col-span-6 lg:items-end lg:text-right">
          <h2 className="text-4xl font-black uppercase leading-none tracking-wider text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            RAISE
          </h2>
          <h1 className="mb-4 text-5xl font-black uppercase leading-none tracking-tight text-cyan-300 drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)] sm:text-6xl md:text-8xl">
            YOUR PETS
          </h1>

          {/* Pre-rendered description text */}
          <div className="relative mb-8 min-h-[64px] w-full max-w-xl flex items-center justify-center lg:justify-end">
            {petsData.map((pet) => {
              const isSelected = selectedPet.id === pet.id
              return (
                <motion.p
                  key={pet.id}
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    y: isSelected ? 0 : 4,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
                  className={`text-base font-semibold leading-relaxed text-slate-100 drop-shadow-md sm:text-lg md:text-xl ${isSelected ? 'relative z-10' : 'absolute inset-0 z-0'
                    }`}
                >
                  {pet.description}
                </motion.p>
              )
            })}
          </div>

          {/* Selector Thumbnails */}
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            {petsData.map((pet) => {
              const isActive = selectedPet.id === pet.id

              return (
                <button
                  key={pet.id}
                  onClick={() => setSelectedPet(pet)}
                  className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-800/80 p-1 focus:outline-none sm:h-20 sm:w-20 md:h-24 md:w-24 active:scale-95 transition-transform"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePetRing"
                      className="absolute inset-0 rounded-full border-4 border-cyan-400 shadow-cyan-500/50 shadow-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  <Image
                    src={pet.icon}
                    alt={pet.name}
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

    </section>
  )
}

export default YourPets
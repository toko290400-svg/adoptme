"use client"

import React, { useState } from 'react'

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
    <section className="relative flex w-full min-h-screen items-center justify-center overflow-hidden px-4 py-14 sm:px-6 md:py-20">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/background1.png"
          alt="Pets Background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-6 min-h-[500px] lg:grid-cols-12 lg:gap-8 lg:min-h-[600px]">
        {/* Left Column: Display Gambar Pet Utama */}
        <div className="order-2 flex items-center justify-center lg:order-1 lg:col-span-7">
          <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[24rem] lg:max-w-lg">
            <img
              key={selectedPet.id}
              src={selectedPet.displayImage}
              alt={selectedPet.name}
              className="h-auto max-h-[360px] w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out sm:max-h-[420px] lg:max-h-[500px]"
            />
          </div>
        </div>

        {/* Right Column: Detail & Tombol Pilihan */}
        <div className="order-1 flex flex-col items-center justify-center text-center lg:order-2 lg:col-span-5 lg:items-end lg:text-right">
          <h2 className="text-3xl font-black uppercase leading-none tracking-wider text-white drop-shadow-md sm:text-4xl md:text-5xl">
            RAISE
          </h2>
          <h1 className="mb-4 text-4xl font-black uppercase leading-none tracking-tight text-cyan-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl">
            YOUR PETS
          </h1>

          <p className="mb-8 max-w-md min-h-[48px] text-sm font-semibold text-slate-100 drop-shadow sm:text-base">
            {selectedPet.description}
          </p>

          {/* Selector Thumbnails */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {petsData.map((pet) => {
              const isActive = selectedPet.id === pet.id

              return (
                <button
                  key={pet.id}
                  onClick={() => setSelectedPet(pet)}
                  className={`h-14 w-14 rounded-full bg-slate-800/80 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none sm:h-16 sm:w-16 md:h-20 md:w-20 ${
                    isActive
                      ? 'scale-105 border-4 border-cyan-400 shadow-cyan-500/50 shadow-xl'
                      : 'border-2 border-white/80 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={pet.icon}
                    alt={pet.name}
                    className="h-full w-full object-cover"
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
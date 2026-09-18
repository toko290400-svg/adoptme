"use client"

import React, { useState } from 'react'

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
    <section className="relative flex w-full min-h-screen items-center justify-center overflow-hidden px-4 py-14 sm:px-6 sm:px-12 md:py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/palsbg.png"
          alt="Pals Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-6 min-h-[500px] lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Title, Description, & Circular Selectors */}
        <div className="order-2 flex flex-col items-center justify-center text-center lg:order-1 lg:col-span-6 lg:items-start lg:text-left">
          <h2 className="text-3xl font-black uppercase leading-none tracking-wider text-white drop-shadow-lg sm:text-4xl md:text-6xl">
            MAKE
          </h2>
          <h1 className="mb-4 text-4xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] sm:text-5xl md:text-7xl">
            NEW PALS
          </h1>

          <p className="mb-8 max-w-md min-h-[48px] text-sm font-medium leading-relaxed text-slate-100 drop-shadow sm:text-base">
            {selectedPal.description}
          </p>

          {/* Selector Thumbnails */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            {palsData.map((pal) => {
              const isActive = selectedPal.id === pal.id

              return (
                <button
                  key={pal.id}
                  onClick={() => setSelectedPal(pal)}
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 p-1 transition-all duration-300 hover:scale-110 focus:outline-none sm:h-16 sm:w-16 md:h-20 md:w-20 ${
                    isActive
                      ? 'scale-105 border-2 border-dashed border-white ring-4 ring-white/30 shadow-2xl'
                      : 'border border-white/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={pal.icon}
                    alt={pal.name}
                    className="h-full w-full rounded-full object-contain"
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Display Image (Floating Island Display) */}
        <div className="order-1 flex items-center justify-center lg:order-2 lg:col-span-6">
          <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[24rem] lg:max-w-lg">
            <img
              key={selectedPal.id}
              src={selectedPal.displayImage}
              alt={selectedPal.name}
              className="h-auto max-h-[360px] w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out sm:max-h-[420px] lg:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeNewPals
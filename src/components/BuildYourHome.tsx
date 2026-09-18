"use client"

import React, { useState } from 'react'

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
    <section className="relative flex w-full min-h-screen items-center justify-center overflow-hidden px-4 py-14 sm:px-6 sm:px-12 md:py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/home-bg.png"
          alt="Build Your Home Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-6 min-h-[500px] lg:grid-cols-12 lg:gap-8">
        <div className="order-2 flex items-center justify-center lg:order-1 lg:col-span-6">
          <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[22rem] lg:max-w-xl">
            <img
              key={selectedHome.id}
              src={selectedHome.displayImage}
              alt={selectedHome.name}
              className="h-auto max-h-[360px] w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out sm:max-h-[420px] lg:max-h-[550px]"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col items-center justify-center text-center lg:order-2 lg:col-span-6 lg:items-end lg:text-right">
          <h2 className="text-3xl font-black uppercase leading-none tracking-wider text-white drop-shadow-lg sm:text-4xl md:text-6xl">
            BUILD
          </h2>
          <h1 className="mb-4 text-4xl font-black uppercase leading-none tracking-tight text-cyan-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] sm:text-5xl md:text-7xl">
            YOUR HOME
          </h1>

          <p className="mb-8 max-w-md min-h-[48px] text-sm font-medium leading-relaxed text-slate-100 drop-shadow sm:text-base">
            {selectedHome.description}
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-end">
            {homesData.map((home) => {
              const isActive = selectedHome.id === home.id

              return (
                <button
                  key={home.id}
                  onClick={() => setSelectedHome(home)}
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 p-1 transition-all duration-300 hover:scale-110 focus:outline-none sm:h-16 sm:w-16 md:h-20 md:w-20 ${
                    isActive
                      ? 'scale-105 border-4 border-cyan-400 shadow-cyan-500/50 shadow-xl'
                      : 'border-2 border-white/80 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={home.icon}
                    alt={home.name}
                    className="h-full w-full rounded-full object-cover"
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

export default BuildYourHome
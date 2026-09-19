import React from 'react'

export default function FooterCTA() {
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

        {/* Play Button matching user reference */}
        <div className="flex justify-center my-2">
          <a
            href="https://www.roblox.com.mu/games/920587237/24H-Adopt-Me?privateServerLinkCode=62041869677502889309248447910791"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block cursor-pointer select-none"
          >
            {/* Outer Outline Box (Default inset-0 same size, expands to -inset-2 on hover) */}
            <div className="absolute inset-0 rounded-lg sm:rounded-lg border-4 border-[#00a2ff] transition-all duration-200 ease-out group-hover:-inset-2 group-hover:rounded-2xl sm:group-hover:rounded-2xl pointer-events-none" />

            {/* Front Filled Play Button (Fast snappy hover transition) */}
            <div className="relative z-10 flex items-center justify-center bg-[#00a2ff] text-white w-44 sm:w-56 h-14 sm:h-16 rounded-lg sm:rounded-lg shadow-xl translate-x-2.5 -translate-y-2.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-150 ease-[cubic-bezier(0.34,1.75,0.64,1)] active:scale-95">
              <svg className="w-17 h-17 fill-white drop-shadow-md ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
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
    </section>
  )
}

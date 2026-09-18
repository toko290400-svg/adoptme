import Image from "next/image";

export default function LatestNews() {
  return (
    <section id="news" className="mx-auto max-w-6xl px-4 py-12 text-white sm:px-6">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-black uppercase tracking-wider text-[#e83e8c] md:text-2xl">
            FEATURED
          </h2>
          <p className="text-3xl font-black leading-none tracking-tight text-[#e83e8c] sm:text-4xl md:text-6xl">
            NEWS &<br />UPDATES
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <a
            href="https://www.roblox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-2xl bg-[#7c3aed] px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#6d28d9] sm:w-auto"
          >
            All News
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        
        <article className="lg:col-span-7 rounded-3xl p-4 flex flex-col">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-4">
            <Image 
              src="/banner/banner1.png" 
              alt="New Star Rewards" 
              fill
              className="object-full hover:scale-105 transition duration-300"
            />
          </div>
          <div className="px-2 pb-2">
            <h3 className="text-2xl md:text-3xl font-black text-[#e83e8c] mb-2 uppercase">
              NEW STAR REWARDS!
            </h3>
            <p className="text-slate-300 text-sm md:text-base font-medium mb-6">
              Happy update day! We&apos;re refreshing the daily log-in Star Reward system!
            </p>
            <a
              href="#"
              className="block w-full text-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black py-3 rounded-xl uppercase tracking-wider text-sm transition"
            >
              Read More
            </a>
          </div>
        </article>

        {/* Side Cards List (Kanan - Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Card 1 */}
          <div className="relative group rounded-2xl overflow-hidden aspect-16/9 border-2 border-cyan-400">
            <Image
              src="/banner/banner2.png"
              alt="Fairytale Castle Notes"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <h4 className="text-white font-black text-lg md:text-xl uppercase drop-shadow-md">
                FAIRYTALE CASTLE NOTES!
              </h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden aspect-16/9 border-2 border-cyan-400">
            <Image
              src="/banner/banner4.png"
              alt="Fairytale Egg"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <h4 className="text-white font-black text-lg md:text-xl uppercase drop-shadow-md">
                FAIRYTALE EGG!
              </h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-2xl overflow-hidden aspect-[16/9] border-2 border-cyan-400">
            <Image
              src="/banner/banner3.png"
              alt="Backpack Storage & Releaser Refresh"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <h4 className="text-white font-black text-lg md:text-xl uppercase drop-shadow-md">
                BACKPACK STORAGE & RELEASER REFRESH!
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 pt-12 pb-36 text-white sm:px-6 sm:pt-16 sm:pb-52 lg:px-8 lg:pt-20 lg:pb-72">

      {/* Header */}
      <div className="mb-8 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-xl font-black uppercase tracking-wider text-[#e83e8c] md:text-3xl">
            FEATURED
          </h2>
          <p className="text-4xl font-black leading-none tracking-tight text-[#e83e8c] sm:text-5xl md:text-7xl">
            NEWS &<br />UPDATES
          </p>
        </div>
        <div className="lg:col-span-5">
          <Link
            href="/news"
            className="block w-full rounded-2xl bg-[#7c3aed] py-4 text-center text-xl font-black uppercase tracking-wider text-white shadow-xl transition hover:bg-[#6d28d9] md:text-2xl cursor-pointer"
          >
            All News
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">

        {/* Left Article */}
        <article className="lg:col-span-7 flex flex-col justify-between rounded-3xl">
          <div className="flex flex-col">
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <Image
                src="/banner/banner1.png"
                alt="New Star Rewards"
                width={1800}
                height={1012}
                className="w-full h-auto hover:scale-105 transition duration-300"
              />
            </div>
            <div className="px-1 pb-2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#e83e8c] mb-3 uppercase tracking-tight">
                NEW STAR REWARDS!
              </h3>
              <p className="text-slate-200 text-base md:text-lg font-medium leading-relaxed mb-6">
                Happy update day! We&apos;re refreshing the daily log-in Star Reward system!
              </p>
            </div>
          </div>

          <Link
            href="/news"
            className="block w-full text-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black py-4 rounded-2xl uppercase tracking-wider text-base md:text-xl shadow-xl transition mt-auto cursor-pointer"
          >
            Read More
          </Link>
        </article>

        {/* Side Cards List (Kanan - Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5 pr-2 pb-2">

          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#0096e6] transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
            <div className="relative z-10 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-400">
              <Image
                src="/banner/banner2.png"
                alt="Fairytale Castle Notes"
                width={1800}
                height={1013}
                className="w-full h-auto group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <h4 className="text-white font-black text-xl md:text-2xl uppercase drop-shadow-md">
                  FAIRYTALE CASTLE NOTES!
                </h4>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#0096e6] transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
            <div className="relative z-10 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-400">
              <Image
                src="/banner/banner4.png"
                alt="Fairytale Egg"
                width={1800}
                height={1013}
                className="w-full h-auto group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <h4 className="text-white font-black text-xl md:text-2xl uppercase drop-shadow-md">
                  FAIRYTALE EGG!
                </h4>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#0096e6] transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
            <div className="relative z-10 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-400">
              <Image
                src="/banner/banner3.png"
                alt="Backpack Storage & Releaser Refresh"
                width={1800}
                height={1013}
                className="w-full h-auto group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <h4 className="text-white font-black text-xl md:text-2xl uppercase drop-shadow-md">
                  BACKPACK STORAGE & RELEASER REFRESH!
                </h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
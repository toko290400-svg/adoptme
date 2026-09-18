import Link from "next/link";
import { PlayCircle } from "@deemlol/next-icons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between gap-3 px-3 py-3 sm:px-6 md:px-12 bg-transparent transition-all">
      <div className="flex items-center gap-3 sm:gap-5 min-w-0">
        <div className="flex shrink-0 items-center gap-2">
          <img
            src="/images/header.png"
            alt="header-icon"
            className="h-8 w-8 object-contain sm:h-10 sm:w-10"
          />
        </div>

        <div className="hidden sm:flex items-center gap-2 min-w-0">
          <img
            src="/assets/navbar.png"
            alt="header-logo"
            className="h-auto w-24 object-contain md:w-28"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 font-bold text-base text-white lg:text-lg">
          <Link href="/" className="transition hover:text-yellow-300">Home</Link>
          <Link href="/news" className="transition hover:text-yellow-300">News</Link>
          <Link href="/pets" className="transition hover:text-yellow-300">Pets</Link>
        </div>
      </div>

      <a
        href="https://www.roblox.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-3 py-2 text-[11px] font-extrabold text-purple-950 shadow-lg transition hover:scale-[1.02] hover:bg-yellow-300 sm:px-5 sm:py-2.5 sm:text-sm"
      >
        <PlayCircle size={20} />
        <span className="whitespace-nowrap">PLAY NOW</span>
      </a>
    </nav>
  );
}
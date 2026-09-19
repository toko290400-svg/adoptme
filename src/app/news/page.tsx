"use client"

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

// News Articles data structure matching playadopt.me/news
const initialArticles = [
  {
    id: 1,
    title: "CAT CAFE NOTES!",
    category: "Game Update",
    date: "Sep 18, 2026",
    summary:
      "Happy update day! There's *a latte* new pets coming to Adopt Me this week! Sit down, have a brew and read the news.",
    image: "/banner/banner1.png",
    featured: true,
  },
  {
    id: 2,
    title: "NEW STAR REWARDS!",
    category: "Game Update",
    date: "Sep 12, 2026",
    summary:
      "We're refreshing the daily log-in Star Reward system with brand new pets, vehicles, and exclusive accessories!",
    image: "/banner/banner2.png",
    featured: true,
  },
  {
    id: 3,
    title: "FAIRYTALE CASTLE NOTES!",
    category: "Game Update",
    date: "Sep 05, 2026",
    summary:
      "Step into a world of magic! Build your dream fairy castle and adopt magical mythical creatures.",
    image: "/banner/banner3.png",
    featured: true,
  },
  {
    id: 4,
    title: "FAIRYTALE EGG REVEAL!",
    category: "Events",
    date: "Aug 28, 2026",
    summary:
      "Discover all legendary and ultra-rare pets inside the new Fairytale Egg arriving this Friday!",
    image: "/banner/banner4.png",
    featured: true,
  },
  {
    id: 5,
    title: "BACKPACK STORAGE & RELEASER!",
    category: "Game Update",
    date: "Aug 20, 2026",
    summary:
      "Quality of life update: Organize your pets and items faster than ever with upgraded storage tools.",
    image: "/banner/banner3.png",
    featured: false,
  },
  {
    id: 6,
    title: "9TH BIRTHDAY PARTY NOTES!",
    category: "Events",
    date: "Aug 12, 2026",
    summary:
      "Celebrate Adopt Me's birthday with limited-time minigames, free party hats, and double bucks weekend!",
    image: "/banner/banner2.png",
    featured: false,
  },
  {
    id: 7,
    title: "TRADING HUB REFRESH!",
    category: "Game Update",
    date: "Aug 02, 2026",
    summary:
      "Trading just got safer and smoother! Check out the improved trade verification safety system.",
    image: "/banner/banner1.png",
    featured: false,
  },
  {
    id: 8,
    title: "BEE PASS & HONEY PETS!",
    category: "Merch",
    date: "Jul 25, 2026",
    summary:
      "Sweet new updates! Collect honey tokens and unlock exclusive bee-themed rewards and pets.",
    image: "/banner/banner4.png",
    featured: false,
  },
  {
    id: 9,
    title: "STORMY RINGS & DUCKY RALLY!",
    category: "Events",
    date: "Jul 15, 2026",
    summary:
      "Take flight in the aerial obstacle course and race ducky watercrafts for grand prize trophies!",
    image: "/banner/banner2.png",
    featured: false,
  },
];

// Custom Select Component for stylish gamer dropdowns
function CustomSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  label?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((o) => o.value === value) || options[0];

  return (
    <div className="relative inline-block text-left z-30">
      <div className="flex items-center gap-2">
        {label && (
          <span className="text-xs font-black uppercase tracking-wider text-slate-300 hidden sm:inline">
            {label}:
          </span>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-3 bg-[#18191c] text-white border-2 border-[#e81f76] px-4 py-2.5 rounded-xl font-extrabold text-sm shadow-md hover:border-pink-400 focus:outline-none cursor-pointer transition-all active:scale-95 min-w-[150px]"
        >
          <span>{selectedOption.label}</span>
          <svg
            className={`w-4 h-4 fill-white transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Animated Custom Options List */}
          <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-[#232328] border-2 border-[#e81f76] shadow-2xl z-50 p-1.5 overflow-hidden">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#e81f76] text-white shadow-md"
                      : "text-slate-200 hover:bg-[#e81f76]/20 hover:text-white"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeModalArticle, setActiveModalArticle] = useState<typeof initialArticles[0] | null>(null);

  // Auto-play featured slider states
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const featuredArticles = useMemo(() => {
    return initialArticles.filter((a) => a.featured);
  }, []);

  const currentFeatured = featuredArticles[featuredIndex] || featuredArticles[0];

  // Auto-slide effect every 4 seconds
  useEffect(() => {
    if (isPaused || featuredArticles.length <= 1) return;
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, featuredArticles.length]);

  const filteredArticles = useMemo(() => {
    return initialArticles
      .filter((article) => {
        const matchesSearch =
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "Newest") return b.id - a.id;
        return a.id - b.id;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const categoryOptions = [
    { label: "All News", value: "All" },
    { label: "Game Update", value: "Game Update" },
    { label: "Events", value: "Events" },
    { label: "Merch & Passes", value: "Merch" },
  ];

  const sortOptions = [
    { label: "Newest First", value: "Newest" },
    { label: "Oldest First", value: "Oldest" },
  ];

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  return (
    <div className="min-h-screen bg-[#18191c] text-white flex flex-col font-sans selection:bg-[#e81f76] selection:text-white">
      <Navbar />

      {/* Top Margin for Fixed Header */}
      <div className="pt-16 sm:pt-20" />

      {/* 1. FEATURED HERO BANNER SECTION WITH AUTO-SLIDER */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full bg-[#232328] px-4 py-10 sm:px-8 md:py-16 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-8 lg:grid-cols-12 min-h-[380px]">
          {/* Left Column Text & Action */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-cyan-400 font-black tracking-widest text-sm sm:text-base uppercase">
                    FEATURED
                  </span>
                  <span className="bg-[#e81f76] text-white text-xs font-black uppercase px-2.5 py-0.5 rounded-full">
                    {currentFeatured.category}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#e81f76] tracking-tight uppercase leading-none mb-4 drop-shadow min-h-[1.2em]">
                  {currentFeatured.title}
                </h1>

                <p className="text-slate-200 text-base sm:text-xl font-medium leading-relaxed mb-8 max-w-xl min-h-[3.2em]">
                  {currentFeatured.summary}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => setActiveModalArticle(currentFeatured)}
                    className="inline-flex items-center justify-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black px-8 py-4 rounded-2xl uppercase tracking-wider text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    READ MORE
                  </button>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevFeatured}
                      aria-label="Previous Featured Slide"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#18191c] border-2 border-slate-700 hover:border-pink-500 text-white font-bold transition active:scale-90 cursor-pointer"
                    >
                      ❮
                    </button>
                    <button
                      onClick={handleNextFeatured}
                      aria-label="Next Featured Slide"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#18191c] border-2 border-slate-700 hover:border-pink-500 text-white font-bold transition active:scale-90 cursor-pointer"
                    >
                      ❯
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Pagination Pill Indicators */}
            <div className="mt-8 flex items-center gap-2">
              {featuredArticles.map((article, idx) => {
                const isActive = idx === featuredIndex;
                return (
                  <button
                    key={article.id}
                    onClick={() => setFeaturedIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-10 bg-[#e81f76] shadow-md shadow-pink-500/50"
                        : "w-3 bg-slate-600 hover:bg-slate-400"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Column Featured Banner Image with Auto Fade/Slide */}
          <div className="lg:col-span-6 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setActiveModalArticle(currentFeatured)}
                className="relative group w-full max-w-xl cursor-pointer"
              >
                {/* Main Card without cyan border */}
                <div className="relative z-10 aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 transition-transform duration-200 group-hover:scale-[1.02]">
                  <Image
                    src={currentFeatured.image}
                    alt={currentFeatured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-black text-xl uppercase tracking-wide drop-shadow-md">
                      Click to View Story Details
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. TORN PAPER / RIPPED EDGE WAVE DIVIDER */}
      <div className="relative w-full h-8 sm:h-12 bg-[#232328] overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full fill-[#18191c] preserve-3d"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,-30 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* 3. MAIN NEWS FEED ON NEWSPAPER BACKGROUND */}
      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-repeat min-h-[800px]" style={{ backgroundImage: "url('/assets/bg-news.svg')" }}>
        {/* Dark Container Box for Controls & News Cards */}
        <div className="mx-auto max-w-7xl bg-[#232328]/95 backdrop-blur-md rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-10">
          
          {/* Header Controls Bar (Search + Custom Category Filter + Custom Sort) */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-700/60 pb-6">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#18191c] text-white placeholder-slate-400 pl-4 pr-10 py-3 rounded-xl border-2 border-[#e81f76] focus:border-pink-400 focus:outline-none text-sm font-semibold transition-all shadow-inner"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white font-bold"
                >
                  ✕
                </button>
              ) : (
                <svg
                  className="absolute right-3 top-3.5 h-5 w-5 fill-slate-400 pointer-events-none"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              )}
            </div>

            {/* Custom Styled Filter & Sort Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <CustomSelect
                label="FILTER"
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categoryOptions}
              />
              <CustomSelect
                label="SORT"
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
              />
            </div>
          </div>

          {/* News Cards Grid */}
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center text-slate-400 font-bold text-lg">
              No news articles found matching &quot;{searchQuery}&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.slice(0, visibleCount).map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveModalArticle(article)}
                  className="relative group cursor-pointer"
                >
                  {/* Outer 3D Offset Ring */}
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#0096e6] transition-transform duration-200 group-hover:translate-x-3 group-hover:translate-y-3" />

                  {/* Card Main Container */}
                  <div className="relative z-10 rounded-2xl overflow-hidden bg-[#18191c] border-2 border-cyan-400 shadow-xl transition-transform duration-200 group-hover:-translate-y-1">
                    {/* Card Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Top Right Category Tag Badge */}
                      <div className="absolute top-3 right-3 bg-[#e81f76] text-white px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-md">
                        {article.category}
                      </div>

                      {/* Gradient Overlay & Title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                        <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-1">
                          {article.date}
                        </span>
                        <h3 className="text-white font-black text-xl sm:text-2xl uppercase leading-tight drop-shadow">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show More Button */}
          {visibleCount < filteredArticles.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="bg-[#e81f76] hover:bg-[#d01463] text-white font-black px-10 py-4 rounded-2xl uppercase tracking-wider text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                SHOW MORE
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE DETAIL MODAL */}
      {activeModalArticle && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setActiveModalArticle(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#232328] border-2 border-pink-500 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalArticle(null)}
              className="absolute top-4 right-4 bg-[#e81f76] text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl hover:scale-110 transition cursor-pointer"
            >
              ✕
            </button>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border-2 border-cyan-400">
              <Image
                src={activeModalArticle.image}
                alt={activeModalArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs">
              {activeModalArticle.category} • {activeModalArticle.date}
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#e81f76] uppercase tracking-tight mt-1 mb-4">
              {activeModalArticle.title}
            </h2>

            <p className="text-slate-200 text-lg leading-relaxed font-medium mb-6">
              {activeModalArticle.summary}
            </p>

            <a
              href="https://www.roblox.com.mu/games/920587237/24H-Adopt-Me?privateServerLinkCode=62041869677502889309248447910791"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#00a2ff] hover:bg-[#008ce0] text-white font-black py-4 rounded-xl uppercase tracking-wider text-lg shadow-lg transition"
            >
              PLAY ADOPT ME NOW
            </a>
          </div>
        </div>
      )}

      {/* FOOTER CTA & FOOTER */}
      <FooterCTA />
      <Footer />
    </div>
  );
}

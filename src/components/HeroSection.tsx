"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col md:flex-row">

      {/* ── Image ──
          Mobile : absolute full-background
          Desktop: relative left-half column                  */}
      <div className="absolute inset-0 md:relative md:inset-auto md:w-1/2 md:flex-shrink-0">
        <Image
          src="/images/hero-main.jpg"
          alt="Алексей Ефремов"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Mobile: heavy bottom gradient so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85 md:hidden" />
        {/* Desktop: right edge fade into bg */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-transparent to-[#0a0a0a]" />
        {/* Desktop: bottom fade */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* ── Text content ──
          Mobile : absolute, pinned to bottom
          Desktop: right column, centred vertically           */}
      <div className="
        absolute bottom-10 left-0 right-0 px-8
        md:static md:flex md:flex-col md:justify-center md:px-16 md:py-0 md:w-1/2
        z-10
      ">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-red-700 font-sans">
            Портфолио
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
        >
          Алексей
          <br />
          Ефремов
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="w-20 h-px bg-red-700 my-5 origin-left"
        />

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-[11px] sm:text-sm md:text-base tracking-[0.18em] md:tracking-[0.3em] uppercase text-red-600 font-sans font-light whitespace-nowrap">
            Актёр&nbsp;|&nbsp;Музыкант&nbsp;|&nbsp;Каскадёр
          </p>
          <p className="mt-1.5 text-[11px] sm:text-sm text-neutral-400 font-sans italic">
            и просто хороший парень
          </p>
        </motion.div>

        {/* Scroll indicator — hidden on small mobile to avoid clutter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="hidden sm:flex flex-col items-start gap-2 mt-10 md:mt-14"
        >
          <span className="text-neutral-500 text-xs tracking-widest uppercase font-sans">Прокрутить</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-red-700" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

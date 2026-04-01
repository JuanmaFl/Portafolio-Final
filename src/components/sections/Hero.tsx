"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const titleWords = ["Juan", "Manuel", "Florez", "Robledo"];

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1a2850 50%, #0A0E27 100%)" }}
      />
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,53,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#374151]/60 bg-[#0A0E27]/50 backdrop-blur-sm text-sm text-[#9CA3AF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} style={{ color: "#FF6B35" }} />
          <span style={{ fontFamily: "var(--font-inter)" }}>{t.hero.badge}</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-4 last:mr-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-lg md:text-xl font-semibold mb-6 gradient-text"
          style={{ fontFamily: "var(--font-poppins)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          className="max-w-xl text-base md:text-lg text-[#9CA3AF] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full font-semibold text-sm"
            style={{ background: "#FF6B35", color: "#0F172A", fontFamily: "var(--font-poppins)" }}
            whileHover={{ scale: 1.07, boxShadow: "0 0 30px rgba(255,107,53,0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            {t.hero.cta_work}
          </motion.button>

          <motion.a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm border border-[#374151] text-[#E5E7EB] hover:border-[#FF6B35] transition-all"
            style={{ fontFamily: "var(--font-poppins)" }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            <Download size={15} />
            {t.hero.cta_cv}
          </motion.a>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 text-sm font-semibold transition-all"
            style={{ color: "#00D4FF", fontFamily: "var(--font-poppins)" }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            {t.hero.cta_contact}
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7280] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
          {t.hero.scroll}
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

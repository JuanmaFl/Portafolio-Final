"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useLanguage } from "@/contexts/LanguageContext";

interface LangData {
  flag: string;
  name: string;
  level: string;
  percent: number;
  description: string;
  barColor: string;
  barBg: string;
  delay: number;
}

// Extracted as its own component so useRef/useInView are called at the top level
function LanguageCard({ lang }: { lang: LangData }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-6 border border-[#374151]/50"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(26,40,80,0.5) 100%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: lang.delay }}
      whileHover={{
        borderColor: lang.barColor,
        boxShadow: `0 0 25px ${lang.barColor}22`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label={lang.name}>
            {lang.flag}
          </span>
          <div>
            <h3
              className="text-lg font-semibold text-[#F5F7FA]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {lang.name}
            </h3>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: `${lang.barColor}18`,
                color: lang.barColor,
                fontFamily: "var(--font-inter)",
              }}
            >
              {lang.level}
            </span>
          </div>
        </div>

        {/* Animated counter */}
        <div
          className="text-2xl font-bold"
          style={{ color: lang.barColor, fontFamily: "var(--font-poppins)" }}
        >
          {isInView ? (
            <CountUp end={lang.percent} duration={2} suffix="%" delay={lang.delay} />
          ) : (
            "0%"
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="relative h-1.5 rounded-full mb-4 overflow-hidden"
        style={{ background: lang.barBg }}
      >
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: lang.barColor }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${lang.percent}%` } : { width: 0 }}
          transition={{ duration: 1.6, delay: lang.delay + 0.1, ease: "easeOut" }}
        />
      </div>

      <p
        className="text-sm text-[#9CA3AF] leading-relaxed"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {lang.description}
      </p>
    </motion.div>
  );
}

export default function Languages() {
  const { t } = useLanguage();

  const languages: LangData[] = [
    {
      flag: "🇬🇧",
      name: t.languages.en_name,
      level: t.languages.en_level,
      percent: 90,
      description: t.languages.en_desc,
      barColor: "#FF6B35",
      barBg: "rgba(255,107,53,0.1)",
      delay: 0,
    },
    {
      flag: "🇵🇹",
      name: t.languages.pt_name,
      level: t.languages.pt_level,
      percent: 75,
      description: t.languages.pt_desc,
      barColor: "#00D4FF",
      barBg: "rgba(0,212,255,0.1)",
      delay: 0.15,
    },
    {
      flag: "🇪🇸",
      name: t.languages.es_name,
      level: t.languages.es_level,
      percent: 100,
      description: t.languages.es_desc,
      barColor: "#F5F7FA",
      barBg: "rgba(245,247,250,0.08)",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="languages"
      className="py-32 px-6 md:px-8"
      style={{
        background: "linear-gradient(180deg, #0F172A 0%, #0A0E27 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}
          >
            {t.languages.label}
          </p>
          <h2
            className="text-4xl font-bold text-[#F5F7FA]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {t.languages.heading}
          </h2>
          <p
            className="mt-3 text-[#9CA3AF] max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.languages.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <LanguageCard key={lang.name} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

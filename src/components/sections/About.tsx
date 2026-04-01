"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, BookOpen, Globe } from "lucide-react";
import CountUp from "react-countup";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-[#374151]/50 bg-[#0A0E27]/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.04, borderColor: color }}
    >
      <Icon size={22} color={color} />
      <div className="text-3xl font-bold" style={{ color, fontFamily: "var(--font-poppins)" }}>
        {isInView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="text-sm text-[#9CA3AF] text-center" style={{ fontFamily: "var(--font-inter)" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Zap, value: 3, suffix: "+", label: t.about.stat_projects, color: "#FF6B35" },
    { icon: BookOpen, value: 5, suffix: "+", label: t.about.stat_years, color: "#00D4FF" },
    { icon: Globe, value: 2, suffix: "", label: t.about.stat_continents, color: "#FF6B35" },
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-8"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A0E27 100%)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}>
            {t.about.label}
          </p>
          <h2 className="text-4xl font-bold mb-6 text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
            {t.about.heading}{" "}
            <span className="gradient-text">{t.about.heading_accent}</span>
          </h2>

          <div className="space-y-4 text-[#9CA3AF] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            <motion.div
              className="absolute -inset-3 rounded-3xl"
              style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.25) 0%, rgba(0,212,255,0.15) 100%)", filter: "blur(18px)" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative w-full h-full rounded-3xl border border-[#374151]/50 overflow-hidden"
              animate={{ scale: [1, 1.012, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Juan Manuel Florez Robledo"
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: "linear-gradient(0deg, rgba(10,14,39,0.95) 0%, transparent 100%)" }}
              >
                <p className="text-[#F5F7FA] font-semibold text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                  Juan Manuel Florez Robledo
                </p>
                <p className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
                  Medellín, Colombia
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00D4FF" }} />
                  <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
                    {t.about.available}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

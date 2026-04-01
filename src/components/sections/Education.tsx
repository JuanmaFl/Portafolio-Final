"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  const educations = [
    {
      icon: GraduationCap, iconColor: "#FF6B35",
      year: "2023 – Present",
      title: t.education.eafit_title,
      institution: t.education.eafit_inst,
      statusLabel: t.education.eafit_status, statusColor: "#FF6B35",
      description: t.education.eafit_desc,
      highlights: [t.education.eafit_h1, t.education.eafit_h2, t.education.eafit_h3, t.education.eafit_h4],
      image: undefined,
    },
    {
      icon: Globe, iconColor: "#00D4FF",
      year: "2025",
      title: t.education.fhnw_title,
      institution: t.education.fhnw_inst,
      statusLabel: t.education.fhnw_status, statusColor: "#00D4FF",
      description: t.education.fhnw_desc,
      highlights: [t.education.fhnw_h1, t.education.fhnw_h2, t.education.fhnw_h3, t.education.fhnw_h4],
      image: "/images/switzerland.jpg",
    },
    {
      icon: BookOpen, iconColor: "#FF6B35",
      year: "2024",
      title: t.education.sabana_title,
      institution: t.education.sabana_inst,
      statusLabel: t.education.sabana_status, statusColor: "#FF6B35",
      description: t.education.sabana_desc,
      highlights: [t.education.sabana_h1, t.education.sabana_h2, t.education.sabana_h3],
      image: undefined,
    },
    {
      icon: BookOpen, iconColor: "#6B7280",
      year: "2022",
      title: t.education.school_title,
      institution: t.education.school_inst,
      statusLabel: t.education.school_status, statusColor: "#6B7280",
      description: t.education.school_desc,
      highlights: [t.education.school_h1, t.education.school_h2],
      image: undefined,
    },
  ];

  return (
    <section id="education" className="py-32 px-6 md:px-8" style={{ background: "#0A0E27" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}>
            {t.education.label}
          </p>
          <h2 className="text-4xl font-bold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
            {t.education.heading}
          </h2>
          <p className="mt-3 text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
            {t.education.description}
          </p>
        </motion.div>

        <div className="relative space-y-8">
          <motion.div
            className="absolute left-[13px] md:left-[15px] top-0 bottom-0 w-[2px] origin-top"
            style={{ background: "linear-gradient(180deg, #FF6B35 0%, #00D4FF 60%, #6B7280 100%)" }}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          {educations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className="absolute left-[5px] md:left-[7px] top-6 w-4 h-4 rounded-full border-2 z-10 flex items-center justify-center"
                  style={{ borderColor: item.iconColor, background: "#0F172A" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: item.iconColor }} />
                </div>

                <motion.div
                  className="rounded-2xl p-6 border border-[#374151]/50"
                  style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(26,40,80,0.5) 100%)" }}
                  whileHover={{ scale: 1.02, borderColor: item.iconColor, boxShadow: `0 0 25px ${item.iconColor}22` }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl shrink-0" style={{ background: `${item.iconColor}18` }}>
                        <Icon size={18} color={item.iconColor} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: `${item.statusColor}18`, color: item.statusColor, border: `1px solid ${item.statusColor}40`, fontFamily: "var(--font-inter)" }}
                      >
                        {item.statusLabel}
                      </span>
                      <span className="text-xs text-[#6B7280]" style={{ fontFamily: "var(--font-inter)" }}>
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.description}
                  </p>

                  {item.image && (
                    <div className="relative h-40 rounded-xl overflow-hidden mb-4 border border-[#374151]/40">
                      <Image src={item.image} alt={item.institution} fill className="object-cover object-center" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,14,39,0.5) 0%, transparent 60%)" }} />
                    </div>
                  )}

                  <ul className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.iconColor }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      year: "2025",
      icon: Briefcase,
      company: t.experience.freelance_company,
      role: t.experience.freelance_role,
      description: t.experience.freelance_desc,
      skills: ["Next.js", "React", "Python", "AI/ML", "Full Stack"],
      duration: t.experience.freelance_duration,
    },
    {
      year: "2024–25",
      icon: Cpu,
      company: t.experience.plus_company,
      role: t.experience.plus_role,
      description: t.experience.plus_desc,
      skills: ["SQL", "Database Management", "Technical Support", "Linux", "Windows"],
      duration: t.experience.plus_duration,
    },
    {
      year: "2022–23",
      icon: Package,
      company: t.experience.peering_company,
      role: t.experience.peering_role,
      description: t.experience.peering_desc,
      skills: ["Excel", "Data Management", "English", "Portuguese", "Communication"],
      duration: t.experience.peering_duration,
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-8" style={{ background: "#0A0E27" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}>
            {t.experience.label}
          </p>
          <h2 className="text-4xl font-bold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
            {t.experience.heading}
          </h2>
        </motion.div>

        <div className="relative space-y-8">
          <motion.div
            className="absolute left-[13px] md:left-[15px] top-0 bottom-0 w-[2px] origin-top"
            style={{ background: "linear-gradient(180deg, #FF6B35 0%, #00D4FF 100%)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.company}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className="absolute left-[5px] md:left-[7px] top-6 w-4 h-4 rounded-full border-2 border-[#FF6B35] z-10"
                  style={{ background: "#0F172A" }}
                />
                <motion.div
                  className="rounded-2xl p-6 border border-[#374151]/50"
                  style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(26,40,80,0.5) 100%)" }}
                  whileHover={{ scale: 1.025, borderColor: "#FF6B35", boxShadow: "0 0 30px rgba(255,107,53,0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl" style={{ background: "rgba(255,107,53,0.12)" }}>
                        <Icon size={18} color="#FF6B35" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
                          {item.company}
                        </h3>
                        <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: "rgba(255,107,53,0.15)", color: "#FF6B35", fontFamily: "var(--font-inter)" }}
                      >
                        {item.year}
                      </span>
                      <span className="text-xs text-[#6B7280]" style={{ fontFamily: "var(--font-inter)" }}>
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="text-xs px-3 py-1 rounded-full border border-[#374151]/60 text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

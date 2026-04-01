"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Cloud, Database, Zap, Server, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.3, delay: i * 0.07 } }),
};

const SKILL_DATA = [
  {
    icon: Code, iconColor: "#FF6B35",
    skills: [
      { name: "Java", icon: Code }, { name: "Python", icon: Code }, { name: "C++", icon: Code },
      { name: "Haskell", icon: Code }, { name: "JavaScript", icon: Code }, { name: "HTML/CSS", icon: Code },
    ],
    catKey: "cat1" as const,
  },
  {
    icon: Smartphone, iconColor: "#FF6B35",
    skills: [
      { name: "React", icon: Zap }, { name: "Next.js", icon: Zap }, { name: "Flutter", icon: Zap },
      { name: "Django", icon: Zap }, { name: "React Native", icon: Zap }, { name: "Tailwind CSS", icon: Zap },
    ],
    catKey: "cat2" as const,
  },
  {
    icon: Brain, iconColor: "#00D4FF",
    skills: [
      { name: "PyTorch", icon: Zap }, { name: "YOLO", icon: Zap }, { name: "OpenCV", icon: Zap },
      { name: "Pandas", icon: Zap }, { name: "TensorFlow", icon: Zap }, { name: "Reinforcement Learning", icon: Zap },
    ],
    catKey: "cat3" as const,
  },
  {
    icon: Cloud, iconColor: "#00D4FF",
    skills: [
      { name: "AWS", icon: Server }, { name: "Docker", icon: Server }, { name: "Linux", icon: Server },
      { name: "Git", icon: Server }, { name: "CI/CD", icon: Server }, { name: "Nginx", icon: Server },
    ],
    catKey: "cat4" as const,
  },
  {
    icon: Database, iconColor: "#FF6B35",
    skills: [
      { name: "PostgreSQL", icon: Database }, { name: "MongoDB", icon: Database }, { name: "SQL", icon: Database },
      { name: "Power BI", icon: Database }, { name: "Redis", icon: Database }, { name: "Data Analysis", icon: Database },
    ],
    catKey: "cat5" as const,
  },
  {
    icon: Zap, iconColor: "#00D4FF",
    skills: [
      { name: "N8N", icon: Workflow }, { name: "Power Automate", icon: Workflow }, { name: "REST APIs", icon: Workflow },
      { name: "GraphQL", icon: Workflow }, { name: "MSYS2", icon: Workflow }, { name: "Webhooks", icon: Workflow },
    ],
    catKey: "cat6" as const,
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A0E27 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}>
            {t.skills.label}
          </p>
          <h2 className="text-4xl font-bold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
            {t.skills.heading}
          </h2>
          <p className="mt-3 text-[#9CA3AF] max-w-xl" style={{ fontFamily: "var(--font-inter)" }}>
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_DATA.map((cat, cardIndex) => {
            const Icon = cat.icon;
            const titleKey = `${cat.catKey}_title` as keyof typeof t.skills;
            const descKey = `${cat.catKey}_desc` as keyof typeof t.skills;
            return (
              <motion.div
                key={cat.catKey}
                className="rounded-2xl p-6 border border-[#374151]/50 h-full"
                style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(26,40,80,0.5) 100%)" }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cardIndex * 0.08 }}
                whileHover={{ borderColor: cat.iconColor, boxShadow: `0 0 25px ${cat.iconColor}22` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl" style={{ background: `${cat.iconColor}18` }}>
                    <Icon size={20} color={cat.iconColor} />
                  </div>
                  <h3 className="text-base font-semibold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
                    {t.skills[titleKey] as string}
                  </h3>
                </div>
                <motion.div className="flex flex-wrap gap-2 mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name} custom={i} variants={badgeVariants}
                      className="text-xs px-3 py-1.5 rounded-full border cursor-default select-none transition-all duration-200"
                      style={{ borderColor: `${cat.iconColor}40`, color: "#E5E7EB", background: `${cat.iconColor}0d`, fontFamily: "var(--font-inter)" }}
                      whileHover={{ scale: 1.12, background: `${cat.iconColor}22`, borderColor: cat.iconColor, color: "#F5F7FA" }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {t.skills[descKey] as string}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

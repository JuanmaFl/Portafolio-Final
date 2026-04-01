"use client";

import { motion } from "framer-motion";
import { Globe, Zap, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Infiber",
      description: t.projects.infiber_desc,
      link: "https://infiber.online/",
      icon: Globe,
      badge: "Live",
      badgeColor: "#FF6B35",
      glowColor: "rgba(0,212,255,0.25)",
      tech: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      stats: [
        { label: t.projects.stat_year, value: "2024" },
        { label: t.projects.stat_score, value: "100%" },
        { label: t.projects.stat_status, value: "Live" },
      ],
      preview: "/images/infiber-preview.jpg",
    },
    {
      title: "Anexu — ISP Coverage",
      description: t.projects.anexu_desc,
      link: "https://86.48.21.76/cobertura/",
      icon: Zap,
      badge: "Active",
      badgeColor: "#00D4FF",
      glowColor: "rgba(255,107,53,0.25)",
      tech: ["Django", "GeoDjango", "PostGIS", "Google Maps API", "Docker"],
      stats: [
        { label: t.projects.stat_year, value: "2025" },
        { label: t.projects.stat_geo, value: "PostGIS" },
        { label: t.projects.stat_api, value: "REST" },
      ],
      preview: "/images/anexu-preview.jpg",
    },
    {
      title: "Peering Latam",
      description: t.projects.peering_desc,
      link: "https://86.48.21.76/",
      icon: Globe,
      badge: "Live",
      badgeColor: "#9CA3AF",
      glowColor: "rgba(0,212,255,0.15)",
      tech: ["Django", "React", "OpenAI", "PostgreSQL"],
      stats: [
        { label: t.projects.stat_status, value: "Live" },
        { label: "AI", value: "Powered" },
        { label: t.projects.stat_type, value: "Platform" },
      ],
      preview: "/images/peering-preview.jpg",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-8" style={{ background: "#0A0E27" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}>
            {t.projects.label}
          </p>
          <h2 className="text-4xl font-bold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
            {t.projects.heading}
          </h2>
          <p className="mt-3 text-[#9CA3AF] max-w-xl" style={{ fontFamily: "var(--font-inter)" }}>
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative rounded-2xl border border-[#374151]/50 overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(26,40,80,0.6) 100%)" }}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ scale: 1.025, borderColor: project.badgeColor, boxShadow: `0 0 40px ${project.glowColor}` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.preview} alt={`${project.title} preview`} fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <span
                  className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{ background: `${project.badgeColor}33`, color: project.badgeColor, border: `1px solid ${project.badgeColor}66`, fontFamily: "var(--font-inter)" }}
                >
                  {project.badge}
                </span>
                <motion.a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  className="absolute top-3 left-3 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  style={{ background: "rgba(15,23,42,0.7)" }}
                  whileHover={{ scale: 1.1 }} aria-label={`Open ${project.title}`}
                >
                  <ExternalLink size={13} color="#F5F7FA" />
                </motion.a>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[#F5F7FA]" style={{ fontFamily: "var(--font-poppins)" }}>
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.link} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 text-[#9CA3AF] group-hover:text-[#F5F7FA] transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }} aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-[#374151]/60 text-[#6B7280]" style={{ fontFamily: "var(--font-inter)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-[#374151]/40">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center flex-1">
                      <div className="text-sm font-semibold" style={{ color: project.badgeColor, fontFamily: "var(--font-poppins)" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#6B7280]" style={{ fontFamily: "var(--font-inter)" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

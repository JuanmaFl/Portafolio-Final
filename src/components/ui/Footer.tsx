"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="py-12 px-6 md:px-8 border-t"
      style={{ background: "#0A0E27", borderColor: "rgba(55,65,81,0.4)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: "var(--font-inter)" }}>
            {t.footer.copy}
          </p>
          <p className="text-xs text-[#6B7280] mt-1" style={{ fontFamily: "var(--font-inter)" }}>
            {t.footer.built}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FF6B35" }} />
          <span className="text-xs text-[#6B7280]" style={{ fontFamily: "var(--font-inter)" }}>
            {t.footer.deployed}
          </span>
        </div>
      </div>
    </motion.footer>
  );
}

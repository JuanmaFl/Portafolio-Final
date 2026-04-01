"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.languages, href: "#languages" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t]); // re-run when language changes to re-read navLinks

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-[#0A0E27]/80 border-b border-[#374151]/40 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold tracking-wider"
            style={{ color: "#FF6B35", fontFamily: "var(--font-poppins)" }}
            whileHover={{ scale: 1.05 }}
          >
            JMF
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    isActive ? "text-[#FF6B35]" : "text-[#9CA3AF] hover:text-[#F5F7FA]"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF6B35] transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}

            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-2 pl-4 border-l border-[#374151]/50">
              {LOCALES.map(({ code, label }) => (
                <motion.button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`text-xs font-semibold px-2 py-1 rounded-md transition-all ${
                    locale === code
                      ? "text-[#FF6B35] bg-[#FF6B35]/10"
                      : "text-[#6B7280] hover:text-[#9CA3AF]"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors p-1"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 bg-[#0A0E27]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-2xl font-semibold text-[#E5E7EB] hover:text-[#FF6B35] transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Language switcher — mobile */}
            <div className="flex gap-3 mt-10 pt-8 border-t border-[#374151]/40">
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                    locale === code
                      ? "border-[#FF6B35] text-[#FF6B35] bg-[#FF6B35]/10"
                      : "border-[#374151] text-[#6B7280]"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

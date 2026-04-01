"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, GitBranch, Link2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EMAIL = "jmflorezrobledo@gmail.com";
const PHONE = "+57 311 572 9607";
const GITHUB = "https://github.com/JuanmaFl";
const LINKEDIN = "https://www.linkedin.com/in/juan-manuel-florez-robledo-5493bb166/";

export default function Contact() {
  const { t } = useLanguage();

  const contactOptions = [
    {
      icon: Mail, iconColor: "#FF6B35",
      title: t.contact.email_title,
      value: EMAIL,
      description: t.contact.email_desc,
      href: `mailto:${EMAIL}`,
      glowColor: "rgba(255,107,53,0.2)",
    },
    {
      icon: Phone, iconColor: "#00D4FF",
      title: t.contact.phone_title,
      value: PHONE,
      description: t.contact.phone_desc,
      href: `tel:+573115729607`,
      glowColor: "rgba(0,212,255,0.2)",
    },
    {
      icon: MapPin, iconColor: "#FF6B35",
      title: t.contact.location_title,
      value: t.contact.location_value,
      description: t.contact.location_desc,
      href: null,
      glowColor: "rgba(255,107,53,0.15)",
    },
  ];

  const socialLinks = [
    { icon: GitBranch, label: "GitHub", href: GITHUB },
    { icon: Link2, label: "LinkedIn", href: LINKEDIN },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A0E27 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "#FF6B35", fontFamily: "var(--font-inter)" }}>
            {t.contact.label}
          </p>
          <h2 className="text-4xl font-bold text-[#F5F7FA] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            {t.contact.heading}
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((opt, i) => {
            const Icon = opt.icon;
            const content = (
              <>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${opt.iconColor}18` }}>
                  <Icon size={22} color={opt.iconColor} />
                </div>
                <h3 className="text-base font-semibold text-[#F5F7FA] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                  {opt.title}
                </h3>
                <p className="text-sm font-medium mb-2 break-all" style={{ color: opt.iconColor, fontFamily: "var(--font-inter)" }}>
                  {opt.value}
                </p>
                <p className="text-xs text-[#6B7280]" style={{ fontFamily: "var(--font-inter)" }}>
                  {opt.description}
                </p>
              </>
            );

            const sharedMotion = {
              className: "rounded-2xl p-6 border border-[#374151]/50 block",
              style: { background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(26,40,80,0.5) 100%)" },
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              whileHover: { scale: 1.05, borderColor: opt.iconColor, boxShadow: `0 0 30px ${opt.glowColor}` },
            };

            return opt.href ? (
              <motion.a key={opt.title} href={opt.href} {...sharedMotion}>
                {content}
              </motion.a>
            ) : (
              <motion.div key={opt.title} {...sharedMotion}>
                {content}
              </motion.div>
            );
          })}
        </div>

        {/* CTA + Socials */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary email CTA — native <a> for guaranteed mailto behavior */}
          <motion.a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg"
            style={{ background: "#FF6B35", color: "#0F172A", fontFamily: "var(--font-poppins)" }}
            whileHover={{ scale: 1.07, boxShadow: "0 0 50px rgba(255,107,53,0.5), 0 0 100px rgba(255,107,53,0.2)" }}
            whileTap={{ scale: 0.96 }}
          >
            <Send size={18} />
            {t.contact.cta}
          </motion.a>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[#374151]/50 text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5, borderColor: "#FF6B35" }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

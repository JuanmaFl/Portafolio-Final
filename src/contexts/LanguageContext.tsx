"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type Locale, translations } from "@/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Locale | null;
    if (saved && ["en", "es", "pt"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("portfolio-locale", l);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as typeof translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

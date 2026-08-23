import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../i18n/translations.jsx";

const LanguageContext = createContext(null);
const STORAGE_KEY = "jezeryshop_lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "dz" || saved === "fr" ? saved : "fr";
    } catch {
      return "fr";
    }
  });

  const dict = translations[lang];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("dir", dict.dir);
    document.documentElement.setAttribute("lang", dict.htmlLang);
  }, [lang, dict]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage doit être utilisé dans LanguageProvider");
  }
  return ctx;
}

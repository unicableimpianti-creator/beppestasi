import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "it" | "en";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "it", toggle: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("it");
  const toggle = () => setLang((l) => (l === "it" ? "en" : "it"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation helper
type Translations = { it: string; en: string };
export const t = (translations: Translations, lang: Lang) => translations[lang];

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { exhibitions, exhibitionDecades } from "@/data/content";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const ExhibitionsSection = () => {
  const { lang } = useLanguage();
  const [activeDecade, setActiveDecade] = useState(0);

  const decade = exhibitionDecades[activeDecade];
  const filtered = exhibitions.filter(
    (e) => e.year >= decade.start && e.year <= decade.end
  );

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      {/* Current & Upcoming */}
      <SectionTitle>
        {lang === "it" ? "ATTUALI E PROSSIME" : "CURRENT & UPCOMING"}
      </SectionTitle>
      <div className="mb-12 min-h-[40px]">
        <p className="text-sm font-body text-muted-foreground">
          {lang === "it"
            ? "Nessuna mostra in programma al momento"
            : "No exhibitions currently scheduled"}
        </p>
      </div>

      {/* Past Exhibitions */}
      <SectionTitle>
        {lang === "it" ? "MOSTRE PASSATE" : "PAST EXHIBITIONS"}
      </SectionTitle>

      {/* Decade tabs */}
      <div className="flex gap-6 mb-10">
        {exhibitionDecades.map((d, i) => (
          <button
            key={d.label}
            onClick={() => setActiveDecade(i)}
            className={`text-[13px] font-nav tracking-[0.1em] pb-1 transition-colors ${
              activeDecade === i
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Exhibition grid — 2 columns like rbkitaj */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {filtered.map((ex, i) => (
          <motion.div
            key={`${ex.title}-${ex.year}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h5 className="font-body font-semibold text-sm text-foreground leading-snug">
              {ex.title}
            </h5>
            <div className="mt-2 space-y-0.5">
              <p className="text-sm font-body text-foreground">{ex.year}</p>
              <p className="text-sm font-body text-foreground">{ex.venue}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm font-body text-muted-foreground">
          {lang === "it" ? "Nessuna mostra in questo periodo" : "No exhibitions in this period"}
        </p>
      )}
    </section>
  );
};

export default ExhibitionsSection;

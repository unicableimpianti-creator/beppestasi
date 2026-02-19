import { useLanguage } from "@/contexts/LanguageContext";
import { paperWorks } from "@/data/content";
import { motion } from "framer-motion";

const PaperSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="paper" className="py-24 md:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground mb-16 text-center">
          {lang === "it" ? "Opere su carta" : "Works on paper"}
        </h2>

        {/* Masonry grid with placeholders */}
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {paperWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="break-inside-avoid cursor-pointer group"
            >
              <div
                className="w-full bg-muted border border-border hover:border-primary/30 transition-colors flex items-center justify-center"
                style={{ aspectRatio: i % 2 === 0 ? "3/4" : "4/5" }}
              >
                <span className="text-xs text-muted-foreground letter-spaced uppercase font-body">
                  {lang === "it" ? "Immagine" : "Image"} {work.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaperSection;

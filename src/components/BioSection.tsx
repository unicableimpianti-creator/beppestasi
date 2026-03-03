import { useLanguage } from "@/contexts/LanguageContext";
import { bio } from "@/data/content";
import { motion } from "framer-motion";

const BioSection = () => {
  const { lang } = useLanguage();
  const paragraphs = bio[lang];

  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[40%] flex-shrink-0"
          >
            <div className="aspect-[3/4] w-full max-w-[400px] bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-body uppercase tracking-[0.15em]">
                {lang === "it" ? "Foto profilo" : "Profile photo"}
              </span>
            </div>
          </motion.div>

          {/* Bio text */}
          <div className="flex-1 space-y-6 lg:pt-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-8"
            >
              {lang === "it" ? "BIOGRAFIA" : "BIOGRAPHY"}
            </motion.h2>
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="text-sm leading-[1.8] text-foreground font-body text-justify"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;

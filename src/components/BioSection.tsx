import { useLanguage } from "@/contexts/LanguageContext";
import { bio } from "@/data/content";
import { motion } from "framer-motion";

const BioSection = () => {
  const { lang } = useLanguage();
  const paragraphs = bio[lang];

  return (
    <section className="py-12 md:py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Profile photo placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-72 flex-shrink-0"
          >
            <div className="aspect-[3/4] w-full max-w-[280px] mx-auto md:mx-0 bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                {lang === "it" ? "Foto profilo" : "Profile photo"}
              </span>
            </div>
          </motion.div>

          {/* Bio text */}
          <div className="space-y-5 flex-1">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="text-sm leading-relaxed text-foreground font-body"
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

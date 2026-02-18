import { useLanguage } from "@/contexts/LanguageContext";
import { bio } from "@/data/content";
import { motion } from "framer-motion";

const BioSection = () => {
  const { lang } = useLanguage();
  const paragraphs = bio[lang];

  return (
    <section id="bio" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-black mb-16 text-gradient"
        >
          {lang === "it" ? "Biografia" : "Biography"}
        </motion.h2>

        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg md:text-xl leading-relaxed text-muted-foreground font-body"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default BioSection;

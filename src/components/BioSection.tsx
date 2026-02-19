import { useLanguage } from "@/contexts/LanguageContext";
import { bio } from "@/data/content";
import { motion } from "framer-motion";

const BioSection = () => {
  const { lang } = useLanguage();
  const paragraphs = bio[lang];

  return (
    <section id="bio" className="py-24 md:py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground mb-16 text-center">
          Bio
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Profile photo placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-64 flex-shrink-0"
          >
            <div className="aspect-[3/4] w-full max-w-[260px] mx-auto bg-muted border border-border flex items-center justify-center">
              <span className="text-xs text-muted-foreground letter-spaced uppercase font-body">
                {lang === "it" ? "Foto profilo" : "Profile photo"}
              </span>
            </div>
          </motion.div>

          {/* Bio text */}
          <div className="space-y-5 flex-1">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-sm md:text-base leading-relaxed text-muted-foreground font-body"
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

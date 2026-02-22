import { useLanguage } from "@/contexts/LanguageContext";
import { paperWorks } from "@/data/content";
import { motion } from "framer-motion";

const PaperSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-8 md:py-12 px-6 md:px-10">
      <div className="max-w-4xl mx-auto space-y-20 md:space-y-32">
        {paperWorks.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="cursor-pointer"
          >
            <div
              className="w-full bg-muted flex items-center justify-center"
              style={{ aspectRatio: i % 2 === 0 ? "3/4" : "4/5" }}
            >
              <span className="text-sm text-muted-foreground font-body">
                {lang === "it" ? "Immagine" : "Image"} {work.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PaperSection;

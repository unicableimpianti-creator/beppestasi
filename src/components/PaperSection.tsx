import { useLanguage } from "@/contexts/LanguageContext";
import { paperWorks } from "@/data/content";
import { motion } from "framer-motion";

const PaperSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {paperWorks.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="cursor-pointer group"
          >
            <div
              className="w-full bg-muted flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <span className="text-sm text-muted-foreground font-body group-hover:opacity-70 transition-opacity">
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

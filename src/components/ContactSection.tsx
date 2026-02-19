import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_URL } from "@/data/content";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="contatti" className="py-32 md:py-48 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground mb-16">
          {lang === "it" ? "Contatti" : "Contacts"}
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body letter-spaced text-muted-foreground hover:text-foreground transition-colors"
          >
            whatsapp
          </a>

          <div className="flex flex-col items-center gap-6 text-sm font-body text-muted-foreground">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="letter-spaced hover:text-foreground transition-colors"
            >
              instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

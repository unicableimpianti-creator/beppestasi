import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_URL } from "@/data/content";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">
              {lang === "it" ? "Contatti" : "Contact"}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground font-body text-sm hover:text-primary transition-colors"
            >
              WhatsApp →
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground font-body text-sm hover:text-primary transition-colors"
            >
              Instagram →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

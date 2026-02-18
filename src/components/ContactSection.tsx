import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_URL } from "@/data/content";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="contatti" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-black mb-8 text-gradient"
        >
          {lang === "it" ? "Contatti" : "Contact"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-md mx-auto"
        >
          {lang === "it"
            ? "Per informazioni su opere, commissioni o collaborazioni, contattami su WhatsApp."
            : "For information about works, commissions or collaborations, contact me on WhatsApp."}
        </motion.p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-600/25"
        >
          <MessageCircle className="w-6 h-6" />
          {lang === "it" ? "Scrivimi su WhatsApp" : "Message me on WhatsApp"}
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.4em] text-muted-foreground mb-6 font-body"
        >
          {lang === "it" ? "Pittore · Illustratore · Docente" : "Painter · Illustrator · Teacher"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] font-black leading-none tracking-tight"
        >
          <span className="text-gradient">BEPPE</span>
          <br />
          <span className="text-foreground">STASI</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="w-32 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 text-muted-foreground font-body text-lg italic max-w-md mx-auto"
        >
          {lang === "it"
            ? "\"La liquidità del colore\""
            : "\"The liquidity of color\""}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted-foreground/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

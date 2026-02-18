import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { navLinks, WHATSAPP_URL } from "@/data/content";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold tracking-wider text-gradient">
          BEPPE STASI
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              {lang === "it" ? link.it : link.en}
            </button>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-xs font-bold border border-primary/50 rounded-full px-3 py-1 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="text-xs font-bold border border-primary/50 rounded-full px-3 py-1 text-primary">
            {lang === "it" ? "EN" : "IT"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground uppercase tracking-widest"
                >
                  {lang === "it" ? link.it : link.en}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-500"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { navLinks } from "@/data/content";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-sm font-body font-semibold letter-spaced uppercase text-foreground"
        >
          BEPPE STASI
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {lang === "it" ? link.it : link.en}
            </button>
          ))}
          <button
            onClick={toggle}
            className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggle}
            className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-8 h-px bg-border" />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-xs font-body font-medium letter-spaced uppercase text-muted-foreground hover:text-foreground"
                >
                  {lang === "it" ? link.it : link.en}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

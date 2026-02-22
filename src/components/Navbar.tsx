import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { navLinks } from "@/data/content";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-base md:text-lg tracking-wide text-foreground"
        >
          BEPPE STASI
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`text-[13px] font-body font-medium uppercase tracking-wider transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {lang === "it" ? link.it : link.en}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="text-[13px] font-body font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggle}
            className="text-[13px] font-body font-medium uppercase tracking-wider text-muted-foreground"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden bg-background overflow-hidden border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-[13px] font-body font-medium uppercase tracking-wider ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {lang === "it" ? link.it : link.en}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

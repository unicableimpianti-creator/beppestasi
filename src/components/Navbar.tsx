import { useState } from "react";
import { navLinks } from "@/data/content";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-base md:text-lg tracking-[0.15em] text-foreground"
        >
          BEPPE STASI
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`text-[13px] font-nav tracking-[0.15em] transition-colors pb-1 ${
                location.pathname === link.path
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-foreground hover:border-b-2 hover:border-foreground border-b-2 border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
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
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-[13px] font-nav tracking-[0.15em] ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
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

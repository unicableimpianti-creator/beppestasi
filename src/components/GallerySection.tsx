import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { artworks } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const placeholderColors = [
  "from-primary/30 to-accent/20",
  "from-accent/30 to-primary/20",
  "from-primary/20 to-secondary",
  "from-secondary to-accent/30",
  "from-accent/20 to-primary/30",
  "from-primary/30 to-secondary",
];

const GallerySection = () => {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  return (
    <section id="opere" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-black mb-16 text-gradient"
        >
          {lang === "it" ? "Opere" : "Works"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(work)}
              className="group cursor-pointer relative aspect-[4/5] rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
            >
              {/* Placeholder gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[i % placeholderColors.length]}`} />

              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground/20 italic">{work.title}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 artwork-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{work.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{work.year}</p>
                </div>
              </div>

              {/* Scale effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl font-bold text-gradient">
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selected?.year} · {selected?.technique[lang]}
            </DialogDescription>
          </DialogHeader>
          <div className={`aspect-[4/5] rounded-md bg-gradient-to-br ${selected ? placeholderColors[(selected.id - 1) % placeholderColors.length] : ""} flex items-center justify-center`}>
            <span className="font-display text-3xl text-foreground/20 italic">{selected?.title}</span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;

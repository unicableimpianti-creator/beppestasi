import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { artworks } from "@/data/content";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const GallerySection = () => {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  return (
    <section id="paintings" className="py-24 md:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-body font-medium letter-spaced uppercase text-muted-foreground mb-16 text-center">
          {lang === "it" ? "Dipinti" : "Paintings"}
        </h2>

        {/* Masonry-like grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {artworks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setSelected(work)}
              className="group cursor-pointer break-inside-avoid"
            >
              {/* Placeholder image */}
              <div
                className="w-full bg-muted border border-border hover:border-primary/30 transition-colors flex items-center justify-center"
                style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}
              >
                <span className="text-xs text-muted-foreground letter-spaced uppercase font-body">
                  {work.title}
                </span>
              </div>
              <div className="mt-2 mb-6">
                <p className="text-xs text-muted-foreground font-body">
                  {work.title} — {work.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold">
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              {selected?.year} · {selected?.technique[lang]}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-[4/5] w-full bg-muted border border-border flex items-center justify-center">
            <span className="text-sm text-muted-foreground letter-spaced uppercase font-body">
              {selected?.title}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { artworks } from "@/data/content";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const GallerySection = () => {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  return (
    <section className="py-8 md:py-12 px-6 md:px-10">
      <div className="max-w-4xl mx-auto space-y-20 md:space-y-32">
        {artworks.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => setSelected(work)}
            className="cursor-pointer"
          >
            {/* Placeholder image */}
            <div
              className="w-full bg-muted flex items-center justify-center"
              style={{ aspectRatio: i % 2 === 0 ? "4/3" : "3/4" }}
            >
              <span className="text-sm text-muted-foreground font-body">
                {work.title}
              </span>
            </div>
            <p className="mt-4 font-caption text-sm md:text-base text-muted-foreground">
              {work.title}, {work.technique[lang]}, {work.year}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl bg-background border-border p-2">
          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="font-caption text-xl">
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm font-body">
              {selected?.technique[lang]}, {selected?.year}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-[4/5] w-full bg-muted flex items-center justify-center">
            <span className="text-sm text-muted-foreground font-body">
              {selected?.title}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;

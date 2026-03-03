import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { artworks } from "@/data/content";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const GallerySection = () => {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {artworks.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(work)}
            className="cursor-pointer group"
          >
            <div
              className="w-full bg-muted flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <span className="text-sm text-muted-foreground font-body group-hover:opacity-70 transition-opacity">
                {work.title}
              </span>
            </div>
            <div className="mt-3 space-y-0.5">
              <p className="font-body text-sm text-foreground">
                <span className="font-caption">{work.title}</span>, {work.year}
              </p>
              <p className="font-body text-sm text-foreground">
                {work.technique[lang]}
              </p>
            </div>
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

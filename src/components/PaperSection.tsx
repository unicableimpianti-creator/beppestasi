import { useState } from "react";
import { paperWorks } from "@/data/content";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Import images
import octopus from "@/assets/paper/octopus.jpg";
import untitled from "@/assets/paper/untitled.jpg";

const imageMap: Record<string, string> = {
  "octopus.jpg": octopus,
  "untitled.jpg": untitled,
};

const PaperSection = () => {
  const [selected, setSelected] = useState<(typeof paperWorks)[0] | null>(null);

  const getDetails = (work: typeof paperWorks[0]) => {
    const parts: string[] = [];
    if (work.technique) parts.push(work.technique);
    if (work.dimensions) parts.push(work.dimensions);
    if (work.year) parts.push(String(work.year));
    return parts.join(", ");
  };

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {paperWorks.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(work)}
            className="cursor-pointer group"
          >
            <div className="w-full overflow-hidden">
              <img
                src={imageMap[work.image]}
                alt={work.title}
                className="w-full h-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="mt-3 space-y-0.5">
              <p className="font-body text-sm text-foreground">
                <span className="font-caption">{work.title}</span>
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {getDetails(work)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl bg-background border-border p-2">
          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="font-caption text-xl">
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm font-body">
              {selected ? getDetails(selected) : ""}
            </DialogDescription>
          </DialogHeader>
          {selected && (
            <img
              src={imageMap[selected.image]}
              alt={selected.title}
              className="w-full h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PaperSection;

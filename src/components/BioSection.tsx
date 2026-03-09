import { bio } from "@/data/content";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const BioSection = () => {
  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      <SectionTitle>BIOGRAPHY</SectionTitle>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[35%] flex-shrink-0"
        >
          <div className="aspect-[3/4] w-full max-w-[380px] bg-muted flex items-center justify-center">
            <span className="text-xs text-muted-foreground font-nav tracking-[0.15em]">
              PHOTO
            </span>
          </div>
        </motion.div>

        <div className="flex-1 space-y-5">
          {bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-sm leading-[1.8] text-foreground font-body text-justify"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioSection;

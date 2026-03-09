import { exhibitions } from "@/data/content";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const ExhibitionGrid = ({ items }: { items: typeof exhibitions }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
    {items.map((ex, i) => (
      <motion.div
        key={`${ex.title}-${ex.year}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
      >
        <h5 className="font-body font-semibold text-sm text-foreground leading-snug">
          {ex.title}
        </h5>
        <div className="mt-2 space-y-0.5">
          <p className="text-sm font-body text-foreground">{ex.year}</p>
          <p className="text-sm font-body text-foreground">{ex.venue}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const ExhibitionsSection = () => {
  const soloExhibitions = exhibitions.filter((e) => e.type === "solo");
  const groupExhibitions = exhibitions.filter((e) => e.type === "group");

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      <SectionTitle>MAIN SOLO SHOWS</SectionTitle>
      <div className="mb-16">
        {soloExhibitions.length > 0 ? (
          <ExhibitionGrid items={soloExhibitions} />
        ) : (
          <p className="text-sm font-body text-muted-foreground">No solo exhibitions</p>
        )}
      </div>

      <SectionTitle>MAIN GROUP SHOWS</SectionTitle>
      <div>
        {groupExhibitions.length > 0 ? (
          <ExhibitionGrid items={groupExhibitions} />
        ) : (
          <p className="text-sm font-body text-muted-foreground">No group exhibitions</p>
        )}
      </div>
    </section>
  );
};

export default ExhibitionsSection;

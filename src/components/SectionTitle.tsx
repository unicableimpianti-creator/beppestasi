interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <div className="section-title-line mb-8">
    <h2 className="font-nav text-sm md:text-base tracking-[0.15em] text-foreground whitespace-nowrap">
      {children}
    </h2>
  </div>
);

export default SectionTitle;

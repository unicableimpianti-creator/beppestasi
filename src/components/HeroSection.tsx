import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="pt-8 pb-4 px-6 md:px-10">
      <p className="text-sm text-muted-foreground font-body">
        {lang === "it"
          ? "Pittore · Illustratore · Docente"
          : "Painter · Illustrator · Teacher"}
      </p>
    </section>
  );
};

export default HeroSection;

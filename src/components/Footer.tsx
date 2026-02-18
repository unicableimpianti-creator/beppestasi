import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display italic">© {new Date().getFullYear()} Beppe Stasi</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.galleriaellebi.com/giuseppe-stasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Galleria Ellebi
          </a>
          <a
            href="https://www.scuolaromanadeifumetti.it/docenti/beppe-stasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {lang === "it" ? "Scuola Romana dei Fumetti" : "Roman School of Comics"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

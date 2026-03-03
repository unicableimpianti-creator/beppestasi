import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const { lang } = useLanguage();

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
        {/* Hero section — large painting + quote */}
        <section className="pt-[88px]">
          <div className="flex flex-col lg:flex-row">
            {/* Featured painting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full lg:w-[60%] xl:w-[55%]"
            >
              <div className="aspect-square w-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground font-body">
                  {lang === "it" ? "Opera in evidenza" : "Featured work"}
                </span>
              </div>
            </motion.div>

            {/* Quote + artwork details */}
            <div className="w-full lg:w-[40%] xl:w-[45%] px-8 md:px-12 lg:px-16 py-10 lg:py-16 flex flex-col justify-between">
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground text-justify"
              >
                {lang === "it"
                  ? "\"Non ascoltate gli sciocchi che dicono che i ritratti non hanno importanza, o che la pittura è morta. C'è ancora molto da fare.\""
                  : "\"Don't listen to the fools who say that pictures of people can be of no consequence, or that painting is dead. There is much to be done.\""}
              </motion.blockquote>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 font-serif text-base text-right text-foreground"
              >
                — Beppe Stasi
              </motion.p>

              {/* Artwork details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-auto pt-16 lg:pt-24 space-y-1"
              >
                <p className="font-caption text-sm text-foreground">
                  Penziere mieje, 2021
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {lang === "it" ? "olio su tela" : "oil on canvas"}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {lang === "it" ? "collezione privata" : "private collection"}
                </p>

                <Link
                  to="/paintings"
                  className="inline-block mt-4 text-xs font-body font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                >
                  {lang === "it"
                    ? "Scopri le altre opere →"
                    : "See more work →"}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;

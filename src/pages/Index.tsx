import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
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
        <section className="pt-[76px]">
          <div className="flex flex-col lg:flex-row">
            {/* Featured painting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full lg:w-[62%]"
            >
              <div
                className="w-full bg-muted flex items-center justify-center"
                style={{ height: "calc(100vmin - 100px)", maxHeight: "61.4vw", minHeight: "320px" }}
              >
                <span className="text-sm text-muted-foreground font-body">
                  {lang === "it" ? "Opera in evidenza" : "Featured work"}
                </span>
              </div>
            </motion.div>

            {/* Quote + artwork details */}
            <div className="w-full lg:w-[38%] px-8 md:px-10 lg:px-12 py-10 lg:py-14 flex flex-col justify-between">
              <div>
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-quote text-base md:text-lg lg:text-xl leading-relaxed text-foreground text-justify"
                >
                  {lang === "it"
                    ? "\u201CNon ascoltate gli sciocchi che dicono che i ritratti non hanno importanza, o che la pittura è morta. C'è ancora molto da fare.\u201D"
                    : "\u201CDon't listen to the fools who say that pictures of people can be of no consequence, or that painting is dead. There is much to be done.\u201D"}
                </motion.blockquote>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-4 font-body text-sm text-right text-foreground"
                >
                  - BEPPE STASI
                </motion.p>
              </div>

              {/* Artwork tombstone */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-auto pt-12 lg:pt-20 space-y-0.5"
              >
                <p className="font-body text-sm text-foreground">
                  <span className="font-caption">Penziere mieje</span>, 2021
                </p>
                <p className="font-body text-sm text-foreground">
                  {lang === "it" ? "olio su tela" : "oil on canvas"}
                </p>
                <p className="font-body text-sm text-foreground">
                  {lang === "it" ? "collezione privata" : "private collection"}
                </p>

                <Link
                  to="/paintings"
                  className="inline-block mt-3 text-sm font-body text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                >
                  {lang === "it"
                    ? "Scopri le altre opere"
                    : "See more work from this period"}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEWS section */}
        <section className="px-6 md:px-10 lg:px-14 py-10">
          <SectionTitle>NEWS</SectionTitle>
          <div className="pt-4 space-y-2">
            <h3 className="font-quote text-base text-foreground">
              {lang === "it" ? "Inverno 2025" : "Winter 2025"}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm font-body text-foreground">
              <li>
                {lang === "it"
                  ? "Nuove opere disponibili in studio a Roma"
                  : "New works available at the Rome studio"}
              </li>
              <li>
                {lang === "it"
                  ? "In preparazione la prossima mostra personale"
                  : "Upcoming solo exhibition in preparation"}
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;

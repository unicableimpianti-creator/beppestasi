import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { artworks } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = artworks[currentIndex];

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-[76px]">
          <div className="relative w-full" style={{ height: "calc(100vh - 76px)", minHeight: "400px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-muted flex items-center justify-center"
              >
                <span className="text-sm text-muted-foreground font-body">
                  {current.title}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Artwork info overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-8 md:px-10 lg:px-14 py-8 bg-gradient-to-t from-background/80 to-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-1"
                >
                  <p className="font-body text-sm text-foreground">
                    <span className="font-caption">{current.title}</span>, {current.year}
                  </p>
                  <p className="font-body text-sm text-foreground">
                    {current.technique}
                  </p>
                </motion.div>
              </AnimatePresence>

              <Link
                to="/paintings"
                className="inline-block mt-4 text-sm font-body text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
              >
                See more works
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;

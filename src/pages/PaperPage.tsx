import Navbar from "@/components/Navbar";
import PaperSection from "@/components/PaperSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const PaperPage = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-[76px]">
      <Navbar />
      <PaperSection />
      <Footer />
    </main>
  </PageTransition>
);

export default PaperPage;

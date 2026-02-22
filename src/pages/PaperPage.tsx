import Navbar from "@/components/Navbar";
import PaperSection from "@/components/PaperSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const PaperPage = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-16">
      <Navbar />
      <PaperSection />
      <Footer />
    </main>
  </PageTransition>
);

export default PaperPage;

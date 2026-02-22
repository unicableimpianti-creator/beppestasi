import Navbar from "@/components/Navbar";
import BioSection from "@/components/BioSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const BioPage = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-16">
      <Navbar />
      <BioSection />
      <Footer />
    </main>
  </PageTransition>
);

export default BioPage;

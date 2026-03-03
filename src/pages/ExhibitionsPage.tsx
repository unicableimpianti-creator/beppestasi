import Navbar from "@/components/Navbar";
import ExhibitionsSection from "@/components/ExhibitionsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ExhibitionsPage = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-[76px]">
      <Navbar />
      <ExhibitionsSection />
      <Footer />
    </main>
  </PageTransition>
);

export default ExhibitionsPage;

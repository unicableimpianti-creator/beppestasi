import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import PaperSection from "@/components/PaperSection";
import BioSection from "@/components/BioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <PaperSection />
      <BioSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

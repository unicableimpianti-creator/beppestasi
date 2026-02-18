import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BioSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-16">
      <Navbar />
      <GallerySection />
      <Footer />
    </main>
  </PageTransition>
);

export default Index;

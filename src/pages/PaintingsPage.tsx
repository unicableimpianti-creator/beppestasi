import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const PaintingsPage = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <GallerySection />
      <Footer />
    </main>
  </PageTransition>
);

export default PaintingsPage;

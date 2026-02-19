import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => (
  <PageTransition>
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  </PageTransition>
);

export default ContactPage;


import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactHero from './components/ContactHero';
import ContactInfoCards from './components/ContactInfoCards';
import ContactFormSection from './components/ContactFormSection';
import BookCallCTA from './components/BookCallCTA';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <BookCallCTA />
      <Footer />
    </div>
  );
}

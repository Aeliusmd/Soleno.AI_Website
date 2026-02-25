
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import TechStackSection from './components/TechStackSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans" id='services'>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <TechStackSection />
      <Footer />
    </div>
  );
}

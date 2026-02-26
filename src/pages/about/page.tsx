
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import PillarsSection from './components/PillarsSection';
import StatsSection from './components/StatsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <PillarsSection />
      <Footer />
    </div>
  );
}

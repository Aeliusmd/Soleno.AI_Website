
import logoImage from '../../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 
      bg-[rgba(23,0,63,0.76)] 
      backdrop-blur-md 
      shadow-sm 
      transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-1 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/#home">
            <img src={logoImage} alt="logo" className="h-6 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm text-white hover:text-[#FB923C] transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
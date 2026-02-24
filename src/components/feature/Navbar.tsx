
import logoImage from '../../assets/images/logo.png';

export default function Navbar() {
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
          <img src={logoImage} alt="logo" className="h-6 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Services", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white hover:text-[#FB923C] transition-colors cursor-pointer whitespace-nowrap"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
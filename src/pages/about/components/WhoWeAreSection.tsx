
import { useEffect, useRef, useState } from 'react';
import sec2HeroSection from '../../../assets/images/sec2aboutus.png';

const checkItems = [
  'Innovation-Driven',
  'Customer-Focused',
  'Data-Driven',
  'Efficiency Experts',
];

export default function WhoWeAreSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={sec2HeroSection}
                  alt="Who We Are - AI Technology"
                  className="w-full h-[480px] object-cover object-top"
                />
              </div>
              {/* Floating decorative elements */}
              <div 
                className="absolute -top-4 -right-4 flex items-center justify-center"
                style={{
                  width: '113.546875px',
                  height: '94px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  borderRadius: '16px',
                  padding: '21px',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #7E22CE 100%)',
                  border: '1px solid #A78BFA4D',
                  boxShadow: '0px 20px 25px -5px #8B5CF64D, 0px 8px 10px -6px #8B5CF64D'
                }}
              >
                <div className="flex flex-col items-start">
                  <span className="text-white text-2xl font-bold leading-none">2019</span>
                  <span className="text-white text-xs mt-1">Founded</span>
                </div>
              </div>
              <div className="absolute top-1/3 -left-6 w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center shadow-lg border border-rose-200">
                <i className="ri-shield-check-fill text-rose-400 text-lg"></i>
              </div>
              <div className="absolute bottom-1/3 -right-5 w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center shadow-lg border border-teal-200">
                <i className="ri-code-s-slash-fill text-teal-500 text-lg"></i>
              </div>
              <div className="absolute -bottom-4 left-1/4 w-12 h-12 bg-amber-100 rounded-lg rotate-6 flex items-center justify-center shadow-lg border border-amber-200">
                <i className="ri-database-2-fill text-amber-500 text-lg"></i>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <span className="text-sm font-semibold text-violet-600 tracking-widest uppercase mb-3 block">
              Who we are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              Who we are
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              Soleno AI is a US-based company dedicated to providing intelligent,
              practical AI solutions that help businesses work smarter, grow
              faster, and solve real‑world challenges.
            </p>

            <ul className="space-y-4 mb-10">
              {checkItems.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + i * 120}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                  <span className="text-neutral-800 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact-cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              Contact Us
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

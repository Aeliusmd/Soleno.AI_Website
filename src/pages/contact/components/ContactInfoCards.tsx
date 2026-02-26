
import { useEffect, useRef, useState } from 'react';

const contactInfo = [
  {
    icon: 'ri-map-pin-line',
    title: 'Our Address',
    description: '527 E Rowland St, Suite 100A, Covina, CA 91723, United States',
    link: null,
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    icon: 'ri-phone-line',
    title: 'Contact Info',
    description: 'Open a chat or give us call at',
    link: { text: '(626)788-0488', href: 'tel:6267880488' },
    gradient: 'from-amber-400 to-orange-5',
    bgGradient: 'from-amber-50 to-orange-50',
  },
  {
    icon: 'ri-mail-send-line',
    title: 'Reach Us by Email',
    description: 'Send us an email at',
    link: { text: 'medcube@email.cm', href: 'mailto:medcube@email.cm' },
    gradient: 'from-cyan-400 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-50',
  },
];

export default function ContactInfoCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Guard against environments where IntersectionObserver is not available
    if (typeof IntersectionObserver === 'undefined') {
      // If not supported, simply show the cards
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Ensure we have at least one entry
        if (entries && entries.length > 0 && entries[0].isIntersecting) {
          setVisible(true);
          // Once visible, we can stop observing
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-transparent hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500 text-center overflow-hidden cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <i className={`${item.icon} text-2xl text-white`} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-1">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    {item.link.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

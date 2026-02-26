
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    title: 'Our History',
    description:
      'Founded to bridge the gap between advanced technology and everyday business needs, Soleno AI has grown into a trusted provider of intelligent AI solutions.',
    color: 'bg-violet-500',
    borderColor: 'border-violet-500',
  },
  {
    title: 'Our Mission',
    description:
      'To empower businesses with smart, reliable AI tools that simplify operations, enhance decision‑making, and drive sustainable growth.',
    color: 'bg-amber-500',
    borderColor: 'border-amber-500',
  },
  {
    title: 'Our Vision',
    description:
      'To make AI accessible and practical for every business, transforming the way companies operate and innovate worldwide.',
    color: 'bg-teal-500',
    borderColor: 'border-teal-500',
  },
];

export default function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Guard against browsers that don’t support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          // Once visible, we can stop observing
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-neutral-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-8 border-t-4 ${pillar.borderColor}
                shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer
                group relative overflow-hidden
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`
                  absolute top-0 right-0 w-24 h-24 ${pillar.color}
                  opacity-5 rounded-full -translate-y-8 translate-x-8
                  group-hover:scale-150 transition-transform duration-500
                `}
              ></div>
              <div className="relative z-10">
                <div className={`w-2.5 h-2.5 ${pillar.color} rounded-full mb-5`}></div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-violet-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

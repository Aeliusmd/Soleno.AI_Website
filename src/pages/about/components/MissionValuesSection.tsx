
import React, { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Innovation First',
    description:
      'We push boundaries and explore new frontiers in AI to deliver solutions that set you apart from the competition.',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    hoverBorder: 'hover:border-violet-400',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Ethical AI',
    description:
      'We build responsible AI systems with transparency, fairness, and privacy at their core — because trust matters.',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400',
  },
  {
    icon: 'ri-team-line',
    title: 'Collaboration',
    description:
      'We work as an extension of your team, ensuring every solution aligns perfectly with your goals and culture.',
    gradient: 'from-teal-500 to-emerald-500',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    hoverBorder: 'hover:border-teal-400',
  },
  {
    icon: 'ri-rocket-2-line',
    title: 'Results Driven',
    description:
      'Every project is measured by the real impact it creates — from cost savings to revenue growth and beyond.',
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    hoverBorder: 'hover:border-rose-400',
  },
];

export default function MissionValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          // Once visible we can stop observing to avoid unnecessary callbacks
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    // Cleanup in case the component unmounts before intersection
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50/60 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mission */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
            <i className="ri-focus-3-line"></i>
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 max-w-3xl mx-auto leading-tight">
            Democratizing AI to Empower
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              Every Business on Earth
            </span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-base leading-relaxed">
            We believe every organization — from startups to enterprises — deserves
            access to world-class AI. Our mission is to make intelligent technology
            practical, affordable, and impactful for all.
          </p>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 border border-amber-200">
            <i className="ri-heart-3-line"></i>
            Our Values
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What Drives Us <span className="text-violet-600">Forward</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`
                group ${value.bg} rounded-2xl p-7 border ${value.border} ${value.hoverBorder}
                hover:shadow-lg transition-all duration-500 cursor-pointer relative overflow-hidden
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative z-10">
                <div
                  className={`
                    w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient}
                    flex items-center justify-center mb-5 shadow-lg
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                  `}
                >
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

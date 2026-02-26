
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 95,
    suffix: '%',
    label: 'of businesses report improved\nefficiency after integrating\nAI-driven automation.',
  },
  {
    value: 3,
    suffix: 'x Faster',
    label: 'decision-making powered by\nreal-time analytics and intelligent\ninsights.',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'customer support enabled\nthrough AI chatbots and\nautomated assistance tools.',
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = stats.map((s) => s.value);
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters(targets.map((t) => Math.floor(t * progress)));
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {counters[index]}
                <span className="text-amber-300">{stat.suffix}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

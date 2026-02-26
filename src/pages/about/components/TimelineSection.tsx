
import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    description:
      'SOLENO.AI was founded by a team of AI researchers with a vision to make intelligent technology accessible to every business.',
    metric: 'Seed Funded',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description:
      'Secured our first enterprise client and delivered a custom NLP solution that reduced their support costs by 40%.',
    metric: '10 Clients',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description:
      'Grew to 15 team members and opened our second office. Launched our proprietary AI model training platform.',
    metric: '15 Experts',
  },
  {
    year: '2022',
    title: 'Global Reach',
    description:
      'Expanded operations to 8 countries and partnered with leading cloud providers for scalable AI deployment.',
    metric: '8 Countries',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description:
      'Named "Top AI Startup" by TechVenture Magazine. Crossed 80+ successfully delivered projects milestone.',
    metric: '80+ Projects',
  },
  {
    year: '2024',
    title: 'Scaling New Heights',
    description:
      'Reached 50+ global clients across 12 countries with 120+ projects delivered and a 98% client satisfaction rate.',
    metric: '120+ Projects',
  },
];

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') ?? '0', 10);
            // Staggered reveal – each item appears a little later than the previous one
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, idx])]);
            }, idx * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = ref.current.querySelectorAll<HTMLElement>('[data-index]');
    items.forEach((item) => observer.observe(item));

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        console.error('Error disconnecting IntersectionObserver:', e);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-28 px-6 bg-neutral-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
            <i className="ri-time-line"></i>
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Milestones That <span className="text-violet-600">Define</span> Us
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            From a small team with a big dream to a global AI powerhouse — here&rsquo;s
            how we got here.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 via-purple-300 to-amber-300 hidden md:block"></div>

          <div className="space-y-10">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.includes(index);
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] w-full items-center">
                    <div className={isLeft ? '' : 'order-3'}>
                      {isLeft && (
                        <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 cursor-pointer group mr-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                              {milestone.year}
                            </span>
                            <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                              {milestone.metric}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-violet-600 transition-colors">
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center order-2">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20 border-4 border-white z-10">
                        <span className="text-xs font-bold text-white">
                          {milestone.year.slice(2)}
                        </span>
                      </div>
                    </div>

                    <div className={isLeft ? 'order-3' : ''}>
                      {!isLeft && (
                        <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 cursor-pointer group ml-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                              {milestone.year}
                            </span>
                            <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                              {milestone.metric}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-violet-600 transition-colors">
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white z-10 flex-shrink-0">
                        <span className="text-xs font-bold text-white">
                          {milestone.year.slice(2)}
                        </span>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-violet-300 to-purple-300 mt-2"></div>
                      )}
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm flex-1 mb-2">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                          {milestone.metric}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-neutral-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

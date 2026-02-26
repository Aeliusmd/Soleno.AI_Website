import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: 'ri-flashlight-line',
    title: 'AI-Powered Automation',
    description: 'Eliminate repetitive tasks and speed up workflows, giving your team more time to focus on strategic initiatives that drive growth.',
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-500/10 to-purple-600/10',
    features: ['Workflow Optimization', 'Task Scheduling', 'Process Mining'],
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Intelligent Analytics & Insights',
    description: 'Turn complex data into actionable insights that guide smarter, faster business decisions with real-time dashboards and reports.',
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-400/10 to-orange-500/10',
    features: ['Predictive Analytics', 'Data Visualization', 'Trend Detection'],
  },
  {
    icon: 'ri-settings-4-line',
    title: 'AI Integration & Support',
    description: 'Seamlessly integrate AI into your existing processes with ongoing support to ensure peak performance and continuous improvement.',
    gradient: 'from-cyan-400 to-teal-500',
    bgGradient: 'from-cyan-400/10 to-teal-500/10',
    features: ['API Integration', 'System Migration', '24/7 Monitoring'],
  },
  {
    icon: 'ri-tools-line',
    title: 'Custom AI Solutions',
    description: 'We build tailored AI tools based on your unique challenges — from predictive models to smart workflows that scale with your business.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    features: ['Custom Models', 'Bespoke Pipelines', 'Domain-Specific AI'],
  },
];

export default function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = gridRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-grid" className="py-24 px-6 bg-gradient-to-b from-neutral-50 via-violet-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-4 h-4 bg-violet-400 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
            <i className="ri-settings-3-line"></i>
            Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Powering Progress Through
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
            Intelligent AI Services
          </h3>
          <p className="text-neutral-500 mt-6 max-w-2xl mx-auto">
            Discover our comprehensive suite of AI solutions designed to transform your business operations and accelerate growth.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-white rounded-2xl p-6 border border-neutral-200 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <i className={`${service.icon} text-xl text-white`}></i>
                </div>

                <div className="absolute top-0 right-0 w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-white flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:text-violet-600 transition-colors">
                  0{index + 1}
                </div>

                <h4 className="text-base font-bold text-neutral-900 mb-2">
                  <a href="#inquiry" className="hover:text-violet-600 transition-colors">{service.title}</a>
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-2.5 py-1 bg-neutral-100 group-hover:bg-white/80 rounded-full text-xs text-neutral-500 group-hover:text-violet-600 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-violet-600 transition-colors">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>

              <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

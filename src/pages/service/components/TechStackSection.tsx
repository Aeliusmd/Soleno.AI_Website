
import { useEffect, useRef, useState } from 'react';

const technologies = [
  { icon: 'ri-robot-2-line', name: 'Machine Learning', description: 'Advanced ML algorithms for pattern recognition and prediction' },
  { icon: 'ri-brain-line', name: 'Deep Learning', description: 'Neural networks for complex data processing and analysis' },
  { icon: 'ri-translate-2', name: 'Natural Language', description: 'NLP solutions for text analysis and conversational AI' },
  { icon: 'ri-eye-line', name: 'Computer Vision', description: 'Image and video analysis for visual intelligence' },
  { icon: 'ri-database-2-line', name: 'Big Data', description: 'Scalable data pipelines and real-time processing' },
  { icon: 'ri-cloud-line', name: 'Cloud AI', description: 'Cloud-native AI deployment and infrastructure' },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '3x', label: 'Faster Deployment' },
  { value: '50+', label: 'AI Models Deployed' },
  { value: '24/7', label: 'Expert Support' },
];

export default function TechStackSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-white via-violet-50/50 to-amber-50/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              Technology Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              Built on
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                Cutting-Edge Tech
              </span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              We leverage the latest AI frameworks, cloud platforms, and data tools to build solutions that are robust, scalable, and future-proof.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-5 border border-violet-100 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-amber-500 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 border border-neutral-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-500 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4 group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-300">
                  <i className={`${tech.icon} text-xl text-violet-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                  <a href="#inquiry" className="hover:text-violet-600 transition-colors">{tech.name}</a>
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

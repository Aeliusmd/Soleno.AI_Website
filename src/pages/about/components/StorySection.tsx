
import { useEffect, useRef, useState } from 'react';

export default function StorySection() {
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
    <section
      id="our-story"
      ref={ref}
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=flat%20vector%20illustration%20style%20creative%20team%20working%20together%20on%20AI%20technology%20project%20purple%20violet%20and%20gold%20color%20palette%20minimalist%20design%20clean%20geometric%20shapes%20people%20collaborating%20around%20holographic%20display%20simple%20light%20background%20modern%20digital%20art%20illustration&width=640&height=520&seq=aboutstory001&orientation=landscape"
                alt="Our Story"
                className="w-full h-[480px] object-cover object-top"
              />
            </div>

            <div
              className={`absolute -top-5 -right-5 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-5 shadow-xl shadow-violet-500/30 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="text-3xl font-bold text-white">2019</div>
              <div className="text-xs text-violet-200">Founded</div>
            </div>

            <div
              className={`absolute -bottom-5 -left-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 shadow-xl shadow-amber-500/30 transition-all duration-700 delay-700 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-xs text-amber-100">Global Clients</div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              Our Story
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              From a Bold Vision to
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                Global AI Impact
              </span>
            </h2>

            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              SOLENO.AI was born from a simple belief: that artificial intelligence should be
              accessible, ethical, and transformative for every business. Founded in 2019 by a
              group of AI researchers and entrepreneurs, we set out to bridge the gap between
              cutting‑edge technology and real‑world business needs.
            </p>

            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              Today, we serve over 50 clients across 12 countries, delivering custom AI solutions
              that drive growth, efficiency, and innovation. Our team of 30+ experts combines deep
              technical expertise with a passion for solving complex challenges.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '120+', label: 'Projects Delivered' },
                { value: '12', label: 'Countries Served' },
                { value: '30+', label: 'AI Experts' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-center hover:border-violet-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-amber-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import service_hero from "../../../assets/images/service_hero_illustrator.png";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden min-h-[560px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20futuristic%20technology%20background%20with%20flowing%20purple%20violet%20and%20gold%20energy%20waves%20geometric%20neural%20network%20patterns%20dark%20space%20atmosphere%20with%20glowing%20particles%20and%20light%20streaks%20modern%20digital%20art%20wide%20panoramic%20composition&width=1600&height=600&seq=serviceshero001&orientation=landscape"
          alt="Services Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/70 via-purple-900/60 to-neutral-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Our AI
              <br />
              <span className="bg-gradient-to-r from-[#FB923C] to-[#FCD34D] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              From intelligent automation to custom AI solutions, we deliver cutting-edge technology that transforms how your business operates and grows.
            </p>
            <div className="flex gap-4">
              <a
                href="#services-grid"
                className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/30"
              >
                Explore Services
              </a>
              <a
                href="#inquiry"
                className="px-8 py-3.5 border-2 border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/20 to-amber-500/20 rounded-full blur-3xl"></div>
              <img
                src={service_hero}
                alt="AI Services Illustration"
                className="relative w-[500px] h-[450px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

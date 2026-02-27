import { motion } from "framer-motion";
import service_hero from "../../../assets/images/service_hero_illustrator.png";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden min-h-[560px] flex items-center">
     {/* Background Image with Enhanced Fade & Zoom Effect */}
<div className="absolute inset-0 z-0">
  <motion.img
    src="https://readdy.ai/api/search-image?query=abstract%20futuristic%20technology%20background%20with%20flowing%20purple%20violet%20and%20gold%20energy%20waves%20geometric%20neural%20network%20patterns%20dark%20space%20atmosphere%20with%20glowing%20particles%20and%20light%20streaks%20modern%20digital%20art%20wide%20panoramic%20composition&width=1600&height=600&seq=serviceshero001&orientation=landscape"
    alt="About Background"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ 
      duration: 1.5, // Faster initial reveal
      ease: "easeOut" 
    }}
    className="w-full h-full object-cover object-center"
  />
  
  {/* Gradient Overlay */}
  <div 
    className="absolute inset-0 z-[1]"
    style={{
      background: 'linear-gradient(0deg, rgba(76, 29, 149, 0.7) 0%, rgba(88, 28, 135, 0.6) 50%, rgba(23, 23, 23, 0.8) 100%)'
    }}
  ></div>
</div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Staggered Animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
            >
              Our AI
              <br />
              <span className="bg-gradient-to-r from-[#FB923C] to-[#FCD34D] bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed"
            >
              From intelligent automation to custom AI solutions, we deliver cutting-edge technology that transforms how your business operates and grows.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="#services-grid"
                className="group relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-violet-500/50 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/30"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                Explore Services
              </a>
              <a
                href="#inquiry"
                className="px-8 py-3.5 border-2 border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-neutral-900 hover:border-white transition-all cursor-pointer whitespace-nowrap"
              >
                Get a Quote
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Pulsing Glow behind image */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-8 bg-gradient-to-r from-violet-500/20 to-amber-500/20 rounded-full blur-3xl"
              ></motion.div>

              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={service_hero}
                alt="AI Services Illustration"
                className="relative w-[500px] h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
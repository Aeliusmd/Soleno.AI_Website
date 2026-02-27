import { motion } from "framer-motion";
import contactHero from '../../../assets/images/contact_hero.png';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden min-h-[560px] flex items-center">
      {/* 1. Ambient Background - Subtle Infinite Drift */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            scale: [1, 1.05, 1], // Constant slow breathing effect
          }}
          transition={{ 
            opacity: { duration: 1, ease: "easeOut" },
            scale: { duration: 2000000, repeat: Infinity, ease: "linear" } 
          }}
          src="https://readdy.ai/api/search-image?query=abstract%20futuristic%20technology%20background%20with%20flowing%20purple%20violet%20and%20gold%20energy%20waves%20geometric%20neural%20network%20patterns%20dark%20space%20atmosphere%20with%20glowing%20particles%20and%20light%20streaks%20modern%20digital%20art%20wide%20panoramic%20composition&width=1600&height=600&seq=contacthero001&orientation=landscape"
          alt="Contact Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/70 via-purple-900/60 to-neutral-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
            >
              Contact
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                Us
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed"
            >
              Have a question or ready to start your AI journey? Reach out to our team and let&apos;s discuss how we can transform your business together.
            </motion.p>

            {/* 2. Interactive & Ambient Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-4"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg shadow-violet-500/30 transition-all cursor-pointer whitespace-nowrap"
              >
                {/* Infinite Shimmer - Runs every 4 seconds automatically */}
                <motion.span 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                Send a Message
              </motion.a>

              <motion.a
                href="#book-call"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-white/30 text-white text-sm font-bold rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Call
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Ambient Illustration Glow */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* 3. Infinite Breathing Glow */}
              <motion.div 
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.3, 1] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -inset-10 bg-gradient-to-r from-violet-500/40 to-amber-500/40 rounded-full blur-[80px]"
              ></motion.div>
              
              <img
                src={contactHero}
                alt="Contact Illustration"
                className="relative w-[500px] h-[450px] object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
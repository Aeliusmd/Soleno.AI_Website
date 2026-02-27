import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutBg from '../../../assets/images/about-bg.png';

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: '705.3px' }}
    >
      {/* Background Image with Ken Burns Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutBg})`
        }}
      ></motion.div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(0deg, rgba(76, 29, 149, 0.7) 0%, rgba(88, 28, 135, 0.6) 50%, rgba(23, 23, 23, 0.8) 100%)'
        }}
      ></div>
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 text-center px-6">

        {/* Main Heading with Staggered Slide Up */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
        >
          Pioneering the Future of
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </motion.h1>

        {/* Description with Fade In */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          We are a team of innovators, engineers, and strategists dedicated to 
          transforming businesses through intelligent AI solutions that deliver 
          measurable impact.
        </motion.p>

        {/* CTA Buttons with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/about#story" 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40 whitespace-nowrap cursor-pointer"
          >
            {/* Shimmering highlight on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            Our Story
          </Link>

          <Link 
            to="/contact" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Bottom Accent - Animated Width */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left"
      ></motion.div>
    </section>
  );
}
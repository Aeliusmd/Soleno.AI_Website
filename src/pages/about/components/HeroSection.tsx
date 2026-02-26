
import { Link } from 'react-router-dom';
import aboutBg from '../../../assets/images/about-bg.png';

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: '705.3px' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutBg})`
        }}
      ></div>
        {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(0deg, rgba(76, 29, 149, 0.7) 0%, rgba(88, 28, 135, 0.6) 50%, rgba(23, 23, 23, 0.8) 100%)'
        }}
      ></div>
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm font-medium text-white">About SOLENO.AI</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          Pioneering the Future of
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
          We are a team of innovators, engineers, and strategists dedicated to 
          transforming businesses through intelligent AI solutions that deliver 
          measurable impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/about#story" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Our Story
          </Link>
          <Link 
            to="/contact" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500"></div>
    </section>
  );
}
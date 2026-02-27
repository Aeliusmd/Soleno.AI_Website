import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BookCallCTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Ambient Decorative Orbs - Continuous Motion */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 20, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/30 rounded-full blur-3xl"
          ></motion.div>

          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
          ></motion.div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Have Questions? Book a
                <br />
                Call <span className="text-amber-300">Today!</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden px-8 py-4 bg-white text-violet-700 text-sm font-bold rounded-full transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-900/30 inline-block"
              >
                {/* Fast Automatic Shimmer */}
                <motion.span 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-100/50 to-transparent"
                />
                
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Us Message
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
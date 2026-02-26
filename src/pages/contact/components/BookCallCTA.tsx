
import { Link } from 'react-router-dom';

export default function BookCallCTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Have Questions? Book a
                <br />
                Call <span className="text-amber-300">Today!</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-violet-700 text-sm font-semibold rounded-full hover:bg-neutral-100 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-900/30 hover:scale-105"
            >
              Send Us Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

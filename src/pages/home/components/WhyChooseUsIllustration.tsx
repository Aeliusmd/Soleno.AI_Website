
interface WhyChooseUsIllustrationProps {
  isVisible: boolean;
}

export default function WhyChooseUsIllustration({ isVisible }: WhyChooseUsIllustrationProps) {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${10 + (i * 6.5) % 80}%`,
    top: `${12 + (i * 8.1) % 76}%`,
    size: 2 + (i % 3),
    dx: (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 7),
    dy: -(15 + (i % 5) * 10),
    duration: 5 + (i % 4) * 1.8,
    delay: i * 0.7,
  }));

  return (
    <div className="relative w-full max-w-[580px] mx-auto">
      {/* Ambient glow behind */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/15 to-amber-500/15 rounded-3xl blur-2xl" style={{ animation: 'softGlow 6s ease-in-out infinite' }}></div>

      {/* Main container with slow camera drift */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/10 border border-violet-100"
        style={{ animation: isVisible ? 'wcuCameraDrift 28s ease-in-out infinite' : 'none' }}
      >
        {/* Main illustration image */}
        <img
          src="https://static.readdy.ai/image/306c0f034255580e0c7c21250ba38e98/ce2bf7407cb1bdecf9b22ba5b37617ed.png"
          alt="AI Platform Illustration"
          className="relative w-full h-[700px] object-cover object-top"
        />

        {/* Scan line effect */}
        <div
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
          style={{ animation: 'scanLine 8s linear infinite' }}
        ></div>

        {/* Panel activation overlays - top-left panel */}
        <div
          className="absolute top-[16%] left-[10%] w-[30%] h-[18%] rounded-lg pointer-events-none"
          style={{ animation: isVisible ? 'wcuPanelActivate1 10s ease-in-out infinite' : 'none' }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/8"></div>
          {/* Graphs updating steadily */}
          <div className="absolute bottom-[15%] left-[12%] flex items-end gap-[3px] h-[35%]">
            {[0.5, 0.8, 0.6, 1, 0.7, 0.85, 0.55].map((h, i) => (
              <div
                key={i}
                className="w-[3px] bg-cyan-400/35 rounded-t-sm origin-bottom"
                style={{
                  height: `${h * 100}%`,
                  animation: `wcuGraphUpdate ${4 + i * 0.5}s ease-in-out ${i * 0.5}s infinite`,
                }}
              ></div>
            ))}
          </div>
          {/* Circular chart rotating subtly */}
          <div
            className="absolute top-[20%] right-[15%] w-[18px] h-[18px] rounded-full border-2 border-cyan-400/35 border-t-transparent"
            style={{ animation: 'wcuChartSpin 10s linear infinite' }}
          ></div>
        </div>

        {/* Center-right main panel */}
        <div
          className="absolute top-[13%] right-[6%] w-[34%] h-[22%] rounded-lg pointer-events-none"
          style={{ animation: isVisible ? 'wcuPanelActivate2 12s ease-in-out 1s infinite' : 'none' }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/8"></div>
          {/* Data bars adjusting */}
          <div className="absolute top-[22%] left-[10%] w-[80%] space-y-[5px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[2px] bg-gradient-to-r from-pink-400/40 to-cyan-400/25 rounded-full origin-left"
                style={{
                  animation: `wcuDataBarAdjust ${5 + i * 0.8}s ease-in-out ${i * 0.6 + 1}s infinite`,
                }}
              ></div>
            ))}
          </div>
          {/* Rotating chart */}
          <div
            className="absolute bottom-[18%] right-[12%] w-[20px] h-[20px] rounded-full border-2 border-pink-400/35 border-b-transparent"
            style={{ animation: 'wcuChartSpin 8s linear reverse infinite' }}
          ></div>
        </div>

        {/* Bottom-left panel */}
        <div
          className="absolute bottom-[30%] left-[6%] w-[28%] h-[16%] rounded-lg pointer-events-none"
          style={{ animation: isVisible ? 'wcuPanelActivate3 11s ease-in-out 2s infinite' : 'none' }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/8"></div>
          <div className="absolute bottom-[18%] left-[15%] flex items-end gap-[2px] h-[30%]">
            {[0.7, 0.4, 0.9, 0.6, 0.8].map((h, i) => (
              <div
                key={i}
                className="w-[3px] bg-violet-400/35 rounded-t-sm origin-bottom"
                style={{
                  height: `${h * 100}%`,
                  animation: `wcuGraphUpdate ${4.5 + i * 0.6}s ease-in-out ${i * 0.4 + 2}s infinite`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom-center panel */}
        <div
          className="absolute bottom-[28%] left-[28%] w-[26%] h-[15%] rounded-lg pointer-events-none"
          style={{ animation: isVisible ? 'wcuPanelActivate1 13s ease-in-out 3s infinite' : 'none' }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/8"></div>
          <div
            className="absolute top-[25%] left-[18%] w-[14px] h-[14px] rounded-full border-2 border-violet-400/30 border-r-transparent"
            style={{ animation: 'wcuChartSpin 12s linear infinite' }}
          ></div>
        </div>

        {/* Luminous connection lines between panels */}
        <div
          className="absolute top-[28%] left-[38%] w-[20%] h-[1px] bg-gradient-to-r from-cyan-400/40 to-pink-400/30 pointer-events-none origin-left"
          style={{ animation: 'connectionLinePulse 6s ease-in-out infinite', transform: 'rotate(-5deg)' }}
        ></div>
        <div
          className="absolute top-[35%] left-[35%] w-[15%] h-[1px] bg-gradient-to-r from-violet-400/35 to-cyan-400/25 pointer-events-none origin-left"
          style={{ animation: 'connectionLinePulse 7s ease-in-out 1.5s infinite', transform: 'rotate(15deg)' }}
        ></div>
        <div
          className="absolute bottom-[38%] left-[32%] w-[18%] h-[1px] bg-gradient-to-r from-pink-400/30 to-violet-400/25 pointer-events-none origin-left"
          style={{ animation: 'connectionLinePulse 8s ease-in-out 3s infinite', transform: 'rotate(-8deg)' }}
        ></div>

        {/* Soft glow spots */}
        <div
          className="absolute top-[22%] left-[22%] w-14 h-14 bg-cyan-400/15 rounded-full blur-xl pointer-events-none"
          style={{ animation: 'softGlow 6s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute top-[18%] right-[18%] w-16 h-16 bg-pink-400/12 rounded-full blur-xl pointer-events-none"
          style={{ animation: 'softGlow 7s ease-in-out 2s infinite' }}
        ></div>
        <div
          className="absolute bottom-[35%] left-[15%] w-12 h-12 bg-violet-400/12 rounded-full blur-xl pointer-events-none"
          style={{ animation: 'softGlow 8s ease-in-out 4s infinite' }}
        ></div>

        {/* Character precise hand movement overlay */}
        <div
          className="absolute bottom-[3%] right-[8%] w-[48%] h-[50%] pointer-events-none"
          style={{ animation: isVisible ? 'wcuHandPrecise 8s ease-in-out infinite' : 'none' }}
        ></div>

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-violet-300/40"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              ['--wcu-dx' as string]: `${p.dx}px`,
              ['--wcu-dy' as string]: `${p.dy}px`,
              animation: isVisible ? `wcuParticleDrift ${p.duration}s ease-in-out ${p.delay}s infinite` : 'none',
            }}
          ></div>
        ))}
      </div>

      {/* Floating stat badges */}
      <div className={`absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl px-5 py-4 shadow-xl shadow-amber-500/30 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-2xl font-bold text-white">5+</div>
        <div className="text-xs text-amber-100">Years of AI</div>
      </div>
      <div className={`absolute -top-4 -left-4 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl px-5 py-4 shadow-xl shadow-violet-500/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-2xl font-bold text-white">50+</div>
        <div className="text-xs text-violet-200">Happy Clients</div>
      </div>
    </div>
  );
}

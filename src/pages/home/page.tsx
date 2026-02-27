import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import faqImage from "../../assets/images/faq.png";
import Navbar from '../../components/feature/Navbar';
import Footer from "../../components/feature/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);
  const whyRef = useRef<HTMLDivElement>(null);
  const steps = [
    { number: "01", title: "Discover Your Needs", description: "We identify your goals and challenges" },
    { number: "02", title: "Analyze & Plan", description: "We design a tailored AI approach" },
    { number: "03", title: "Build Smart AI Solutions", description: "We create smart, efficient AI tools" },
    { number: "04", title: "Integrate & Launch", description: "We connect AI with your systems" },
    { number: "05", title: "Optimize & Support", description: "We improve and support continuously" },
  ];



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setTimeout(() => {
              setVisibleServices((prev) => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 },
    );

    const cards = servicesRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWhyVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (whyRef.current) {
      observer.observe(whyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const services = [
    {
      icon: "ri-flashlight-line",
      title: "Smart Task Automation",
      description:
        "Automate repetitive tasks and workflows with intelligent AI that learns and adapts to your business processes.",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-600/10",
    },
    {
      icon: "ri-brain-line",
      title: "AI Model Build",
      description:
        "Custom machine learning models designed and trained specifically for your unique business requirements.",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-400/10 to-orange-500/10",
    },
    {
      icon: "ri-bar-chart-box-line",
      title: "Data Insight Engine",
      description:
        "Transform raw data into actionable insights with our advanced analytics and visualization tools.",
      gradient: "from-cyan-400 to-teal-500",
      bgGradient: "from-cyan-400/10 to-teal-500/10",
    },
    {
      icon: "ri-translate-2",
      title: "Language AI Tools",
      description:
        "Natural language processing solutions for chatbots, content analysis, and multilingual support.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: "ri-eye-line",
      title: "Visual Recognition System",
      description:
        "Computer vision solutions for image analysis, object detection, and visual quality control.",
      gradient: "from-emerald-400 to-green-500",
      bgGradient: "from-emerald-400/10 to-green-500/10",
    },
    {
      icon: "ri-line-chart-line",
      title: "AI Growth Consulting",
      description:
        "Strategic guidance to help you identify and implement AI opportunities across your organization.",
      gradient: "from-indigo-500 to-violet-600",
      bgGradient: "from-indigo-500/10 to-violet-600/10",
    },
  ];

  const aboutFeatures = [
    { icon: "ri-shield-check-line", label: "Secure & Reliable" },
    { icon: "ri-speed-line", label: "Fast Deployment" },
    { icon: "ri-customer-service-2-line", label: "24/7 Support" },
    { icon: "ri-code-s-slash-line", label: "Custom Solutions" },
  ];

  const whyChooseUs = [
    {
      title: "Proven AI Expertise",
      description:
        "Our team brings years of experience in deploying successful AI solutions across industries.",
    },
    {
      title: "Tailored AI Solutions",
      description:
        "Every solution is customized to fit your specific business needs and objectives.",
    },
    {
      title: "Data-First Approach",
      description:
        "We prioritize data quality and security in every project we undertake.",
    },
    {
      title: "End-to-End Partnership",
      description:
        "From consultation to deployment and beyond, we're with you every step of the way.",
    },
  ];


  const faqs = [
    {
      question: "What types of AI solutions do you offer?",
      answer:
        "We offer automation tools, machine learning models, NLP systems, computer vision, and custom AI development based on your business needs.",
    },
    {
      question: "How long does it take to build an AI model?",
      answer:
        "It depends on the complexity, but most projects take between 2 to 8 weeks from planning to deployment.",
    },
    {
      question: "Do I need technical knowledge to use your services?",
      answer:
        "Not at all! We handle the tech so you can focus on results. Our team will guide you through every step.",
    },
    {
      question: "Can your AI tools integrate with my current systems?",
      answer:
        "Yes. We ensure seamless integration with platforms like CRMs, ERPs, websites, and apps via API or custom connectors.",
    },
    {
      question: "How secure is my data during the process?",
      answer:
        "We follow strict data privacy and encryption protocols to ensure your information is protected at all stages.",
    },
    {
      question: "Do you offer custom AI project support?",
      answer:
        "Absolutely. We work closely with you to create tailored AI solutions built specifically for your goals.",
    },
  ];

  const wcuParticles = Array.from({ length: 14 }, (_, i) => ({
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
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Image with Ken Burns */}
        <div className="absolute inset-0 z-0 ">
          <div className="absolute inset-0 animate-heroZoom">
            <img
              src="https://static.readdy.ai/image/306c0f034255580e0c7c21250ba38e98/9f3517dc4e4027d7595b74fda7741f89.png"
              alt="AI Background"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/60 via-purple-900/50 to-neutral-900/70"></div>
        </div>

        {/* Animated Floating Gradient Orbs */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-violet-500/20 rounded-full blur-[100px] animate-floatOrb1"></div>
          <div className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-amber-400/15 rounded-full blur-[120px] animate-floatOrb2"></div>
          <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-purple-400/15 rounded-full blur-[80px] animate-floatOrb3"></div>
        </div>

        {/* Animated Particle Dots */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
              style={{
                left: `${8 + (i * 7.5) % 85}%`,
                top: `${10 + (i * 13) % 75}%`,
                animation: `particleFloat ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite alternate`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]">
          <div
            className="absolute inset-0 animate-gridShift"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>


        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-left"
>
  {/* Main Headline with staggered reveal */}
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
  >
    BUILD THE FUTURE WITH
    <br />
    <span className="bg-gradient-to-r from-[#FB923C] to-[#FCD34D] bg-clip-text text-transparent">
      INTELLIGENT TECH
    </span>
  </motion.h1>

  {/* Description with fade-in */}
  <motion.p 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mb-10 leading-relaxed"
  >
    SOLENO AI blends creativity and intelligence to bring your
    boldest ideas to life through responsible, cutting-edge
    artificial intelligence technology.
  </motion.p>

  {/* Interactive Buttons with hover scaling and shimmer */}
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="flex gap-4 mb-12"
  >
    <Link
      to="/contact"
      className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FB923C] to-[#FCD34D] text-white text-sm font-semibold rounded-full hover:shadow-orange-500/50 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-orange-400/30"
    >
      {/* Visual shimmer effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      Launch Project
    </Link>

    <Link
      to="/services"
      className="px-8 py-3.5 border-2 border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-neutral-900 hover:border-white transition-all cursor-pointer whitespace-nowrap"
    >
      Explore AI
    </Link>
  </motion.div>
</motion.div>

            {/* Right Side - AI Figure Placeholder */}
            <div className="hidden lg:block">
              {/* The background image already shows the AI figure, so we keep this space open */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-6 bg-gradient-to-br from-white via-violet-50/50 to-amber-50/30 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-3xl"></div>
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual */}
            <div
              className={`relative transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden border border-violet-200 shadow-2xl shadow-violet-500/10">
                  <img
                    src="https://readdy.ai/api/search-image?query=flat%20vector%20illustration%20style%20abstract%20AI%20technology%20concept%20purple%20violet%20and%20gold%20color%20palette%20minimalist%20design%20clean%20geometric%20shapes%20neural%20network%20nodes%20data%20flow%20lines%20circuit%20patterns%20simple%20light%20background%20modern%20digital%20art%20illustration&width=600&height=500&seq=aboutillust001&orientation=landscape"
                    alt="AI Technology"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-5 shadow-xl shadow-violet-500/30 border border-violet-400/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-xs text-violet-200">Success Rate</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 shadow-xl shadow-amber-500/30 border border-amber-400/30">
                  <div className="text-3xl font-bold text-white">120+</div>
                  <div className="text-xs text-amber-100">AI Projects</div>
                </div>

                {/* Tech Lines */}
                <div className="absolute top-1/2 -right-20 w-40 h-px bg-gradient-to-r from-violet-500 to-transparent"></div>
                <div className="absolute top-1/3 -left-20 w-40 h-px bg-gradient-to-l from-amber-500 to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-snug mb-5">
                Pioneering the Future of{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                  Intelligent Technology
                </span>
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                We transform bold ideas into intelligent solutions. Our team
                combines cutting-edge AI with human creativity to deliver
                measurable impact.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 bg-white rounded-xl border border-violet-100 shadow-sm hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 cursor-pointer group ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className={`${feature.icon} text-white text-lg`}></i>
                    </div>
                    <span className="text-sm font-medium text-neutral-800">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/services"
                  className="flex items-center gap-2 text-violet-600 hover:text-amber-500 transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-medium">Explore Services</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-24 px-6 bg-gradient-to-b from-neutral-50 via-violet-50/30 to-white relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet-200/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
          {/* Floating Shapes */}
          <div
            className="absolute top-20 left-20 w-4 h-4 bg-violet-400 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-40 w-3 h-3 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-5 h-5 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDuration: "3.5s", animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
              <i className="ri-settings-3-line"></i>
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Powering Progress Through
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              Intelligent AI Services
            </h3>
            <p className="text-neutral-500 mt-6 max-w-2xl mx-auto">
              Discover our comprehensive suite of AI solutions designed to
              transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-index={index}
                className={`group relative bg-white rounded-3xl p-8 border border-neutral-200 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden ${visibleServices.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-white flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:text-violet-600 transition-colors">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-neutral-400 group-hover:text-violet-600 transition-colors">
                    <span>Learn More</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 p-2 bg-gradient-to-r from-violet-100 via-purple-50 to-amber-100 rounded-full">
              <span className="text-sm text-neutral-600 pl-4">
                Need a custom solution?
              </span>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/25"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative transition-all duration-1000 ${whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
              <div className="relative w-full max-w-[580px] mx-auto">
                {/* Ambient glow behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/15 to-amber-500/15 rounded-3xl blur-2xl" style={{ animation: 'softGlow 6s ease-in-out infinite' }}></div>

                {/* Main container with slow camera drift */}
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/10 border border-violet-100"
                  style={{ animation: whyVisible ? 'wcuCameraDrift 28s ease-in-out infinite' : 'none' }}
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
                    style={{ animation: whyVisible ? 'wcuPanelActivate1 10s ease-in-out infinite' : 'none' }}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/8"></div>
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
                    <div
                      className="absolute top-[20%] right-[15%] w-[18px] h-[18px] rounded-full border-2 border-cyan-400/35 border-t-transparent"
                      style={{ animation: 'wcuChartSpin 10s linear infinite' }}
                    ></div>
                  </div>

                  {/* Center-right main panel */}
                  <div
                    className="absolute top-[13%] right-[6%] w-[34%] h-[22%] rounded-lg pointer-events-none"
                    style={{ animation: whyVisible ? 'wcuPanelActivate2 12s ease-in-out 1s infinite' : 'none' }}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/8"></div>
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
                    <div
                      className="absolute bottom-[18%] right-[12%] w-[20px] h-[20px] rounded-full border-2 border-pink-400/35 border-b-transparent"
                      style={{ animation: 'wcuChartSpin 8s linear reverse infinite' }}
                    ></div>
                  </div>

                  {/* Bottom-left panel */}
                  <div
                    className="absolute bottom-[30%] left-[6%] w-[28%] h-[16%] rounded-lg pointer-events-none"
                    style={{ animation: whyVisible ? 'wcuPanelActivate3 11s ease-in-out 2s infinite' : 'none' }}
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
                    style={{ animation: whyVisible ? 'wcuPanelActivate1 13s ease-in-out 3s infinite' : 'none' }}
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
                    style={{ animation: whyVisible ? 'wcuHandPrecise 8s ease-in-out infinite' : 'none' }}
                  ></div>

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  {wcuParticles.map((p) => (
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
                        animation: whyVisible ? `wcuParticleDrift ${p.duration}s ease-in-out ${p.delay}s infinite` : 'none',
                      }}
                    ></div>
                  ))}
                </div>

                {/* Floating stat badges */}
                <div className={`absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl px-5 py-4 shadow-xl shadow-amber-500/30 transition-all duration-1000 delay-500 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs text-amber-100">Years of AI</div>
                </div>
                <div className={`absolute -top-4 -left-4 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl px-5 py-4 shadow-xl shadow-violet-500/30 transition-all duration-1000 delay-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-violet-200">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
              <span className="text-sm font-semibold text-amber-500 tracking-wider uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-10">
                Built for <span className="text-violet-600">Innovation.</span>
                <br />
                Designed for You.
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-sm text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-amber-500 tracking-widest uppercase mb-4 block">
            PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            How does
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent"> SOLENO AI </span>
            work?
          </h2>
        </div>

        <div className="relative">
          {/* Animated Connection Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-300 via-violet-400 to-violet-300 hidden lg:block origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // This creates the "one by one" effect within your 5s window
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.6, // Staggers the start of each step
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Circle Badge */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/30 mb-6 relative z-10"
                >
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-violet-600 mb-3 px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            TRANSFORM IDEAS INTO
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              INTELLIGENCE
            </span>
          </h2>
          <p className="text-neutral-300 mb-10 max-w-2xl mx-auto">
            Ready to harness the power of AI? Let's build something
            extraordinary together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/30"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            <span className="text-neutral-400 text-sm">Follow Us :</span>
            <div className="flex gap-3">
              {[
                "ri-discord-fill",
                "ri-github-fill",
                "ri-instagram-line",
                "ri-linkedin-fill",
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white transition-all cursor-pointer"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Animated Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 rounded-3xl p-10 relative overflow-hidden min-h-[600px] flex flex-col justify-between shadow-2xl"
          >
            {/* Pulsing Background Orbs */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"
            />

            {/* Email Section */}
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-6"
              >
                <i className="ri-mail-line text-2xl text-amber-400"></i>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">contact@soleno.ai</h3>
              <p className="text-white/80 text-sm">Have questions? Reach out to us directly.</p>
            </div>

            {/* Floating Illustration */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-center justify-center py-8"
            >
              <img src={faqImage} alt="FAQ" className="w-full h-auto max-w-sm drop-shadow-2xl" />
            </motion.div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-4 block"
            >
              FAQs
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight"
            >
              Everything You Want to <br />
              Know <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">About AI</span>
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-violet-300 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-medium text-neutral-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ 
                        rotate: openFaq === index ? 180 : 0,
                        backgroundColor: openFaq === index ? "#7c3aed" : "#e5e5e5" 
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                    >
                      <i className={`${openFaq === index ? "ri-subtract-line text-white" : "ri-add-line text-neutral-700"}`}></i>
                    </motion.div>
                  </button>

                  {/* Smooth Accordion Content */}
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
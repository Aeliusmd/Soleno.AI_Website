import { useState, useEffect, useRef } from "react";
import faqImage from "../../assets/images/faq.png";
import logoImage from "../../assets/images/logo.png";
import chooseImage from "../../assets/images/why_choose_us.png";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);

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

  const testimonials = [
    {
      name: "Daniel Cruz",
      role: "Startup Founder",
      content:
        "SOLENO AI's automation tools saved us countless hours. Their team understood our needs perfectly and delivered beyond expectations.",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20man%20portrait%20headshot%20clean%20neutral%20background%20modern%20style%20confident%20business%20casual%20young%20entrepreneur%20warm%20lighting&width=100&height=100&seq=testpg101&orientation=squarish",
    },
    {
      name: "Noah Carter",
      role: "Data Scientist",
      content:
        "Working with SOLENO AI transformed our data pipeline. The insights we now generate have become invaluable to our decision-making process.",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20man%20portrait%20headshot%20clean%20neutral%20background%20modern%20style%20tech%20industry%20data%20analyst%20friendly%20expression&width=100&height=100&seq=testpg102&orientation=squarish",
    },
    {
      name: "Emma Reed",
      role: "CRM Analyst",
      content:
        "The team was responsive, knowledgeable, and delivered a solution that perfectly integrated with our existing systems.",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20woman%20portrait%20headshot%20clean%20neutral%20background%20modern%20style%20business%20analyst%20corporate%20confident%20smile&width=100&height=100&seq=testpg103&orientation=squarish",
    },
    {
      name: "Martin Blake",
      role: "Product Manager",
      content:
        "From concept to delivery, SOLENO AI exceeded our expectations. The AI solution they built has become core to our product offering.",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20man%20portrait%20headshot%20clean%20neutral%20background%20modern%20style%20product%20manager%20tech%20industry%20approachable&width=100&height=100&seq=testpg104&orientation=squarish",
    },
    {
      name: "Sophie Grant",
      role: "Growth Officer",
      content:
        "Our AI project launched on time and under budget. The ROI was visible within the first month of deployment.",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20woman%20portrait%20headshot%20clean%20neutral%20background%20modern%20style%20marketing%20executive%20business%20confident&width=100&height=100&seq=testpg105&orientation=squarish",
    },
    {
      name: "Chloe Park",
      role: "QA Supervisor",
      content:
        "We rely on SOLENO AI for ongoing optimization. Their support team is always available and incredibly helpful.",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20asian%20woman%20portrait%20headshot%20clean%20neutral%20background%20modern%20style%20quality%20assurance%20tech%20friendly&width=100&height=100&seq=testpg106&orientation=squarish",
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

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 
  bg-[rgba(23,0,63,0.76)] 
  backdrop-blur-md 
  shadow-sm 
  transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-1 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="logo" className="h-6 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About Us", "Services", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white hover:text-[#FB923C] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.readdy.ai/image/306c0f034255580e0c7c21250ba38e98/9f3517dc4e4027d7595b74fda7741f89.png"
            alt="AI Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/60 via-purple-900/50 to-neutral-900/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                BUILD THE FUTURE WITH
                <br />
                <span className="bg-gradient-to-r from-[#FB923C] to-[#FCD34D] bg-clip-text text-transparent">
                  INTELLIGENT TECH
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
                SOLENO AI blends creativity and intelligence to bring your
                boldest ideas to life through responsible, cutting-edge
                artificial intelligence technology.
              </p>
              <div className="flex gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FB923C] to-[#FCD34D] text-white text-sm font-semibold rounded-full hover:from-orange-500 hover:to-amber-400 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-orange-400/30"
                >
                  Launch Project
                </a>

                <a
                  href="#services"
                  className="px-8 py-3.5 border-2 border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap"
                >
                  Explore AI
                </a>
              </div>
            </div>

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
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
                >
                  Start Your Journey
                </a>
                <a
                  href="#services"
                  className="flex items-center gap-2 text-violet-600 hover:text-amber-500 transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-medium">Explore Services</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
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
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/25"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
              <img src={chooseImage} alt="choose" />
            </div>
            <div>
              <span className="text-sm font-semibold text-amber-500 tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-10">
                Built for <span className="text-violet-600">Innovation.</span>
                <br />
                Designed for You.
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-sm text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-neutral-50">
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
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-300 via-violet-400 to-violet-300 hidden lg:block"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                {
                  number: "01",
                  title: "Discover Your Needs",
                  description: "We identify your goals and challenges",
                },
                {
                  number: "02",
                  title: "Analyze & Plan",
                  description: "We design a tailored AI approach",
                },
                {
                  number: "03",
                  title: "Build Smart AI Solutions",
                  description: "We create smart, efficient AI tools",
                },
                {
                  number: "04",
                  title: "Integrate & Launch",
                  description: "We connect AI with your systems",
                },
                {
                  number: "05",
                  title: "Optimize & Support",
                  description: "We improve and support continuously",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  {/* Circle Badge */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/30 mb-6 relative z-10">
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-violet-600 mb-3 px-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
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
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/30"
            >
              Contact Us
            </a>
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

      {/* Testimonials Section */}
       <section
        id="testimonials"
        className="py-24 px-6 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-orange-50/40"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
              Words from Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-orange-500 text-lg"></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-700 leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Card with Illustration */}
            <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 rounded-3xl p-10 relative overflow-hidden min-h-[600px] flex flex-col justify-between">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
              
              {/* Email Section */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                  <i className="ri-mail-line text-2xl text-amber-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  contact@soleno.ai
                </h3>
                <p className="text-white/80 text-sm">
                  Have questions? Reach out to us directly.
                </p>
              </div>

              {/* Illustration */}
              <div className="relative z-10 flex items-center justify-center py-8">
                <img src={faqImage} alt="FAQ" className="w-full h-auto max-w-sm" />
              </div>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div>
              <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-4 block">
                FAQs
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
                Everything You Want to
                <br />
                Know <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">About AI</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-medium text-neutral-900 pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === index ? "bg-violet-600" : "bg-neutral-200"}`}
                      >
                        <i
                          className={`${openFaq === index ? "ri-subtract-line" : "ri-add-line"} ${openFaq === index ? "text-white" : "text-neutral-700"}`}
                        ></i>
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-neutral-800">
            {/* Column 1 - Brand */}
            <div>
              <div className="mb-5">
                <img src={logoImage} alt="logo" className="h-6 w-auto" />
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Empowering businesses with intelligent AI solutions for a smarter tomorrow.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5">
                Quick Links
              </h4>
              <div className="space-y-3">
                {["Home","About Us", "Services", "Blog", "Contact"].map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block text-sm text-neutral-400 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5">
                Services
              </h4>
              <div className="space-y-3">
                {[
                  "AI-Powered Automation",
                  "Intelligent Analytics & Insights",
                  "Custom AI Solutions",
                  "AI Integration & Support",
                  "Chatbots & Virtual Assistants",
                ].map((service, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block text-sm text-neutral-400 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4 - Follow Us */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: "ri-linkedin-fill", label: "LinkedIn" },
                  { icon: "ri-twitter-x-line", label: "Twitter" },
                  { icon: "ri-facebook-fill", label: "Facebook" },
                  { icon: "ri-instagram-line", label: "Instagram" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white hover:from-orange-400 hover:to-amber-400 transition-all cursor-pointer"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center">
            <p className="text-sm text-neutral-400">
              © 2026 SOLENO.AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
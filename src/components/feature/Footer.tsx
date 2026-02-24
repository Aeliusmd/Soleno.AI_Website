
import logoImage from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-neutral-800">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img src={logoImage} alt="logo" className="h-6 w-auto" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Empowering businesses with intelligent AI solutions for a smarter tomorrow.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Services */}
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

          {/* Social */}
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

        {/* Bottom */}
        <div className="text-center">
          <p className="text-sm text-neutral-400">
            © 2026 SOLENO.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
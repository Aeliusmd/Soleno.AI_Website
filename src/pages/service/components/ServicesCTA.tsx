
import { useState } from 'react';

export default function ServicesCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (formData.message.length > 500) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('service', formData.service);
      body.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d6dsh2uqd308q1a0a8u0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-24 px-6 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-4 block">Have Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Book a Call
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">Today!</span>
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Ready to transform your business with AI? Tell us about your project and our experts will get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'ri-time-line', title: 'Quick Response', desc: 'We respond within 24 hours' },
                { icon: 'ri-shield-check-line', title: 'Free Consultation', desc: 'No commitment initial call' },
                { icon: 'ri-team-line', title: 'Expert Team', desc: '30+ AI specialists ready to help' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-xl text-violet-400`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-3xl p-8 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-6">Get a Free Quote</h3>
            <form onSubmit={handleSubmit} data-readdy-form id="services-inquiry-form" className="space-y-5">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-xl text-white text-sm placeholder-neutral-500 outline-none focus:border-violet-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-xl text-white text-sm placeholder-neutral-500 outline-none focus:border-violet-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-xl text-white text-sm outline-none focus:border-violet-500 transition-colors cursor-pointer appearance-none"
                >
                  <option value="" className="bg-neutral-800">Select a service</option>
                  <option value="AI-Powered Automation" className="bg-neutral-800">AI-Powered Automation</option>
                  <option value="Intelligent Analytics" className="bg-neutral-800">Intelligent Analytics &amp; Insights</option>
                  <option value="AI Integration" className="bg-neutral-800">AI Integration &amp; Support</option>
                  <option value="Custom AI Solutions" className="bg-neutral-800">Custom AI Solutions</option>
                  <option value="Chatbots" className="bg-neutral-800">Chatbots &amp; Virtual Assistants</option>
                  <option value="Machine Learning" className="bg-neutral-800">Machine Learning Models</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-xl text-white text-sm placeholder-neutral-500 outline-none focus:border-violet-500 transition-colors resize-none"
                  required
                ></textarea>
                <p className="text-xs text-neutral-500 mt-1 text-right">{formData.message.length}/500</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/25 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <i className="ri-check-line text-emerald-400"></i>
                  <span className="text-sm text-emerald-400">Inquiry sent! We\u2019ll get back to you within 24 hours.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <i className="ri-error-warning-line text-red-400"></i>
                  <span className="text-sm text-red-400">Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState } from 'react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client‑side validation
    if (!formData.name || !formData.email || !formData.message) return;
    if (formData.message.length > 500) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('message', formData.message);

      const response = await fetch(
        'https://readdy.ai/api/form/d6c3hiaff40lgbk6cnlg',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-cta"
      className="py-28 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-amber-300 tracking-wider uppercase mb-4 block">
              Let&rsquo;s Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Build Something
              <br />
              <span className="text-amber-300">Extraordinary?</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Whether you have a specific project in mind or just want to explore what
              AI can do for your business, we&rsquo;d love to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'ri-mail-line', text: 'contact@soleno.ai' },
                { icon: 'ri-phone-line', text: '+1 (555) 678-9101' },
                {
                  icon: 'ri-map-pin-line',
                  text: '456 Neural Dr, Silicon Square, CA 94016',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <i className={`${item.icon} text-amber-300`}></i>
                  </div>
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {[
                'ri-discord-fill',
                'ri-github-fill',
                'ri-instagram-line',
                'ri-linkedin-fill',
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  rel="nofollow"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-violet-600 transition-all cursor-pointer"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
            {/* Added explicit boolean value to custom data attribute to satisfy JSX parser */}
            <form
              onSubmit={handleSubmit}
              data-readdy-form={true}
              id="about-contact-form"
              className="space-y-5"
            >
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/40 outline-none focus:border-amber-300 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/40 outline-none focus:border-amber-300 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/40 outline-none focus:border-amber-300 transition-colors resize-none"
                  required
                ></textarea>
                <p className="text-xs text-white/40 mt-1 text-right">
                  {formData.message.length}/500
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full py-3.5 bg-white text-violet-700 text-sm font-semibold rounded-xl hover:bg-amber-300 hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl">
                  <i className="ri-check-line text-emerald-300"></i>
                  <span className="text-sm text-emerald-300">
                    Message sent successfully! We&rsquo;ll get back to you soon.
                  </span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-400/30 rounded-xl">
                  <i className="ri-error-warning-line text-red-300"></i>
                  <span className="text-sm text-red-300">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

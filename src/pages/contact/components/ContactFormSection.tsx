
import { useState, useEffect, useRef } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
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
        'https://readdy.ai/api/form/d6dvfiaohb161tfd8p3g',
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
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-white via-violet-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg shadow-violet-500/5 h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646988!3d23.78088745708454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1644587989646!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-8">
              Send us a message, and we&apos;ll get back to you{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                promptly.
              </span>
            </h2>

            <form
              onSubmit={handleSubmit}
              data-readdy-form
              id="contact-page-form"
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Rashed Kabir"
                  className="w-full px-5 py-3.5 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rshdkabir@gmail.com"
                  className="w-full px-5 py-3.5 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Your message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message*"
                  maxLength={500}
                  rows={5}
                  className="w-full px-5 py-3.5 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all resize-none"
                  required
                ></textarea>
                <p className="text-xs text-neutral-400 mt-1 text-right">
                  {formData.message.length}/500
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="px-10 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:to-purple-500 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-violet-500/25 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <i className="ri-check-double-line text-emerald-500 text-lg"></i>
                  <span className="text-sm text-emerald-700">
                    Message sent successfully! We&apos;ll get back to you promptly.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <i className="ri-error-warning-line text-red-500 text-lg"></i>
                  <span className="text-sm text-red-700">
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

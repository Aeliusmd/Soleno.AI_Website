
import { useState, useEffect, useRef } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactFormSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'captcha'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:5000';
  const contactEndpoint = import.meta.env.DEV
    ? `${apiBaseUrl}/contact`
    : '/api/contact';

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

    if (!executeRecaptcha) {
      console.error('reCAPTCHA not ready');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get reCAPTCHA v3 token silently
      const recaptchaToken = await executeRecaptcha('contact_form');

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recaptchaToken,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const contentType = response.headers.get('content-type') || '';
        const data = contentType.includes('application/json') ? await response.json() : null;
        if (data?.error?.toLowerCase().includes('recaptcha')) {
          setSubmitStatus('captcha');
        } else {
          setSubmitStatus('error');
        }
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
      id="contact-form"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-white via-violet-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg shadow-violet-500/5 h-[520px] bg-neutral-100 flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.456789012345!2d-117.914444!3d34.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32855b165690b:0xd4be0ad074a93395!2s527+E+Rowland+St+STE+100A,+Covina,+CA+91723,+USA!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                className="w-full flex-1 border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
              <div className="border-t border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
                <p className="font-semibold text-neutral-900">Our Location</p>
                <p>527 E Rowland St STE 100A, Covina, CA 91723, United States</p>
                <a
                  href="google.com/maps/place/527+E+Rowland+St+STE+100A,+Covina,+CA+91723,+USA/data=!4m2!3m1!1s0x80c32855b165690b:0xd4be0ad074a93395?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 inline-block font-semibold text-violet-600 hover:text-violet-700"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
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
                  placeholder="Your Name"
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
                  placeholder="Your Email"
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
                  placeholder="Your message"
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

              {submitStatus === 'captcha' && (
                <div className="flex items-center gap-2 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <i className="ri-shield-flash-line text-amber-500 text-lg"></i>
                  <span className="text-sm text-amber-700">
                    Security check failed. Please refresh the page and try again.
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

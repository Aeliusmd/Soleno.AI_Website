
import { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Co-Founder',
    bio: 'Former Google AI researcher with 12+ years in machine learning and business strategy.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20confident%20South%20Asian%20man%20in%20his%20mid%20thirties%20wearing%20a%20dark%20blazer%20clean%20neutral%20studio%20background%20warm%20lighting%20modern%20corporate%20style&width=400&height=480&seq=team001&orientation=portrait',
    social: { linkedin: '#', twitter: '#' },
    isFounder: true,
  },
  {
    name: 'Elena Vasquez',
    role: 'CTO & Co-Founder',
    bio: 'PhD in Computer Science, specializing in deep learning architectures and scalable AI systems.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20confident%20Latina%20woman%20in%20her%20early%20thirties%20wearing%20a%20modern%20blazer%20clean%20neutral%20studio%20background%20warm%20lighting%20corporate%20style&width=400&height=480&seq=team002&orientation=portrait',
    social: { linkedin: '#', twitter: '#' },
    isFounder: true,
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Engineering',
    bio: 'Full-stack architect with expertise in cloud infrastructure and MLOps pipelines.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20Asian%20man%20in%20his%20late%20twenties%20wearing%20smart%20casual%20attire%20clean%20neutral%20studio%20background%20warm%20lighting%20modern%20tech%20industry%20style&width=400&height=480&seq=team003&orientation=portrait',
    social: { linkedin: '#' },
    isFounder: false,
  },
  {
    name: 'Sarah Mitchell',
    role: 'VP of Client Success',
    bio: 'Passionate about building lasting partnerships and ensuring every client achieves their AI goals.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20friendly%20Caucasian%20woman%20in%20her%20early%20thirties%20with%20warm%20smile%20wearing%20professional%20attire%20clean%20neutral%20studio%20background%20warm%20lighting%20corporate%20style&width=400&height=480&seq=team004&orientation=portrait',
    social: { linkedin: '#' },
    isFounder: false,
  },
  {
    name: 'David Okafor',
    role: 'Lead Data Scientist',
    bio: 'Expert in NLP and predictive analytics with a track record of building production-grade AI models.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20confident%20African%20man%20in%20his%20early%20thirties%20wearing%20a%20modern%20dark%20shirt%20clean%20neutral%20studio%20background%20warm%20lighting%20tech%20professional%20style&width=400&height=480&seq=team005&orientation=portrait',
    social: { linkedin: '#' },
    isFounder: false,
  },
  {
    name: 'Yuki Tanaka',
    role: 'AI Research Lead',
    bio: 'Published researcher in computer vision and generative AI, driving innovation at SOLENO.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20Japanese%20woman%20in%20her%20late%20twenties%20wearing%20smart%20casual%20blazer%20clean%20neutral%20studio%20background%20warm%20lighting%20modern%20professional%20style&width=400&height=480&seq=team006&orientation=portrait',
    social: { linkedin: '#' },
    isFounder: false,
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            // Stagger animation based on index
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = ref.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-50/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-violet-200">
            <i className="ri-group-line"></i>
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Meet the <span className="text-violet-600">Visionaries</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            The brilliant minds behind SOLENO.AI — united by a shared passion for building intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-violet-300 hover:shadow-xl transition-all duration-500 cursor-pointer relative ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {member.isFounder && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg">
                  Co-Founder
                </div>
              )}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      rel="nofollow"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 hover:bg-violet-600 hover:text-white transition-all cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-sm"></i>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      rel="nofollow"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 hover:bg-violet-600 hover:text-white transition-all cursor-pointer"
                    >
                      <i className="ri-twitter-x-fill text-sm"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-neutral-900 group-hover:text-violet-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-violet-600 mb-3">{member.role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

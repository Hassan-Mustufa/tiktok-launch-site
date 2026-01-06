import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alice B.',
      role: 'Founder, Nordic Wear',
      avatar: 'AB', 
      text: 'Khurram fixed our TikTok Shop attribution in 48 hours. We scaled from $2k/day to $12k/day while maintaining a 3.8x ROAS. He understands the backend better than anyone.',
      stats: '600% Growth'
    },
    {
      name: 'Sophia C.',
      role: 'Operations, Glow & Co',
      avatar: 'SC',
      text: 'The affiliate mechanism he built is fully automated. We have 50+ creators posting daily now without us sending a single manual email. Massive time saver.',
      stats: '50+ Active Creators'
    },
    {
      name: 'Ethan D.',
      role: 'CEO, BulkSource UK',
      avatar: 'ED',
      text: 'Most consultants just talk. Ali actually audits the technical performance. Our shop health score went from "At Risk" to "Excellent" in one month.',
      stats: '98% Shop Health'
    },
    {
      name: 'Liam F.',
      role: 'Director, Urban Tech',
      avatar: 'LF',
      text: 'Built our private label funnel from scratch. We hit $100k in the first 4 months. If you can get a slot on his calendar, take it.',
      stats: '$100k in 120 Days'
    }
  ];

  return (
    <section className="py-20 bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Client <span className="text-[#25f4ee]">Success</span>
          </h2>
          <p className="text-[#b1b1b1] text-lg">Growth benchmarks from our recent partnerships.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-[#070707] p-8 rounded-2xl border border-white/5 hover:border-[#25f4ee]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#25f4ee] text-[#25f4ee]" />
                  ))}
                </div>
                
                <p className="text-white text-lg leading-relaxed mb-6 font-medium">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#25f4ee] to-[#F33E7B] flex items-center justify-center text-black font-bold text-xs shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      {t.name} <CheckCircle size={14} className="text-[#25f4ee]" />
                    </h4>
                    <p className="text-[#b1b1b1] text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#F33E7B] font-bold text-sm uppercase tracking-tighter">{t.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
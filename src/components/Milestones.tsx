export default function Milestones() {
  const milestones = [
    {
      revenue: '$100K+',
      period: 'Phase 1: 0-6 Months',
      description: 'Market Penetration: Establishing your brand footprint and securing initial viral momentum.'
    },
    {
      revenue: '$500K+',
      period: 'Phase 2: 6-10 Months',
      description: 'Systematic Scaling: Optimizing the viral loop and expanding into high-intent audience segments.'
    },
    {
      revenue: '$1M+',
      period: 'Phase 3: Year 1',
      description: 'Market Authority: Solidifying a seven-figure legacy with a fully automated revenue engine.'
    }
  ];

  return (
    <section className="py-20 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The Scaling <span className="text-[#25f4ee]">Roadmap</span>
          </h2>
          <p className="text-[#b1b1b1] text-lg max-w-2xl mx-auto">
            Strategic benchmarks designed to take your DTC brand from market entry to industry leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              className="relative bg-gradient-to-br from-[#1f1f1f] to-[#070707] p-8 rounded-2xl border border-[#25f4ee]/10 hover:border-[#25f4ee] transition-all duration-300 group hover:-translate-y-2 shadow-xl"
            >
              {/* Step Counter */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25f4ee] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-[0_0_15px_#25f4ee]/50">
                {index + 1}
              </div>
              
              <div className="text-center mt-4">
                <h3 className="text-5xl font-bold text-[#25f4ee] mb-2 tracking-tighter">
                  {milestone.revenue}
                </h3>
                <p className="text-[#F33E7B] text-xl font-semibold mb-4 italic">
                  {milestone.period}
                </p>
                <p className="text-[#b1b1b1] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function About() {
  const stats = [
    { number: '5+ Yrs', label: 'E-com Expertise' },
    { number: '$100K+', label: 'Revenue Unlocked' },
    { number: '90 Days', label: 'Viral Roadmap' }
  ];

  const expertise = [
    'Viral Affiliate Strategy',
    'TikTok Shop Mastery',
    'High-ROAS Ad Optimization',
    'Precision Data Analytics'
  ];

  return (
    <section id="about" className="py-20 bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet <span className="text-[#25f4ee]">Khurram Mohammad Aali</span>
            </h2>
            <p className="text-[#b1b1b1] text-lg leading-relaxed mb-6">
              I specialize in engineering high-velocity growth for DTC brands. 
              By deploying battle-tested viral mechanisms, I’ve helped partners 
              cross the <span className="text-white font-bold">$100K+ revenue milestone</span> in under 6 months. 
              I don't just manage shops; I build market-leading revenue engines.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-[#25f4ee] mb-2">{stat.number}</p>
                  <p className="text-[#b1b1b1] text-xs uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-white font-semibold text-xl">Core Competencies:</p>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F33E7B] rounded-full"></span>
                    <span className="text-[#b1b1b1]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-left" data-aos-delay="200">
            <img
              src="mali-.png"
              alt="Khurram Mohammad Aali"
              className="relative w-full h-auto transition duration-500 opacity-90 border-none"
            />
          </div>
        </div>
      </div>
    </section>  
  );
}
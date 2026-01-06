import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    { id: '01', title: 'DTC Brands Launch' },
    { id: '02', title: 'Private Label Business Launch' },
    { id: '03', title: 'Wholesale Business Launch' },
    { id: '04', title: 'Dropship Business Launch' },
    { id: '05', title: 'Product Syncing for Platforms' },
    { id: '06', title: 'TikTok Shop Business Consultations' }
  ];

  return (
    <section id="services" className="bg-[#070707] py-24 relative overflow-hidden">
      {/* Background Vertical Lines from Screenshot */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white/10 h-full"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-4">Popular Services</p>
          <h2 className="text-5xl font-bold text-white tracking-tight">
            Special Services for <span className="text-[#25f4ee]">TikTok Shop</span>
          </h2>
        </div>

        {/* 2-Column Grid of Dark Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={`${idx * 100}`}
              className="bg-[#111111] border border-white/5 p-8 rounded-2xl flex justify-between items-center group hover:bg-[#161616] transition-all cursor-pointer shadow-xl"
            >
              <div className="flex items-center gap-12">
                {/* Numbering */}
                <span className="text-gray-500 font-mono text-xl">{service.id}</span>
                {/* Title */}
                <h3 className="text-white text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
              </div>
              
              {/* Pink Arrow Button */}
              <button 
                onClick={() => window.location.href = '#home'} 
                className="w-12 h-12 rounded-full bg-[#F33E7B] flex items-center justify-center transition-transform group-hover:rotate-45 shadow-lg shadow-[#F33E7B]/20"
              >  
                <ArrowUpRight className="text-white" size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
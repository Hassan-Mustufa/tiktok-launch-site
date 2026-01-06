export default function Clients() {
  const clients = [
    { name: 'Anker' },
    { name: 'GuruNanda' },
    { name: 'Ryse Supplements' },
    { name: 'Made by Mitchell' },
    { name: 'Liquid I.V.' },
    { name: 'The Ordinary' },
    { name: 'Bloom Nutrition' },
    { name: 'Milani Cosmetics' }
  ];

  return (
    <section className="py-20 bg-[#070707] relative">
      {/* Background Ruler Lines for Visual Consistency */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 italic uppercase tracking-tighter">
            Whom We Served? & Our <span className="text-[#25f4ee]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index % 4) * 75}`}
              className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-[#25f4ee]/50 transition-all duration-300 flex items-center justify-center h-32 group"
            >
              <p className="text-[#b1b1b1] group-hover:text-white text-center font-bold text-lg tracking-tight transition-colors">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
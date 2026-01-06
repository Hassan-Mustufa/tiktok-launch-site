import { ArrowRight, CheckCircle2, TrendingUp, Target, Users, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GrowthSystems() {
  const systems = [
    {
      title: "Private Label Business Launch",
      description: "A battle-tested blueprint for consistent scaling. We strip away the guesswork and implement a proven framework to move your private label assets from zero to market-ready with a focus on sustainable long-term sales velocity.",
      features: ["Sourcing & Logistics Setup", "Brand Identity Engineering", "Velocity-Based Launch Strategy"],
      image: "pl SS.jpg",
      stats: "Consistent Sales",
      icon: <Zap className="text-[#25f4ee]" size={24} />
    },
    {
      title: "GMV Max Ads Optimization",
      description: "Algorithm-led performance. My ad strategies typically target an ROI between 3x and 5x. By optimizing creative-to-audience matching, we ensure 90% of your spend is hitting high-intent buyers ready to convert.",
      features: ["3.0x - 5.0x Target ROI", "90% Precision Targeting", "Dynamic Creative Testing"],
      image: "https://i.ibb.co/xKbW7ZnX/2.jpg",
      stats: "90% Spend Efficiency",
      icon: <Target className="text-[#F33E7B]" size={24} />
    },
    {
      title: "$1M Revenue Accelerator",
      description: "The 6-month roadmap to seven figures. This is a high-intensity scaling system designed for brands ready to dominate the TikTok Shop ecosystem and capture massive market share in record time.",
      features: ["Seven-Figure Scaling", "Aggressive Market Entry", "Viral Lifecycle Management"],
      image: "https://i.ibb.co/jPkqL1Ss/3.jpg",
      stats: "$1M in 180 Days",
      icon: <TrendingUp className="text-[#25f4ee]" size={24} />
    },
    {
      title: "Viral Affiliate Marketing Plan",
      description: "Mass-volume content production. Based on data, a concentrated push of 100 high-quality creator videos acts as a viral trigger. We manage the entire pipeline to ensure your product becomes a feed essential.",
      features: ["100+ Creator Video Sprints", "Content Whitelisting", "High-Velocity Outreach"],
      image: "Affiliate.jpeg",
      stats: "Viral Triggers",
      icon: <Users className="text-[#F33E7B]" size={24} />
    },
    {
      title: "Full-Cycle Customer Management",
      description: "Protecting your shop health is non-negotiable. Our proactive care management ensures customer satisfaction and maintains 'Excellent' ratings, which is the key to unlocking priority algorithm placement.",
      features: ["Shop Health Protection", "Retention Optimization", "Algorithmic Priority"],
      image: "https://i.ibb.co/zTF2gZ4c/5.png",
      stats: "Excellent Health Score",
      icon: <ShieldCheck className="text-[#25f4ee]" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#070707] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter italic">
            MY <span className="text-[#25f4ee]">WORK</span>
          </h2>
          <p className="text-[#b1b1b1] text-xl max-w-2xl mx-auto font-medium">
            Explore the high-velocity projects and scaling blueprints currently dominating the market.
          </p>
        </div>

        <div className="space-y-40">
          {systems.map((system, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={`${(index % 2) * 100}`}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#25f4ee] to-[#F33E7B] rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-25 transition duration-700"></div>
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111]">
                    <img 
                      src={system.image} 
                      alt={system.title} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-1000"
                    />
                    <div className="absolute top-6 left-6 bg-[#070707]/90 backdrop-blur-xl px-5 py-2 rounded-xl border border-[#25f4ee]/30 shadow-2xl">
                      <p className="text-[#25f4ee] font-black text-sm tracking-[0.2em] uppercase">{system.stats}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {system.icon}
                  </div>
                  <span className="text-[#b1b1b1] font-mono text-sm tracking-widest uppercase">Project 0{index + 1}</span>
                </div>
                
                <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tighter">
                  {system.title}
                </h3>
                
                <p className="text-[#b1b1b1] text-lg leading-relaxed mb-8 font-medium">
                  {system.description}
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-10">
                  {system.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-bold group">
                      <CheckCircle2 size={22} className="text-[#25f4ee] group-hover:scale-110 transition-transform" />
                      <span className="text-sm uppercase tracking-wider">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/case-study/${index + 1}`} className="inline-flex items-center gap-2 text-white font-black text-lg border-b-2 border-[#F33E7B] pb-1 hover:text-[#F33E7B] transition-colors group">
                  VIEW CASE STUDY <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
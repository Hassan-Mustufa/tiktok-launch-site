import { ArrowRight } from 'lucide-react';

export default function Hero() {                        // Turn Your Products Into TikTok Bestsellers
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#070707] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-left" data-aos-delay="100">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Brand <span className="text-[#25f4ee]">Into TikTok Bestsellers</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-[#b1b1b1] mb-6 font-semibold">
              To generate <span className="text-[#F33E7B]">$100k+</span> within 6 Months
            </p>
            <p className="text-lg text-[#b1b1b1] mb-8 leading-relaxed">
              Ready to dominate TikTok Shop? Use my proprietary 90-day viral mechanism to turn your products into market leaders.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F33E7B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d63569] transition transform hover:scale-105"
            >
              Start Scaling Now
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex items-center justify-center" data-aos="fade-right" data-aos-delay="200">
            <div className="relative group">
              <img
                src="mali zoom out.png"
                alt="E-commerce Scaling Strategy"
                className="relative w-full h-auto transition duration-500 mix-blend-lighten opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
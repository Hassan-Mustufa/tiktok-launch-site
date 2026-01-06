import { Facebook, Briefcase, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 relative overflow-hidden">
      {/* Background Vertical Lines for consistency */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <div className="text-2xl font-black italic uppercase tracking-tighter">
              <span className="text-white">Tiktok</span>
              <span className="text-[#25f4ee]"> Launch</span>
            </div>
            <p className="text-[#b1b1b1] leading-relaxed">
              Scaling DTC brands to six-figure revenues through expert TikTok Shop management and high-performance e-commerce strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-[#b1b1b1] hover:text-[#25f4ee] transition font-medium">Home</a></li>
              <li><a href="#about" className="text-[#b1b1b1] hover:text-[#25f4ee] transition font-medium">About</a></li>
              <li><a href="#services" className="text-[#b1b1b1] hover:text-[#25f4ee] transition font-medium">Services</a></li>
              <li><a href="#projects" className="text-[#b1b1b1] hover:text-[#25f4ee] transition font-medium">Projects</a></li>
            </ul>
          </div>

          {/* Office Address Section */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#25f4ee] shrink-0" size={20} />
                <a href="#home" className="text-[#b1b1b1] font-medium hover:text-[#25f4ee] transition">
                  Tariq Road, Near Rehmat e Shereen,<br />Karachi
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#F33E7B] shrink-0" size={18} />
                <a href="#home" className="text-[#b1b1b1] font-medium hover:text-[#25f4ee] transition">
                  Khurram@launchtok.shop
                </a>
              </li>
            </ul>
          </div>

          {/* Social Connect - LinkedIn Removed */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1DMyKn9QRC/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] border border-white/10 p-3 rounded-xl hover:border-[#25f4ee]/50 transition group"
              >
                <Facebook className="text-[#b1b1b1] group-hover:text-[#25f4ee]" size={20} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01d25294e18fdf2132?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] border border-white/10 p-3 rounded-xl hover:border-[#25f4ee]/50 transition group"
              >
                <Briefcase className="text-[#b1b1b1] group-hover:text-[#25f4ee]" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-[#555555] text-sm font-medium">
            © 2025 TikTok Launch. All rights reserved. | Developed for High-Performance Brands
          </p>
        </div>
      </div>
    </footer>
  );
}
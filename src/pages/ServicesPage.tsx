import { useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import AOS from 'aos';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#070707]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Empowering <span style={{ color: '#25f4ee' }}>DTC Brands</span> on TikTok shop
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Scaling the Brand's Products on TikTok Shop in the USA, UK, Spain and Ireland
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-20" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
              <img src="pl SS.jpg" alt="Scaling DTC Brands" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Scaling DTC Brands</h3>
              <p className="text-gray-400 text-sm">Growing your direct-to-consumer brand presence on TikTok Shop</p>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
              <img src="Affiliate.jpeg" alt="Boosting Wholesale Business" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Affiliate</h3>
              <p className="text-gray-400 text-sm">Expanding your brand with Affiliate</p>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
              <img src="3.jpg" alt="Selling on TikTok Shop Consultations" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">$1M Revenue Accelerator</h3>
              <p className="text-gray-400 text-sm">Expert guidance for launching and optimizing your TikTok Shop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gray-400 mb-2">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Special Services for <span style={{ color: '#25f4ee' }}>TikTok Shop</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { id: '01', title: 'DTC Brands Launch' },
              { id: '02', title: 'Private Label Business Launch' },
              { id: '03', title: 'Wholesale Business Launch' },
              { id: '04', title: 'Dropship Business Launch' },
              { id: '05', title: 'Product Syncing for Platforms' },
              { id: '06', title: 'TikTok Shop Business Consultations' },
            ].map((service, index) => (
              <div
                key={service.id}
                className="bg-[#070707] border border-gray-800 rounded-lg p-8 hover:border-[#25f4ee] transition-all group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl font-bold" style={{ color: '#25f4ee', opacity: 0.3 }}>
                      {service.id}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <button
                    style={{ backgroundColor: '#F33E7B' }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all flex-shrink-0"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gray-400 mb-2">Pricing Plans</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Amazing <span style={{ color: '#25f4ee' }}>Pricing</span> For Your Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DTC Brands */}
            <div
              className="bg-black border border-gray-800 rounded-lg p-8 hover:border-[#25f4ee] transition-all"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold text-white mb-2">DTC Brands Business Launch</h3>
              <p className="text-gray-400 text-sm mb-6">Become DTC with TikTok Shop</p>

              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#25f4ee' }}>$3500</span>
                <span className="text-gray-400 text-sm"> /per month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Affiliate Marketing & Shop Ads</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Brand Handle & Scaling</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Optimization & Analytics</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Sales & Revenue Tracking</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Competition & Best Practices</span>
                </li>
              </ul>

              <a
                href="#contact-form"
                className="block w-full text-center bg-transparent border border-gray-700 text-white py-3 rounded-lg hover:border-[#25f4ee] hover:bg-[#25f4ee] hover:text-black transition-all"
              >
                Click To Fill Form →
              </a>
            </div>

            {/* Wholesale - Most Popular */}
            <div
              className="bg-black border-2 rounded-lg p-8 relative md:scale-105 hover:scale-110 transition-transform"
              style={{ borderColor: '#25f4ee' }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-black text-xs font-bold px-4 py-1 rounded-full" style={{ backgroundColor: '#25f4ee' }}>
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Wholesale Business Launch</h3>
              <p className="text-gray-400 text-sm mb-6">Become B2B with Wholesale Business on TikTok</p>

              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#25f4ee' }}>15%</span>
                <span className="text-gray-400 text-sm"> /per month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Essential Branded Products</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Authorization Certificate</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Inventory Management</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Essential Partnership</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Scalability & Compliance</span>
                </li>
              </ul>

              <a
                href="#contact-form"
                className="block w-full text-center text-black py-3 rounded-lg transition-all font-semibold hover:opacity-90"
                style={{ backgroundColor: '#25f4ee' }}
              >
                Click To Fill Form →
              </a>
            </div>

            {/* Consultation */}
            <div
              className="bg-black border border-gray-800 rounded-lg p-8 hover:border-[#25f4ee] transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Consultation</h3>
              <p className="text-gray-400 text-sm mb-6">Accounting Business, e-branding and Marketing</p>

              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#25f4ee' }}>$100</span>
                <span className="text-gray-400 text-sm"> /per 30 minutes</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>All Growth 1:1 Video Session</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Direct Access To TikTok Shop</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>Brand Growth Strategies</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>For Entrepreneurs, Brand Owners & Business</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#25f4ee' }} />
                  <span>TikTok Shop Account Review</span>
                </li>
              </ul>

              <a
                href="#contact-form"
                className="block w-full text-center bg-transparent border border-gray-700 text-white py-3 rounded-lg hover:border-[#25f4ee] hover:bg-[#25f4ee] hover:text-black transition-all"
              >
                Click To Fill Form →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Talk for Your <span style={{ color: '#25f4ee' }}>TikTok</span> Business
            </h2>
            <p className="text-gray-400">
              Transform your challenges into solutions with our expert team
            </p>
          </div>

          <form className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="plantype" className="block text-sm font-medium text-gray-400 mb-2">
                  Plan Type*
                </label>
                <select
                  id="plantype"
                  className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                  required
                >
                  <option value="">Select a plan</option>
                  <option value="dtc">DTC Brands Launch</option>
                  <option value="wholesale">Wholesale Business Launch</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message/Questions*
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-black transition-all hover:opacity-90"
              style={{ backgroundColor: '#25f4ee' }}
            >
              Send Us Message →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import AOS from 'aos';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070707]">
      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Amazing <span style={{ color: '#25f4ee' }}>Pricing</span> For Your Projects
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* DTC Brands Business Launch */}
            <div
              className="bg-black border border-gray-800 rounded-lg p-8 hover:border-[#25f4ee] transition-all"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-white mb-2">DTC Brands Business Launch</h3>
              <p className="text-gray-400 text-sm mb-6">Become DTC with TikTok Shop</p>

              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#25f4ee' }}>$3500</span>
                <span className="text-gray-400 text-sm"> /per month</span>
              </div>

              <div className="mb-8">
                <p className="text-white font-semibold mb-4">What would you like best?</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Affiliate Marketing & Shop Ads</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Brand Handle & Scaling</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Optimization & Analytics</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Sales & Revenue Tracking</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Competition & Best Practices</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-transparent border border-gray-700 text-white py-3 rounded-lg hover:border-[#25f4ee] hover:bg-[#25f4ee] hover:text-black transition-all"
              >
                Click To Retrieve →
              </button>
            </div>

            {/* Wholesale Business Launch */}
            <div
              className="bg-black border-2 border-[#25f4ee] rounded-lg p-8 relative md:scale-105 hover:scale-110 transition-transform"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#25f4ee] text-black text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Wholesale Business Launch</h3>
              <p className="text-gray-400 text-sm mb-6">Become B2B with Wholesale Business on TikTok</p>

              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#25f4ee' }}>15%</span>
                <span className="text-gray-400 text-sm"> or Customized LOI serve</span>
              </div>

              <div className="mb-8">
                <p className="text-white font-semibold mb-4">What would you like best?</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Essential Branded Products</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Authorization Certificate</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Inventory Management</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Essential Partnership</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Scalability & Compliance</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full text-black py-3 rounded-lg transition-all font-semibold"
                style={{ backgroundColor: '#25f4ee' }}
              >
                Click To Retrieve →
              </button>
            </div>

            {/* Consultation */}
            <div
              className="bg-black border border-gray-800 rounded-lg p-8 hover:border-[#25f4ee] transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-white mb-2">Consultation</h3>
              <p className="text-gray-400 text-sm mb-6">Accounting Business, e-branding and Marketing</p>

              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#25f4ee' }}>$100</span>
                <span className="text-gray-400 text-sm"> /per 30 minutes</span>
              </div>

              <div className="mb-8">
                <p className="text-white font-semibold mb-4">What would you like best?</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>All Growth 1:1 Video Session</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Direct Access To TikTok Shop</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>Brand Growth Strategies</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>For Entrepreneurs, Brand Owners &amp; Business</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#25f4ee' }} />
                    <span>TikTok Shop Account Review</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-transparent border border-gray-700 text-white py-3 rounded-lg hover:border-[#25f4ee] hover:bg-[#25f4ee] hover:text-black transition-all"
              >
                Click To Retrieve →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Talk for Your <span style={{ color: '#25f4ee' }}>TikTok</span> Business
              </h2>
              <p className="text-gray-400 mb-8">
                Transform your challenges into solutions with our expert team. We'll analyze your TikTok Shop presence and create a strategic plan for sustainable growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#25f4ee' }}>
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">1+ Years of Experience</h4>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#25f4ee' }}>
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Trusted DTC Brands</h4>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#25f4ee' }}>
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Successfully Wholesale Businesses</h4>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#25f4ee' }}>
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Setting up a TikTok Shop Consultations</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div data-aos="fade-left">
              <form className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                    placeholder="Your name"
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

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="plan-type" className="block text-sm font-medium text-gray-400 mb-2">
                    Plan Type*
                  </label>
                  <select
                    id="plan-type"
                    className="w-full bg-[#070707] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25f4ee] transition-colors"
                    required
                  >
                    <option value="">Select a plan</option>
                    <option value="dtc">DTC Brands Business Launch</option>
                    <option value="wholesale">Wholesale Business Launch</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message/Questions*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
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
                  Submit Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

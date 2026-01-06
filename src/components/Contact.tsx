import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    planType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS DASHBOARD
    const SERVICE_ID = "service_p1atn9c"; 
    const TEMPLATE_ID = "template_1o2jnn8"; 
    const PUBLIC_KEY = "gyWkA-MMKB1U9_nIe"; 

    // templateParams keys match the {{variables}} we set in your EmailJS template
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      planType: formData.planType,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('Message Sent Successfully! I will get back to you soon.');
        setFormData({ fullName: '', email: '', phone: '', planType: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert('Failed to send message. Please check the console for details.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-[#070707] py-24 relative overflow-hidden" data-aos="fade-up">
      {/* Background Vertical Grid Lines from your screenshot */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white/20 h-full"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Content & Experience Checklist */}
        <div className="space-y-8" data-aos="fade-right" data-aos-delay="100">
          <div>
            <p className="text-gray-500 text-sm mb-4">Get In Touch</p>
            <h2 className="text-6xl font-bold text-white leading-tight">
              Let's Talk for Your <br />
              <span className="text-[#25f4ee]">TikTok Business</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-md">
              Transform your challenges into profitable business opportunities.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "5+ Years of Experience",
              "Scaling DTC Brands",
              "Boosting Wholesale Businesses",
              "Selling on TikTok Shop Consultations"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-white font-bold text-lg">
                <CheckCircle2 className="text-[#25f4ee]" size={28} />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white text-sm font-bold">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Richard D. Hammond" 
                  required
                  value={formData.fullName}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#25f4ee] transition-all"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white text-sm font-bold">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="support@gmail.com" 
                  required
                  value={formData.email}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#25f4ee] transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white text-sm font-bold">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="+880 (123) 456 88"
                  value={formData.phone}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#25f4ee] transition-all"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white text-sm font-bold">Plan Type *</label>
                <select 
                  required 
                  value={formData.planType}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-gray-400 outline-none focus:border-[#25f4ee] transition-all appearance-none"
                  onChange={(e) => setFormData({...formData, planType: e.target.value})}
                >
                  <option value="">Plan Type</option>
                  <option value="DTC Launch">DTC Launch</option>
                  <option value="Private Label">Private Label Business</option>
                  <option value="Wholesale">Wholesale Business</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-bold">Message/Questions? *</label>
              <textarea 
                placeholder="Write message" 
                rows={5} 
                required
                value={formData.message}
                className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#25f4ee] transition-all resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#F33E7B] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Us Message'} <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
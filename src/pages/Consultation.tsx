import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Users, Zap } from 'lucide-react';
import AOS from 'aos';
import emailjs from '@emailjs/browser';

export default function Consultation() {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: '',
    revenue: '',
    message: ''
  });

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_p1atn9c";
    const TEMPLATE_ID = "template_1o2jnn8";
    const PUBLIC_KEY = "gyWkA-MMKB1U9_nIe";

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      businessType: formData.businessType,
      revenue: formData.revenue,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('Consultation request sent! I will contact you soon to schedule your session.');
        setFormData({ fullName: '', email: '', phone: '', businessType: '', revenue: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert('Failed to send request. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const faqs = [
    {
      question: "What can I get during a TikTok Shop consultation?",
      answer: "During our consultation, you'll receive a comprehensive strategy tailored to your business. We cover TikTok Shop setup, product optimization, content strategy, creator partnerships, and scaling tactics specific to your niche. You'll walk away with an actionable roadmap to launch or scale your business."
    },
    {
      question: "What types of products can I sell on TikTok Shop?",
      answer: "Most products can be sold on TikTok Shop - from apparel and accessories to electronics, home goods, and more. However, certain categories like alcohol, weapons, and counterfeit items are restricted. During consultation, we'll analyze your product viability and recommend strategies."
    },
    {
      question: "How long do I need to consult to see results on TikTok Shop?",
      answer: "Our strategies are designed for quick results. Most clients see measurable traction within 30-60 days of implementation. However, the timeline depends on your starting point, budget, and execution speed. We provide ongoing support to ensure consistent scaling."
    },
    {
      question: "How much should I invest in TikTok Shop?",
      answer: "Investment varies based on your goals. For beginner brands, we recommend starting with $1,000-3,000 for initial launch and creator partnerships. For aggressive scaling, $5,000-10,000+ monthly is ideal. During consultation, we'll recommend the right investment level for your specific situation."
    }
  ];

  const advantages = [
    {
      icon: <Users size={32} />,
      title: "Sales Boost on TikTok Shop",
      description: "Access proven strategies to generate consistent sales and reach millions of TikTok users"
    },
    {
      icon: <Zap size={32} />,
      title: "Brand Growth Strategies",
      description: "Learn to build your brand authority and create lasting customer relationships"
    }
  ];

  return (
    <div className="min-h-screen bg-[#070707]">
      {/* Header */}
      <div className="fixed w-full top-0 z-40 bg-[#070707]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-[#25f4ee] transition"
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <h1 className="text-white font-bold">Consultation Booking</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center" data-aos="fade-up">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Boost Your <span className="text-[#25f4ee]">TikTok Shop</span> Sales & Build a Million-Dollar Brand
              </h1>
              <p className="text-[#b1b1b1] text-lg mb-6 leading-relaxed">
                Get a personalized strategy to scale your TikTok Shop business from zero to six figures in just months.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#25f4ee] flex-shrink-0 mt-1" size={20} />
                  <span className="text-white font-bold">Learn proven strategies from someone who's done it</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#25f4ee] flex-shrink-0 mt-1" size={20} />
                  <span className="text-white font-bold">Build your brand with a 1-3 Month roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#25f4ee] flex-shrink-0 mt-1" size={20} />
                  <span className="text-white font-bold">Direct consultation from a 6-7 figure entrepreneur</span>
                </div>
              </div>

              <div className="text-sm text-[#b1b1b1] bg-white/5 rounded-lg p-4 border border-white/10">
                <p>Only for serious entrepreneurs. If you're not 100% committed to scaling your TikTok Shop business, this might not be for you.</p>
              </div>
            </div>

            <div className="relative group" data-aos="fade-left" data-aos-delay="100">
              <img
                src="mali zoom out.png"
                alt="Consultant"
                className="relative w-full h-auto rounded-3xl object-cover"              />
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#25f4ee] transition"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="text-[#25f4ee] mb-4">{adv.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{adv.title}</h3>
                  <p className="text-[#b1b1b1] text-lg">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Form */}
          <div className="max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">Book Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-bold">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
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
                      placeholder="your@email.com"
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
                      placeholder="+1 (555) 000 0000"
                      value={formData.phone}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#25f4ee] transition-all"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-bold">Business Type *</label>
                    <select
                      required
                      value={formData.businessType}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-gray-400 outline-none focus:border-[#25f4ee] transition-all appearance-none"
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    >
                      <option value="">Select business type</option>
                      <option value="New Brand (Starting from 0)">New Brand (Starting from 0)</option>
                      <option value="Existing Brand (Want to Scale)">Existing Brand (Want to Scale)</option>
                      <option value="Private Label">Private Label</option>
                      <option value="Wholesale">Wholesale Business</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-bold">Current Monthly Revenue *</label>
                  <select
                    required
                    value={formData.revenue}
                    className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-gray-400 outline-none focus:border-[#25f4ee] transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  >
                    <option value="">Select revenue range</option>
                    <option value="$0 - Starting out">$0 - Starting out</option>
                    <option value="$1K - $5K">$1K - $5K</option>
                    <option value="$5K - $20K">$5K - $20K</option>
                    <option value="$20K - $50K">$20K - $50K</option>
                    <option value="$50K+">$50K+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-bold">Tell me about your goals *</label>
                  <textarea
                    placeholder="What do you want to achieve with this consultation?"
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
                  className="w-full bg-[#F33E7B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#d63569] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-[#25f4ee] transition cursor-pointer"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                    <div className="text-[#25f4ee] flex-shrink-0">
                      {expandedFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6 border-t border-white/10">
                      <p className="text-[#b1b1b1] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

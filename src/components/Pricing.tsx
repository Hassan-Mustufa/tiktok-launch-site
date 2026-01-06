import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'DTC Brands Business Launch',
      price: '$3,500',
      period: '/month',
      features: [
        'Complete TikTok Shop setup',
        'Product listing optimization',
        'Affiliate marketing strategy',
        'GMV Max ads management',
        'Weekly performance reports',
        'Dedicated account manager'
      ],
      featured: false
    },
    {
      name: 'Wholesale Business Launch',
      price: '15%',
      period: 'of total revenue/month',
      features: [
        'B2B partnership development',
        'Wholesale account setup',
        'Inventory management',
        'Sales funnel optimization',
        'Revenue tracking dashboard',
        'Priority support'
      ],
      featured: true
    },
    {
      name: 'Consultation',
      price: '$100',
      period: '/30 minutes',
      features: [
        'One-on-one expert session',
        'Business analysis',
        'Growth strategy roadmap',
        'Q&A session',
        'Actionable recommendations',
        'Follow-up email summary'
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Pricing <span className="text-[#25f4ee]">Plans</span>
          </h2>
          <p className="text-[#b1b1b1] text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              className={`bg-[#1f1f1f] p-8 rounded-2xl border-2 transition ${
                plan.featured
                  ? 'border-[#25f4ee] transform lg:scale-105'
                  : 'border-gray-800 hover:border-[#25f4ee]'
              }`}
            >
              {plan.featured && (
                <div className="bg-[#25f4ee] text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#25f4ee]">{plan.price}</span>
                <span className="text-[#b1b1b1] ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[#25f4ee] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#b1b1b1]">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold transition ${
                  plan.featured
                    ? 'bg-[#25f4ee] text-black hover:bg-[#1fd9d3]'
                    : 'bg-[#F33E7B] text-white hover:bg-[#d63569]'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  overview: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
}

const caseStudies: Record<number, CaseStudyData> = {
  1: {
    id: 1,
    title: 'Private Label Business Launch',
    subtitle: 'Launch Strategy',
    image: 'https://i.ibb.co/Hf2rHPp3/1.jpg',
    overview: 'Here\'s a straightforward and proven strategy to help you achieve consistent sales within just 2 months.',
    sections: [
      {
        title: 'Be Proactive in Reaching Out for Collaborations',
        content: 'Set a goal to send 10,000-20,000 outreach messages each month to potential creators. This effort should result in approximately 300-1,000 sample requests. The more creators you connect with, the wider your brand\'s reach becomes.'
      },
      {
        title: 'Choose Your Sample Recipients Wisely',
        content: 'While you can send 300 free samples per month, don\'t distribute them randomly. Focus on creators who regularly get 1,000+ views per video and can help you generate around $5k in GMV. Quality creators bring much more value.'
      },
      {
        title: 'Tap Into Leading Agencies',
        content: 'Now that TikTok Shop has launched its "Top Agency" feature in the Affiliate tab, reach out to agencies that represent influential creators. These agencies have the expertise and established networks to deliver significant results for your brand.'
      },
      {
        title: 'Run GMV Max Ads for High-Performing Products',
        content: 'Once a product hits $3,000+ in GMV and has at least 50 creative videos, start running GMV Max ads. This ad format consistently generates results when applied to high-performing products following this formula.'
      },
      {
        title: 'Participate in TikTok Shop\'s Campaigns',
        content: 'Always take part in TikTok Shop\'s exclusive limited campaigns. These initiatives expose your products to a wider audience, resulting in increased visibility and higher sales potential.'
      },
      {
        title: 'Build a CRM Systems',
        content: 'A well-structured CRM system can significantly improve conversion rates, boost purchase frequency, and strengthen customer relationships. By consistently applying this strategy and fine-tuning your methods, you can achieve 50-100 sales per day. Check out this recent success story from one of my clients who used this exact strategy and saw impressive results.'
      }
    ]
  },
  2: {
    id: 2,
    title: 'GMV Max Ads Optimization',
    subtitle: 'Algorithm-led Performance',
    image: 'https://i.ibb.co/xKbW7ZnX/2.jpg',
    overview: 'My ad strategies typically target an ROI between 3x and 5x through data-driven optimization and creative precision.',
    sections: [
      {
        title: 'Creative to Audience Matching',
        content: 'By optimizing creative-to-audience matching, I ensure 90% of your spend is hitting high-intent buyers ready to convert.'
      },
      {
        title: '3.0x - 5.0x Target ROI',
        content: 'Through continuous A/B testing and performance analysis, we maintain consistent ROI targets that maximize your advertising efficiency.'
      },
      {
        title: '90% Precision Targeting',
        content: 'Advanced audience segmentation ensures your ads reach the most valuable customers, reducing wasted ad spend and improving overall campaign performance.'
      },
      {
        title: 'Dynamic Creative Testing',
        content: 'Continuous creative rotation and testing identifies top-performing variations, allowing us to scale winning combinations quickly.'
      },
      {
        title: 'Performance Analytics',
        content: 'Detailed reporting and analytics provide clear insights into campaign performance, helping identify optimization opportunities.'
      },
      {
        title: 'Conversion Rate Optimization',
        content: 'By consistently refining targeting, creative, and landing pages, we achieve higher conversion rates and better overall ROI.'
      }
    ]
  },
  3: {
    id: 3,
    title: '$1M Revenue Accelerator',
    subtitle: '6-Month Roadmap to Seven Figures',
    image: 'https://i.ibb.co/jPkqL1Ss/3.jpg',
    overview: 'This is a high-intensity scaling system designed for brands ready to dominate TikTok Shop and capture massive market share.',
    sections: [
      {
        title: 'Seven-Figure Scaling Blueprint',
        content: 'A comprehensive roadmap covering all aspects of scaling from initial launch through $1M+ revenue generation.'
      },
      {
        title: 'Aggressive Market Entry',
        content: 'Strategic positioning and rapid scaling tactics designed to establish your brand as a market leader in 180 days.'
      },
      {
        title: 'Viral Lifecycle Management',
        content: 'Managing every stage of a product\'s viral lifecycle to maximize momentum and sustain growth over time.'
      },
      {
        title: 'Multi-Channel Integration',
        content: 'Leveraging TikTok Shop, GMV Max Ads, and affiliate marketing in a coordinated system for maximum impact.'
      },
      {
        title: 'Team Building & Automation',
        content: 'Scaling operations efficiently by building systems that reduce manual work and allow for exponential growth.'
      },
      {
        title: 'Revenue Milestone Framework',
        content: 'Clear phases: $100K (Phase 1: 0-6 months), $500K (Phase 2: 6-10 months), $1M+ (Phase 3: Year 1)'
      }
    ]
  },
  4: {
    id: 4,
    title: 'Viral Affiliate Marketing Plan',
    subtitle: 'Mass-Volume Content Production',
    image: 'https://i.ibb.co/R4h67NrC/4.png',
    overview: 'Based on data, a concentrated push of 100+ high-quality creator videos acts as a viral trigger for exponential growth.',
    sections: [
      {
        title: '100+ Creator Video Sprints',
        content: 'Coordinated campaigns with 100+ creators producing high-quality content simultaneously to create viral momentum.'
      },
      {
        title: 'Content Whitelisting Strategy',
        content: 'Strategic approach to content selection ensuring maximum engagement and conversion from your target audience.'
      },
      {
        title: 'High-Velocity Outreach',
        content: 'Rapid-scale creator outreach programs designed to onboard and activate creators at unprecedented speeds.'
      },
      {
        title: 'Viral Trigger Mechanics',
        content: 'Proprietary systems that identify and amplify content patterns proven to generate viral traction.'
      },
      {
        title: 'Creator Management',
        content: 'End-to-end support for creator relationships, from onboarding through campaign execution and payment.'
      },
      {
        title: 'Performance Monitoring',
        content: 'Real-time tracking of content performance allowing for rapid iteration and scaling of winning strategies.'
      }
    ]
  },
  5: {
    id: 5,
    title: 'Full-Cycle Customer Management',
    subtitle: 'Shop Health & Customer Satisfaction',
    image: 'https://i.ibb.co/zTF2gZ4c/5.png',
    overview: 'Protecting your shop health is non-negotiable through proactive management ensuring excellent ratings.',
    sections: [
      {
        title: 'Shop Health Protection',
        content: 'Comprehensive monitoring and management of all shop health metrics to maintain excellent algorithmic standing.'
      },
      {
        title: 'Customer Satisfaction Management',
        content: 'Proactive customer service protocols ensuring positive experiences and reducing returns and complaints.'
      },
      {
        title: 'Retention Optimization',
        content: 'Strategies to improve repeat purchase rates and customer lifetime value through targeted engagement.'
      },
      {
        title: 'Algorithmic Priority Unlocking',
        content: 'Maintaining excellent ratings unlocks TikTok\'s priority algorithm placement for maximum visibility.'
      },
      {
        title: 'Review & Rating Management',
        content: 'Systems to encourage positive reviews and address issues quickly to maintain rating integrity.'
      },
      {
        title: 'Customer Communication',
        content: 'Consistent, professional communication building trust and loyalty with your customer base.'
      }
    ]
  }
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudyId = parseInt(id || '1');
  const caseStudy = caseStudies[caseStudyId];

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [caseStudyId]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#F33E7B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d63569] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const nextId = caseStudyId < 5 ? caseStudyId + 1 : 1;
  const prevId = caseStudyId > 1 ? caseStudyId - 1 : 5;

  return (
    <div className="min-h-screen bg-[#070707]">
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
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(`/case-study/${prevId}`)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
              >
                <ArrowLeft size={18} />
              </button>
              <span className="text-[#b1b1b1]">{caseStudyId}/5</span>
              <button
                onClick={() => navigate(`/case-study/${nextId}`)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#b1b1b1] text-sm mb-4 uppercase tracking-widest">
              TikTok Launch · Portfolio · <span className="text-[#25f4ee]">{caseStudy.title}</span>
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">{caseStudy.title}</h1>
          </div>

          <div className="mb-16 rounded-2xl overflow-hidden border border-white/10" data-aos="fade-up">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mb-16">
            <p className="text-[#b1b1b1] text-lg leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="100">{caseStudy.overview}</p>

            <div className="space-y-12">
              {caseStudy.sections.map((section, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={`${(index % 3) * 100}`}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}:</h2>
                  <p className="text-[#b1b1b1] text-lg leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
            <button
              onClick={() => navigate(`/case-study/${prevId}`)}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl transition"
            >
              <ArrowLeft size={18} />
              Previous Case Study
            </button>
            <button
              onClick={() => navigate(`/case-study/${nextId}`)}
              className="flex items-center justify-center gap-2 bg-[#F33E7B] hover:bg-[#d63569] text-white px-6 py-3 rounded-xl transition font-bold"
            >
              Next Case Study
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/#contact')}
              className="bg-[#25f4ee] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1fd9d3] transition inline-flex items-center gap-2"
            >
              Ready to Scale? Let's Talk
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import AOS from 'aos';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: number;
}

const blogPosts: Record<number, BlogPostData> = {
  1: {
    id: 1,
    title: 'A Route from 0 to $100K+ Revenue on TikTok Shop',
    excerpt: 'Discover the proven strategies and tactics that can take your brand from zero to six figures in revenue.',
    date: 'Feb 21, 2025',
    author: 'TikTok Launch',
    category: 'Growth Strategy',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 8,
    content: `
Introduction

Scaling from zero to $100K+ in revenue on TikTok Shop is not just possible—it's happening every day. The brands that succeed understand one fundamental truth: TikTok Shop is not like Amazon or other e-commerce platforms. It operates on a unique algorithm, requires different content strategy, and rewards authentic, high-velocity execution.

In this comprehensive guide, I'll break down the exact roadmap I've used to help multiple brands reach and exceed the $100K revenue milestone in their first 6-12 months.

Phase 1: Foundation & Setup (Week 1-4)

1. Shop Optimization
Before you launch any content or ads, your TikTok Shop needs to be perfectly optimized. This means:

- Product Photography: Use high-quality images with consistent branding. The first image is crucial—it should be clean, well-lit, and show the product clearly.
- Descriptions: Write compelling product descriptions that include benefits, not just features. Use keywords that potential customers are searching for.
- Pricing Strategy: Research competitor pricing and position yourself strategically. Don't compete on price alone.
- Collections: Organize products into collections that make sense for browsing and discovery.

2. Creator Partnership Setup
Start building relationships with creators BEFORE you go live:

- Research micro-creators (10K-100K followers) in your niche
- Reach out with personalized pitches and product samples
- Offer commission structures that are attractive (typically 20-40%)
- Create an easy onboarding process with clear brand guidelines

3. Content Foundation
Create 10-15 sample videos showing different angles of your product, use cases, and benefits. These will be used across creator campaigns and your own posts.

Phase 2: Creator-Driven Growth (Month 1-2)

Launch with Creator Wave
The most effective launch strategy is coordinating with 50+ creators to post content simultaneously:

- Send products to vetted creators
- Provide content briefs but allow creative freedom
- Schedule posts for peak TikTok hours (6-10 PM EST, 12-2 PM)
- Monitor performance in real-time and identify winners

Why This Works
When multiple creators post about your product at the same time, TikTok's algorithm sees this as a signal of relevance and pushes it to more people. This creates a viral spiral where success breeds more success.

Metrics to Track
- Views per post (target: 100K+)
- Click-through rate to shop (target: 3-5%)
- Conversion rate (target: 2-5%)
- Average order value

Phase 3: Scaling with Paid Ads (Month 2-3)

When to Start Ads
Don't run ads on day one. Wait until you have:
- At least 20 creator posts with positive engagement
- Product-market fit signals (high CTR, positive comments)
- Average order value data that makes ad spend viable

GMV Max Ads Strategy
Once your baseline is established:

1. Identify Top Performers: Which 3-5 products or variations are getting the most engagement?
2. Whitecard Creator Content: Have your best creators create "GMV Max" eligible content (product-focused, lower production value)
3. Start Small: Launch with $100-500 daily spend on your best performers
4. Optimize Daily: Monitor ROAS (Return On Ad Spend) and adjust targeting and creative

Target Metrics
- ROAS: 3x-5x
- CPC: $0.15-0.40
- Conversion Rate: 2-4%

Phase 4: Viral Triggers & Acceleration (Month 3-4)

The 100-Video Strategy
This is where most brands plateau and this is where they scale:

- Commission 100+ unique creator videos across your product range
- These don't all have to go live simultaneously
- Create a content calendar for consistent posting (5-10 per day)
- Let the algorithm find what resonates

Why 100 Videos Matter
The law of large numbers applies to content. With 100 videos:
- 10-20 will likely go viral (100K+ views)
- 30-40 will perform moderately (50K+ views)
- Even your "worst" content gets exposure

Monitoring & Iteration
- Track which styles/formats get highest engagement
- Identify your "viral hooks"
- Double down on what works
- Remove underperforming content quickly

Phase 5: Building Your Moat (Month 4+)

Customer Retention
Once you're hitting volume, retention becomes crucial:

- Email marketing: Build your list through the shop
- SMS campaigns: Announce new products and offers
- Community engagement: Respond to comments, build brand loyalty
- Repeat purchase incentives: Loyalty programs, VIP early access

Scaling Sustainably
At this point, you're not just acquiring customers—you're building a brand:

- Invest in brand development (logo, packaging, content)
- Explore additional sales channels (Instagram, YouTube)
- Optimize your supply chain for faster fulfillment
- Build a content creation team or agency relationship

Common Mistakes to Avoid

1. Launching Without Creator Base: Don't go live and expect organic virality immediately.
2. Competing on Price: You'll lose. Compete on story, quality, and positioning.
3. Ignoring Analytics: Track everything. Decision-making should be data-driven.
4. Giving Up Too Early: Most brands need 60-90 days to see real traction.
5. Ignoring Customer Service: Bad reviews kill sales faster than anything else.

Conclusion

Reaching $100K+ in revenue is absolutely achievable on TikTok Shop. The strategy requires coordination, content excellence, and consistent execution. Start with the foundation, build your creator army, scale with precision, and focus on retention.

The brands that win are those who understand that TikTok Shop is a new game with new rules. Embrace it, execute consistently, and the results will follow.

Ready to scale your TikTok Shop to $100K+? Book a consultation to discuss your specific situation.
    `
  },
  2: {
    id: 2,
    title: 'How to Sell on TikTok Shop: Complete Guide',
    excerpt: 'Everything you need to know about setting up and optimizing your TikTok Shop for maximum sales.',
    date: 'Feb 16, 2025',
    author: 'TikTok Launch',
    category: 'Tutorial',
    image: 'https://img.freepik.com/free-photo/online-shopping-concept_23-2151896842.jpg',
    readTime: 10,
    content: `
## Getting Started with TikTok Shop

TikTok Shop is the native e-commerce solution that allows you to sell directly to TikTok users without redirecting them to an external website. This is a game-changer for several reasons:

- **Lower friction**: Users can purchase without leaving the app
- **Algorithm benefits**: TikTok rewards shop integration with better reach
- **Direct engagement**: You build a community around your products

## Step 1: Eligibility & Requirements

Before you can open a TikTok Shop, ensure you meet these requirements:

- Must be 18+ years old
- Valid government ID
- Business license or taxpayer ID
- Bank account for payouts
- Verified TikTok account with 5,000+ followers (typical requirement, but can vary by region)

## Step 2: Shop Setup

### Creating Your Shop

1. Go to your TikTok Creator Center
2. Click "Shop" then "Go to Shop"
3. Fill in business information
4. Set up payment and payout details
5. Add shop policies (shipping, returns, etc.)

### Branding Your Shop

- **Shop Name**: Make it memorable and keyword-rich
- **Shop Icon**: Use your logo or product image
- **Shop Banner**: Create an attractive banner that reflects your brand
- **Shop Description**: Write a compelling description that tells your story

## Step 3: Product Upload

### Product Information

For each product, you need:

- **Title**: Clear, keyword-rich (50-70 characters)
- **Description**: Compelling benefits + features (500-1000 characters)
- **Price**: Competitive and profitable
- **Images**: 9+ images from different angles, with first image being the most important
- **Videos**: Add short demo or unboxing videos (optional but recommended)
- **Categories**: Proper categorization helps with discovery
- **Variants**: Size, color, etc.

### Image Best Practices

- Use white or clean backgrounds
- Show product in use when possible
- Include lifestyle shots
- Demonstrate size/scale with a hand or object
- Final image should show packaging

## Step 4: Shipping & Fulfillment

### Shipping Options

1. **Shipping from Your Location**: You handle all logistics
2. **Fulfillment by Marketplace**: Pay warehouse/logistics partner
3. **Dropshipping**: Third-party supplies and ships

### Shipping Settings

- Set shipping costs by region
- Establish processing time (1-3 days recommended)
- Offer tracking numbers
- Plan for returns and refunds

## Step 5: Launching Your First Product

### Pre-Launch Checklist

- [ ] Product photos optimized
- [ ] Description is compelling and SEO-optimized
- [ ] Price is competitive
- [ ] Shipping details are clear
- [ ] Payment method is verified
- [ ] Creator partnerships are lined up
- [ ] Content calendar is ready

### Launch Strategy

1. **Soft Launch**: Start with your creator network
2. **Content Push**: Post 5-10 videos about the product
3. **Engage**: Respond to all comments and questions
4. **Optimize**: Adjust based on early performance
5. **Scale**: Introduce ads and expand reach

## Step 6: Content Strategy for Shop Success

### Content Types That Sell

1. **Problem-Solution**: Show the problem, then your product solving it
2. **Unboxing**: Unbox your product with genuine reactions
3. **Demo**: Show product in action
4. **Transformation**: Before/after scenarios
5. **Testimonials**: Customer reviews and feedback
6. **Behind-the-Scenes**: Show the making/packing process

### Posting Schedule

- Post 5-10 videos daily during launch phase
- Focus on peak hours (6-10 PM EST)
- Variety in content formats and styles
- Mix organic posts with creator content

## Common Questions

**Q: Can I sell from any location?**
A: TikTok Shop is available in select regions. Check if it's available in your country.

**Q: What's the commission TikTok takes?**
A: Typically 5% of transaction value, but this varies by product category and region.

**Q: How long until I make sales?**
A: With proper strategy, 7-14 days. Without strategy, could take months.

**Q: Should I use ads immediately?**
A: No. Build organic traction first, then scale with ads.

## Conclusion

TikTok Shop is a powerful sales channel for the right products and strategy. Success requires optimization, content consistency, and community engagement. Start with fundamentals, track your metrics, and scale what works.
    `
  },
  3: {
    id: 3,
    title: 'Why Should Brands Consider TikTok Shop in 2025',
    excerpt: 'Explore the compelling reasons why TikTok Shop should be part of your e-commerce strategy this year.',
    date: 'Feb 10, 2025',
    author: 'TikTok Launch',
    category: 'Insights',
    image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 6,
    content: `
## Why Now is the Time for TikTok Shop

2025 marks a critical inflection point for e-commerce. The landscape has shifted dramatically from 2024, and brands that understand this shift will dominate their categories.

## Reason 1: Algorithm Advantage

TikTok's algorithm is fundamentally different from Facebook/Instagram. While Meta rewards age and established accounts, TikTok rewards content quality and engagement. This means:

- **New accounts can go viral**: Your shop doesn't need an existing audience
- **Niche products find their audience**: The algorithm is exceptional at matching content with interested users
- **Organic reach is still possible**: Paid ads work, but organic can be highly profitable

## Reason 2: Lower Competition

Compared to Amazon, Shopify, and even Instagram Shopping, TikTok Shop still has significantly lower competition. This creates an opportunity window:

- **Less saturated**: Fewer sellers means better visibility
- **Lower acquisition costs**: CAC (Customer Acquisition Cost) is lower than other platforms
- **New user incentives**: TikTok still offers benefits to early adopters

This window won't stay open forever. First-movers will have a lasting advantage.

## Reason 3: Perfect for Video-First Products

TikTok Shop works exceptionally well for:

- **Physical products that demonstrate well on video**: Home goods, fashion, gadgets
- **Trending/seasonal products**: Capitalize on trends quickly
- **High-margin items**: You can afford the acquisition cost
- **Niche/passionate communities**: Collectors, enthusiasts, hobbyists

## Reason 4: Creator Economy Integration

Unlike traditional e-commerce:

- **Affiliate commission**: Pay creators directly for sales
- **Easy collaboration**: Creators can link to your shop directly
- **Authentic promotion**: Creator recommendations carry real weight
- **Community building**: Your customers are also potential content creators

## Reason 5: Direct Customer Access

With email collection and community building:

- **Owned audience**: Customer emails are yours
- **Repeat purchases**: 70% of revenue can come from repeat customers
- **Lifetime value**: One customer can be worth 10x+ their first purchase
- **Predictable revenue**: Repeat customers create consistent income

## Reason 6: International Expansion

TikTok Shop is available in multiple countries:

- **US, UK, Southeast Asia, Latin America**: Multiple high-value markets
- **One platform**: Manage all regions from one dashboard (in many cases)
- **Cultural adaptation**: Create region-specific content easily
- **Arbitrage opportunities**: Source from one country, sell in another

## Reason 7: Data Insights

TikTok provides exceptional analytics:

- **Content performance**: See exactly which videos drive sales
- **Customer demographics**: Understand who's buying
- **Trending products**: Identify what's hot before it peaks
- **Optimization data**: Make data-driven decisions quickly

## The Window is Closing

Major brands and agencies are waking up to TikTok Shop's potential. What was a niche opportunity in 2024 will be mainstream competition in 2026.

The brands that will dominate are those that:

1. **Start now** while acquisition costs are still reasonable
2. **Master the content** before their competitors do
3. **Build communities** that become brand advocates
4. **Scale systematically** with data-driven approaches

## Investment Required

You don't need significant capital to test TikTok Shop:

- **Minimal**: $1,000 to test concept (product + basic marketing)
- **Moderate**: $5,000-10,000 to run a real campaign
- **Aggressive**: $20,000+ to dominate a niche

Even with the minimal investment, successful execution can return 10-50x.

## Final Thoughts

TikTok Shop isn't a trend—it's a structural shift in e-commerce. The platform's algorithm, creator integration, and user behavior all favor commerce happening within TikTok.

Brands that embrace this now will build defensible advantages:
- Established customer base
- Proven content playbooks
- Creator relationships
- Repeat purchase revenue

Don't wait for TikTok Shop to mature. The brands winning now are the ones building community and perfecting execution while most competitors are still wondering if it's "real."

**Ready to launch your TikTok Shop? Let's discuss your strategy.**
    `
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id || '1');
  const post = blogPosts[postId];

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="bg-[#F33E7B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d63569] transition"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const nextId = postId < 3 ? postId + 1 : 1;
  const prevId = postId > 1 ? postId - 1 : 3;

  return (
    <div className="min-h-screen bg-[#070707]">
      {/* Header */}
      <div className="fixed w-full top-0 z-40 bg-[#070707]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-white hover:text-[#25f4ee] transition"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>
            <h1 className="text-white font-bold hidden sm:block">Blog</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/10" data-aos="fade-up">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Post Header */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-[#F33E7B]/20 text-[#F33E7B] px-4 py-2 rounded-full text-sm font-bold">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-[#b1b1b1] text-sm">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-[#b1b1b1] text-sm">
                <span>•</span>
                {post.readTime} min read
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-[#b1b1b1]">
              <div className="w-12 h-12 rounded-full bg-[#25f4ee]/20 flex items-center justify-center">
                <User size={20} className="text-[#25f4ee]" />
              </div>
              <div>
                <p className="font-bold text-white">{post.author}</p>
                <p className="text-sm">TikTok Shop Expert</p>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div
            className="prose prose-invert max-w-none mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-[#b1b1b1] text-lg leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-white mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                  return (
                    <ul key={index} className="space-y-2 ml-6 list-disc">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.match(/^\d+\. /)) {
                  const items = paragraph.split('\n').filter(line => line.match(/^\d+\. /));
                  return (
                    <ol key={index} className="space-y-2 ml-6 list-decimal">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith('**Q:') && paragraph.includes('**A:')) {
                  const [q, a] = paragraph.split('**A:');
                  return (
                    <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <p className="font-bold text-white mb-2">{q.replace('**Q: ', '').replace('**', '')}</p>
                      <p>{a.replace('**', '')}</p>
                    </div>
                  );
                }
                return (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-6 pt-12 border-t border-white/10 mb-12">
            <button
              onClick={() => navigate(`/blog/${prevId}`)}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl transition"
            >
              <ArrowLeft size={18} />
              Previous Post
            </button>
            <button
              onClick={() => navigate(`/blog/${nextId}`)}
              className="flex items-center justify-center gap-2 bg-[#F33E7B] hover:bg-[#d63569] text-white px-6 py-3 rounded-xl transition font-bold"
            >
              Next Post
              <ArrowRight size={18} />
            </button>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/5 rounded-2xl p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale Your TikTok Shop?</h3>
            <p className="text-[#b1b1b1] mb-6">
              Get a personalized strategy consultation tailored to your business goals.
            </p>
            <button
              onClick={() => navigate('/consultation')}
              className="bg-[#25f4ee] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1fd9d3] transition inline-flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Calendar, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Blog() {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      title: 'A Route from 0 to $100K+ Revenue on TikTok Shop',
      excerpt: 'Discover the proven strategies and tactics that can take your brand from zero to six figures in revenue.',
      date: 'Feb 21, 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'How to Sell on TikTok Shop: Complete Guide',
      excerpt: 'Everything you need to know about setting up and optimizing your TikTok Shop for maximum sales.',
      date: 'Feb 16, 2025',
      image: 'https://img.freepik.com/free-photo/online-shopping-concept_23-2151896842.jpg'
    },
    {
      id: 3,
      title: 'Why Should Brands Consider TikTok Shop in 2025',
      excerpt: 'Explore the compelling reasons why TikTok Shop should be part of your e-commerce strategy this year.',
      date: 'Feb 10, 2025',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#1f1f1f]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest <span className="text-[#25f4ee]">Insights</span>
          </h2>
          <p className="text-[#b1b1b1] text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends and strategies in e-commerce
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#070707] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#25f4ee] transition group cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#25f4ee] text-sm mb-3">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#b1b1b1] mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[#25f4ee] font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/blog')}
            className="bg-[#F33E7B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d63569] transition inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

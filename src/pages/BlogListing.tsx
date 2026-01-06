import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calendar, ArrowRight, ArrowLeft, Search } from 'lucide-react';
import AOS from 'aos';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const allPosts: BlogPostData[] = [
  {
    id: 1,
    title: 'A Route from 0 to $100K+ Revenue on TikTok Shop',
    excerpt: 'Discover the proven strategies and tactics that can take your brand from zero to six figures in revenue.',
    date: 'Feb 21, 2025',
    category: 'Growth Strategy',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 8
  },
  {
    id: 2,
    title: 'How to Sell on TikTok Shop: Complete Guide',
    excerpt: 'Everything you need to know about setting up and optimizing your TikTok Shop for maximum sales.',
    date: 'Feb 16, 2025',
    category: 'Tutorial',
    image: 'https://img.freepik.com/free-photo/online-shopping-concept_23-2151896842.jpg',
    readTime: 10
  },
  {
    id: 3,
    title: 'Why Should Brands Consider TikTok Shop in 2025',
    excerpt: 'Explore the compelling reasons why TikTok Shop should be part of your e-commerce strategy this year.',
    date: 'Feb 10, 2025',
    category: 'Insights',
    image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 6
  }
];

export default function BlogListing() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = allPosts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = ['All', 'Growth Strategy', 'Tutorial', 'Insights'];

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
            <h1 className="text-white font-bold">Latest Blog</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Latest <span className="text-[#25f4ee]">News</span>
            </h1>
            <p className="text-[#b1b1b1] text-xl max-w-2xl mx-auto">
              TikTok Launch · <span className="text-[#25f4ee]">Blog</span>
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-4 text-[#25f4ee]" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-[#25f4ee] transition-all"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#F33E7B] text-white'
                      : 'bg-white/5 text-[#b1b1b1] hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="space-y-12 mb-16">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="flex flex-col md:flex-row gap-8 pb-12 border-b border-white/10 last:border-b-0 hover:opacity-80 transition cursor-pointer group"
                  onClick={() => navigate(`/blog/${post.id}`)}
                  data-aos="fade-up"
                  data-aos-delay={`${(index % 3) * 100}`}
                >
                  {/* Image */}
                  <div className="md:w-80 flex-shrink-0">
                    <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className="bg-[#F33E7B]/20 text-[#F33E7B] px-3 py-1 rounded-full text-xs font-bold uppercase">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-[#b1b1b1] text-sm">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <span className="text-[#b1b1b1] text-sm">•</span>
                        <span className="text-[#b1b1b1] text-sm">{post.readTime} min read</span>
                      </div>

                      <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-[#25f4ee] transition">
                        {post.title}
                      </h2>

                      <p className="text-[#b1b1b1] text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <button className="flex items-center gap-2 text-[#25f4ee] font-bold hover:gap-3 transition-all mt-6">
                      Read More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[#b1b1b1] text-xl">No articles found matching your search.</p>
              </div>
            )}
          </div>

          {/* Recent Sidebar Alternative */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Additional content area */}
            </div>

            <aside className="bg-white/5 rounded-2xl p-8 border border-white/10 h-fit">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {allPosts.slice(0, 3).map((post) => (
                  <button
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-left hover:text-[#25f4ee] transition group"
                  >
                    <p className="font-bold text-white group-hover:text-[#25f4ee] transition text-sm line-clamp-2">
                      {post.title}
                    </p>
                    <p className="text-[#b1b1b1] text-xs mt-1">{post.date}</p>
                  </button>
                ))}
              </div>

              <div className="border-t border-white/10 mt-6 pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Scale?</h3>
                <button
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-[#25f4ee] text-black px-4 py-3 rounded-lg font-bold hover:bg-[#1fd9d3] transition"
                >
                  Book Consultation
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

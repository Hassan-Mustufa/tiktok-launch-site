import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <div className="flex-shrink-0">
          <a href="/" className="block">
          <img
              src="https://i.ibb.co/Q4XmRTy/logo.png"
              alt="TokLaunch Logo"
              className="min-h-[100px] w-auto block h-auto scale-150 origin-left"
              style={{ height: '100px' }}
/>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <a href="/" className="hover:text-[#25f4ee] transition-colors">Home</a>
          <a href="/#services" className="hover:text-[#25f4ee] transition-colors">Services</a>
          <a href="/#about" className="hover:text-[#25f4ee] transition-colors">About</a>
          <button onClick={() => navigate('/blog')} className="hover:text-[#25f4ee] transition-colors">Blog</button>
          <button onClick={() => navigate('/consultation')} className="hover:text-[#25f4ee] transition-colors">Consultation</button>
          <button onClick={() => navigate('/consultation')} className="bg-[#25f4ee] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-all">
            Get Started
          </button>
        </nav>

        <div className="md:hidden text-white text-3xl">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4">
          <a href="/" className="hover:text-[#25f4ee] transition-colors">Home</a>
          <a href="/#services" className="hover:text-[#25f4ee] transition-colors">Services</a>
          <a href="/#about" className="hover:text-[#25f4ee] transition-colors">About</a>
          <button onClick={() => { navigate('/blog'); setIsMenuOpen(false); }} className="hover:text-[#25f4ee] transition-colors">Blog</button>
          <button onClick={() => { navigate('/consultation'); setIsMenuOpen(false); }} className="hover:text-[#25f4ee] transition-colors">Consultation</button>
          <button onClick={() => { navigate('/consultation'); setIsMenuOpen(false); }} className="bg-[#25f4ee] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-all">
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
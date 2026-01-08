import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Milestones from './components/Milestones';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './pages/CaseStudy';
import Consultation from './pages/Consultation';
import BlogListing from './pages/BlogListing';
import BlogPost from './pages/BlogPost';
import ServicesPage from './pages/ServicesPage';

function Home() {
  return (
    <div className="bg-[#070707]">
      <Header />
      <Hero />
      <About />
      <Milestones />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<><Header /><ServicesPage /><Footer /></>} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;

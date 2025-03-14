
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${
            scrolled ? 'text-purple-900' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link text-sm tracking-wider font-medium uppercase ${
              scrolled ? 'text-purple-900' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link text-sm tracking-wider font-medium uppercase ${
              scrolled ? 'text-purple-900' : 'text-white'
            }`}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`nav-link text-sm tracking-wider font-medium uppercase ${
              scrolled ? 'text-purple-900' : 'text-white'
            }`}
          >
            Services
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <div className="rounded-full bg-white/90 p-2 shadow-lg">
              <img 
                src="https://i.ibb.co/3Y1GYn4x/final-logo.png" 
                alt="Divine Daze Events Logo" 
                className="w-10 h-10"
              />
            </div>
            <span className={`ml-3 font-serif italic text-lg font-semibold ${
              scrolled ? 'text-purple-500' : 'text-white'
            } whitespace-nowrap`}>
              DivineDaze <span className="text-purple-500">Events</span>
            </span>
          </Link>
        </div>

        {/* Right Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/gallery" 
            className={`nav-link text-sm tracking-wider font-medium uppercase ${
              scrolled ? 'text-purple-900' : 'text-white'
            }`}
          >
            Gallery
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link text-sm tracking-wider font-medium uppercase ${
              scrolled ? 'text-purple-900' : 'text-white'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link text-sm tracking-wider font-medium uppercase ${
              scrolled ? 'text-purple-900' : 'text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu (Hidden by default) */}
        <div className={`md:hidden fixed inset-0 bg-purple-950/95 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <div className="flex justify-center mb-8">
              <Link to="/" className="flex items-center">
                <div className="rounded-full bg-white/90 p-2 shadow-lg mr-3">
                  <img 
                    src="https://i.ibb.co/3Y1GYn4x/final-logo.png" 
                    alt="Divine Daze Events Logo" 
                    className="w-10 h-10"
                  />
                </div>
                <span className="font-serif italic text-lg font-semibold text-white whitespace-nowrap">
                  DivineDaze <span className="text-purple-300">Events</span>
                </span>
              </Link>
            </div>
            
            <Link 
              to="/" 
              className="py-4 text-xl font-medium border-b border-purple-800 text-white"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-4 text-xl font-medium border-b border-purple-800 text-white"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="py-4 text-xl font-medium border-b border-purple-800 text-white"
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="py-4 text-xl font-medium border-b border-purple-800 text-white"
            >
              Gallery
            </Link>
            <Link 
              to="/blog" 
              className="py-4 text-xl font-medium border-b border-purple-800 text-white"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="py-4 text-xl font-medium border-b border-purple-800 text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Placeholder for the mobile menu button to maintain layout */}
        <div className="w-6 md:hidden"></div>
      </div>
    </header>
  );
};

export default Navbar;

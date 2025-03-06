
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkle } from 'lucide-react';

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
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wedding-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="nav-link text-sm tracking-wider font-medium uppercase"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link text-sm tracking-wider font-medium uppercase"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="nav-link text-sm tracking-wider font-medium uppercase"
          >
            Services
          </Link>
        </nav>

        {/* Logo */}
        <Link 
          to="/" 
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center text-purple-600 font-serif text-2xl font-semibold italic tracking-wider"
        >
          <Sparkle className="mr-2 text-purple-600" size={24} />
          Luxury<span className="text-purple-800">Events</span>
        </Link>

        {/* Right Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/gallery" 
            className="nav-link text-sm tracking-wider font-medium uppercase"
          >
            Gallery
          </Link>
          <Link 
            to="/blog" 
            className="nav-link text-sm tracking-wider font-medium uppercase"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="nav-link text-sm tracking-wider font-medium uppercase"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu (Hidden by default) */}
        <div className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <Link 
              to="/" 
              className="py-4 text-xl font-medium border-b border-purple-100"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-4 text-xl font-medium border-b border-purple-100"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="py-4 text-xl font-medium border-b border-purple-100"
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="py-4 text-xl font-medium border-b border-purple-100"
            >
              Gallery
            </Link>
            <Link 
              to="/blog" 
              className="py-4 text-xl font-medium border-b border-purple-100"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="py-4 text-xl font-medium"
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

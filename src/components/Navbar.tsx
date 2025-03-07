
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkle, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-purple-900/30 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-white"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-white"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-white"
          >
            Services
          </Link>
        </nav>

        {/* Logo */}
        <Link 
          to="/" 
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center text-white font-serif text-2xl font-semibold italic tracking-wider"
        >
          <Sparkle className="mr-2 text-purple-300" size={24} />
          Luxury<span className="text-purple-200">Events</span>
        </Link>

        {/* Right Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/gallery" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-white"
          >
            Gallery
          </Link>
          <Link 
            to="/blog" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-white"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-white"
          >
            Contact
          </Link>
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-purple-200/10 hover:bg-purple-200/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="text-yellow-300" size={18} /> : <Moon className="text-white" size={18} />}
          </button>
        </nav>

        {/* Mobile Menu (Hidden by default) */}
        <div className={`md:hidden fixed inset-0 bg-purple-950/95 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
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
            
            {/* Mobile Theme Toggle */}
            <div className="mt-6 flex items-center">
              <span className="text-white mr-3">Theme:</span>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="text-yellow-300" size={18} /> : <Moon className="text-white" size={18} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Placeholder for the mobile menu button to maintain layout */}
        <div className="w-6 md:hidden"></div>
      </div>
    </header>
  );
};

export default Navbar;

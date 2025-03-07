
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkle, Moon, Sun, Music, VolumeX } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);

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

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.log("Audio autoplay blocked by browser", e);
          setIsMuted(true);
        });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-purple-950/95 backdrop-blur-sm shadow-sm py-3' : 'bg-purple-900/30 backdrop-blur-sm py-6'
      }`}
    >
      {/* Background Audio */}
      <audio ref={audioRef} loop className="hidden">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-purple-900 dark:text-white"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-purple-900 dark:text-white"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-purple-900 dark:text-white"
          >
            Services
          </Link>
        </nav>

        {/* Logo */}
        <Link 
          to="/" 
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="rounded-full bg-white/90 dark:bg-purple-800/90 p-2 shadow-lg mb-1">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5726/5726500.png" 
              alt="Divine Daze Events Logo" 
              className="w-10 h-10"
            />
          </div>
          <span className="font-serif italic text-lg md:text-xl font-semibold text-purple-700 dark:text-purple-300">
            Divine Daze <span className="text-purple-500 dark:text-purple-200">Events</span>
          </span>
        </Link>

        {/* Right Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/gallery" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-purple-900 dark:text-white"
          >
            Gallery
          </Link>
          <Link 
            to="/blog" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-purple-900 dark:text-white"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="nav-link text-sm tracking-wider font-medium uppercase text-purple-900 dark:text-white"
          >
            Contact
          </Link>
          
          {/* Audio Toggle */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-purple-200/50 hover:bg-purple-200/80 transition-colors dark:bg-purple-700/50 dark:hover:bg-purple-700/80"
            aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          >
            {isMuted ? <Music className="text-purple-700 dark:text-purple-300" size={18} /> : <VolumeX className="text-purple-700 dark:text-purple-300" size={18} />}
          </button>
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-purple-200/50 hover:bg-purple-200/80 transition-colors dark:bg-purple-700/50 dark:hover:bg-purple-700/80"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="text-yellow-500" size={18} /> : <Moon className="text-purple-700" size={18} />}
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
            
            <div className="mt-6 flex items-center space-x-4">
              {/* Mobile Audio Toggle */}
              <div className="flex items-center">
                <span className="text-white mr-3">Music:</span>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
                  aria-label={isMuted ? "Unmute background music" : "Mute background music"}
                >
                  {isMuted ? <Music className="text-white" size={18} /> : <VolumeX className="text-white" size={18} />}
                </button>
              </div>
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center">
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
        </div>
        
        {/* Placeholder for the mobile menu button to maintain layout */}
        <div className="w-6 md:hidden"></div>
      </div>
    </header>
  );
};

export default Navbar;


import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <footer className="parallax-footer bg-purple-900 text-white pt-16 pb-8" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3)' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif mb-4">Luxury<span className="text-purple-300">Events</span></h3>
            <p className="text-sm text-gray-300 mb-4">
              Creating elegant and memorable celebrations since 2010. Our passion is turning your dream events into reality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/divinedazeevents" className="text-gray-300 hover:text-purple-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-serif mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Wedding Planning</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Birthday Parties</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Engagement & Proposals</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Haldi Ceremonies</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">Receptions</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-serif mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-purple-300" />
                <span className="text-gray-300 text-sm">834, Roongta Futurex, Near RD Circle, Nashik, 422008.</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-purple-300" />
                <a href="tel:+918847739236" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">+91 8847739236</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-purple-300" />
                <a href="mailto:divinedazeevents@gmail.com" className="text-gray-300 hover:text-purple-300 transition-colors text-sm">divinedazeevents@gmail.com</a>
              </li>
            </ul>
            
            {/* Theme Toggle */}
            <div className="mt-6 flex items-center">
              <span className="text-sm text-gray-300 mr-3">Theme:</span>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                }
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-800/50">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Divinedazeevents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

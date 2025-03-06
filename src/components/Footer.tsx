
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wedding-champagne/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Link 
              to="/" 
              className="text-wedding-lavender font-serif text-2xl font-semibold italic tracking-wider mb-6 inline-block"
            >
              Luxury<span className="text-wedding-gold">Events</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Creating unforgettable wedding experiences and celebrations with elegance, sophistication, and attention to every detail.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-wedding-charcoal">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-wedding-charcoal">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Full Wedding Planning
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Destination Weddings
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Day-of Coordination
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Luxury Event Styling
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-wedding-charcoal">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-wedding-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">123 Elegant Street, Suite 400<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-wedding-gold mr-3 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-wedding-gold mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@luxuryevents.com" 
                  className="text-gray-600 hover:text-wedding-gold transition-colors duration-300"
                >
                  info@luxuryevents.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Luxury Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

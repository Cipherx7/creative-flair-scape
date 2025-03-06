
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ServiceCard = ({ title, description, image, link, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white overflow-hidden shadow-sm transition-all duration-500 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="image-container h-64 md:h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300 group"
        >
          <span className="mr-2 uppercase text-sm tracking-wider font-medium">Learn More</span>
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

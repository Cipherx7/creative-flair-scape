
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const slides: HeroSlide[] = [
    {
      image: '/lovable-uploads/d73fb99a-d589-4c90-af8c-2dbb1dc6e629.png',
      title: 'Luxury Weddings & Celebrations',
      subtitle: 'Creating unforgettable moments',
    },
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Destination Ceremonies',
      subtitle: 'Your dream location awaits',
    },
    {
      image: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Elegant Receptions',
      subtitle: 'Designed to perfection',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAnimating(true);
      }, 500);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isAnimating ? 1 : 0,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <div className={`${isAnimating ? 'hero-slide-appear' : 'opacity-0'} transition-all duration-500 max-w-3xl mx-auto`}>
          <h1 className="text-white text-4xl md:text-6xl font-serif font-medium mb-4 tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 font-light">
            {slides[currentSlide].subtitle}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 transition duration-300 group"
          >
            <span className="mr-2 tracking-wider uppercase text-sm font-medium">Book a Consultation</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(true);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

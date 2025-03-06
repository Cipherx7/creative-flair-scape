
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our wedding was absolutely perfect! The team at Luxury Events handled every detail with elegance and professionalism. We couldn't have asked for a more beautiful celebration.",
    name: "Amelia & James",
    role: "Married May 2023",
    image: "https://images.unsplash.com/photo-1623778864982-6f1b19790322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "From the first consultation to the day of our wedding, they exceeded every expectation. Their attention to detail and creative vision brought our dream wedding to life.",
    name: "Sophie & Michael",
    role: "Married August 2023",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "Our destination wedding in Bali was handled flawlessly. They coordinated everything across continents with ease. Every guest was impressed with how smoothly everything went.",
    name: "Elena & David",
    role: "Married October 2023",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const goToNext = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(true);
    }, 300);
  };

  const goToPrev = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 md:py-24 overflow-hidden bg-wedding-blush/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  current === index 
                    ? isAnimating 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center md:space-x-10">
                  {testimonial.image && (
                    <div className="w-24 h-24 mb-6 md:mb-0 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-lg md:text-xl italic text-gray-700 mb-6 font-serif">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-medium text-wedding-charcoal">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full border border-wedding-charcoal/30 flex items-center justify-center text-wedding-charcoal/70 hover:text-wedding-gold hover:border-wedding-gold transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-wedding-charcoal/30 flex items-center justify-center text-wedding-charcoal/70 hover:text-wedding-gold hover:border-wedding-gold transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

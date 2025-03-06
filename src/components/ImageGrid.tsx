
import { useState, useEffect, useRef } from 'react';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
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

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
    >
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`image-container overflow-hidden ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-[400px] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

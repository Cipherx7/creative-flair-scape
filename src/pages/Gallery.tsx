import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = [
    { id: "all", name: "All" },
    { id: "ceremony", name: "Ceremonies" },
    { id: "reception", name: "Receptions" },
    { id: "decor", name: "Decor" },
    { id: "destination", name: "Destination" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      alt: "Bride and groom under floral arch",
      category: "ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Elegant table setting",
      category: "reception",
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Floral centerpiece",
      category: "decor",
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Beach wedding ceremony",
      category: "destination",
    },
    {
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      alt: "Bride getting ready",
      category: "ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1470048154181-23de3be0cd95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Outdoor reception under lights",
      category: "reception",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Destination wedding location",
      category: "destination",
    },
    {
      src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Wedding venue decoration",
      category: "decor",
    },
    {
      src: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Bride and groom walking down aisle",
      category: "ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Wedding reception tables",
      category: "reception",
    },
    {
      src: "https://images.unsplash.com/photo-1512237798647-84b57b22b517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      alt: "Tropical wedding location",
      category: "destination",
    },
    {
      src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Wedding flowers detail",
      category: "decor",
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      
      <PageHeader 
        title="Gallery" 
        description="Browse our portfolio of beautiful weddings and celebrations, showcasing our attention to detail and design expertise."
      />

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-wedding-gold text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={index} delay={index % 3 * 100}>
                <div 
                  className="image-container cursor-pointer overflow-hidden h-[350px]"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-wedding-gold transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div 
            className="max-w-5xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

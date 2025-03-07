
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Wedding Planning",
      description: "Comprehensive planning services from engagement to the big day, ensuring every detail is perfectly executed.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services"
    },
    {
      title: "Destination Weddings",
      description: "Let us coordinate your perfect celebration at breathtaking locations around the world.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/services"
    },
    {
      title: "Event Design",
      description: "Transform your vision into reality with our bespoke design services, from thematic concepts to floral arrangements.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services"
    }
  ];

  const featuredImages = [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Elegant table setting with floral centerpieces"
    },
    {
      src: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Bride and groom walking down aisle"
    },
    {
      src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Wedding reception venue with elegant decor"
    }
  ];
  
  const portfolioEvents = [
    {
      title: "Beachside Wedding",
      location: "Malibu, California",
      description: "An intimate ceremony by the ocean with elegant white and blue decor.",
      image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mountain Engagement",
      location: "Aspen, Colorado",
      description: "A surprise proposal against the backdrop of snow-capped mountains.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxury Hotel Reception",
      location: "Beverly Hills",
      description: "A glamorous ballroom transformed with cascading floral arrangements.",
      image: "https://images.unsplash.com/photo-1464366400760-c92b46f8a120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Garden Birthday Party",
      location: "Palm Springs",
      description: "A colorful outdoor celebration with custom tenting and lighting.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Traditional Haldi Ceremony",
      location: "San Diego",
      description: "Vibrant decor and traditions honored in this pre-wedding celebration.",
      image: "https://images.unsplash.com/photo-1610173827045-430e0ab2aea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Anniversary Celebration",
      location: "Napa Valley",
      description: "An intimate vineyard dinner for a couple's 25th anniversary.",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Welcome to Luxury Events</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-wedding-charcoal dark:text-white">Creating Memorable Wedding Experiences</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                We are a premier wedding planning and event design company specializing in creating extraordinary celebrations. With meticulous attention to detail and a passion for perfection, we transform your vision into an unforgettable experience.
              </p>
              <Link 
                to="/about" 
                className="btn-primary inline-flex items-center group"
              >
                <span>About Us</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-purple-100/50 dark:bg-purple-800/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Our Portfolio</span>
              <h2 className="font-serif text-4xl mb-4 text-wedding-charcoal dark:text-white">Past Events</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our collection of extraordinary events we've had the privilege to create for our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white dark:bg-purple-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-1 text-wedding-charcoal dark:text-white">{event.title}</h3>
                    <p className="text-purple-600 dark:text-purple-300 text-sm mb-3">{event.location}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link 
                to="/gallery" 
                className="inline-flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 transition-colors duration-300 group"
              >
                <span className="mr-2 uppercase text-sm tracking-wider font-medium">View Full Gallery</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-wedding-ivory dark:bg-purple-900/60">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Our Expertise</span>
              <h2 className="font-serif text-4xl mb-4 text-wedding-charcoal dark:text-white">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From full-service wedding planning to day-of coordination, we offer a range of services to meet your unique needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-purple-100/30 dark:bg-purple-800/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="font-serif text-5xl mb-2 text-wedding-gold">250+</h3>
                <p className="text-gray-600 dark:text-gray-300 uppercase tracking-wider text-sm">Weddings Planned</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-5xl mb-2 text-wedding-gold">15</h3>
                <p className="text-gray-600 dark:text-gray-300 uppercase tracking-wider text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-5xl mb-2 text-wedding-gold">20+</h3>
                <p className="text-gray-600 dark:text-gray-300 uppercase tracking-wider text-sm">Destinations</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-5xl mb-2 text-wedding-gold">98%</h3>
                <p className="text-gray-600 dark:text-gray-300 uppercase tracking-wider text-sm">Happy Couples</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Our Portfolio</span>
              <h2 className="font-serif text-4xl mb-4 text-wedding-charcoal dark:text-white">Featured Celebrations</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Browse our portfolio of breathtaking weddings and events we've had the honor of designing and coordinating.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ImageGrid images={featuredImages} />
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link 
                to="/gallery" 
                className="inline-flex items-center text-wedding-charcoal dark:text-white hover:text-wedding-gold transition-colors duration-300 group"
              >
                <span className="mr-2 uppercase text-sm tracking-wider font-medium">View Full Gallery</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-purple-50 dark:bg-purple-800/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-wedding-charcoal dark:text-white">Ready to Create Your Dream Wedding?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10">
                Contact us today to schedule a consultation and begin the journey to your perfect celebration.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;


import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full Wedding Planning",
      description: "Our comprehensive planning service covers every aspect of your wedding from concept to execution. We'll be with you every step of the way, handling vendor selection, budget management, timeline creation, and all logistics.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Personalized planning timeline",
        "Venue selection assistance",
        "Vendor recommendations and management",
        "Budget development and tracking",
        "Design concept creation",
        "Guest management",
        "Day-of coordination",
        "Post-wedding wrap-up"
      ]
    },
    {
      title: "Partial Planning",
      description: "For couples who have already started planning but need professional guidance to bring everything together. We'll step in at any point in your planning journey and help you complete the process.",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      features: [
        "Planning consultation",
        "Vendor recommendations",
        "Design consultation",
        "Timeline creation",
        "Final weeks management",
        "Rehearsal coordination",
        "Wedding day management",
        "Vendor coordination"
      ]
    },
    {
      title: "Destination Weddings",
      description: "Specializing in creating unforgettable celebrations in stunning locations worldwide. We handle the complexities of planning across borders to deliver a seamless destination wedding experience.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      features: [
        "Destination selection assistance",
        "Local vendor sourcing",
        "Guest travel coordination",
        "Accommodation arrangements",
        "Welcome events planning",
        "Legal requirements management",
        "On-site coordination",
        "Multi-day event planning"
      ]
    },
    {
      title: "Design & Styling",
      description: "Transform your wedding vision into a cohesive, stunning reality. Our design services focus on creating a unique aesthetic that reflects your personal style and enhances your chosen venue.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Concept development",
        "Color palette creation",
        "Floral design",
        "Lighting design",
        "Furniture selection",
        "Table styling",
        "Backdrop creation",
        "Decor installation and removal"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <header className="py-20 md:py-28 bg-wedding-blush/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-wedding-charcoal">Our Services</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              From comprehensive planning to day-of coordination, we offer a range of services to bring your perfect wedding vision to life.
            </p>
          </div>
        </div>
      </header>

      {/* Service List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? 'mb-20 pb-20 border-b border-gray-100' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover shadow-md"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6 text-wedding-charcoal">{service.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <h3 className="font-medium text-wedding-charcoal mb-4">What's Included:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-wedding-gold mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300 group"
                  >
                    <span className="mr-2 uppercase text-sm tracking-wider font-medium">Request Information</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-wedding-ivory">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Our Approach</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-wedding-charcoal">The Planning Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our thoughtful planning process ensures that every aspect of your wedding is carefully considered and beautifully executed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 shadow-sm text-center relative">
                <div className="w-10 h-10 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-6 font-medium">1</div>
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Initial Consultation</h3>
                <p className="text-gray-600">
                  We begin with a detailed conversation about your vision, preferences, and priorities for your wedding day.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-6 font-medium">2</div>
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Design & Planning</h3>
                <p className="text-gray-600">
                  We create a comprehensive plan including design concepts, timelines, and vendor selections tailored to your style.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-6 font-medium">3</div>
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Coordination & Management</h3>
                <p className="text-gray-600">
                  We handle all logistics, vendor communications, and details to ensure a seamless planning experience.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="bg-white p-8 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-6 font-medium">4</div>
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Wedding Day Execution</h3>
                <p className="text-gray-600">
                  Our team oversees every aspect of your wedding day so you can fully enjoy each beautiful moment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Investment</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-wedding-charcoal">Pricing & Packages</h2>
              <p className="text-gray-600 mb-10">
                We offer customized packages to suit various needs and budgets. Contact us for a personalized quote based on your specific requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white p-8 shadow-sm border border-gray-100">
                  <h3 className="font-serif text-xl mb-2 text-wedding-charcoal">Essential</h3>
                  <p className="text-wedding-gold font-medium mb-6">Starting at $3,500</p>
                  <p className="text-gray-600 mb-6">
                    Perfect for couples seeking day-of coordination to ensure a smooth, stress-free wedding day.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300 group"
                  >
                    <span className="mr-2 text-sm">Get Details</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="bg-wedding-blush/20 p-8 shadow-sm border border-wedding-gold/10 relative">
                  <div className="absolute top-0 right-0 bg-wedding-gold text-white text-xs uppercase tracking-wider py-1 px-3">
                    Popular
                  </div>
                  <h3 className="font-serif text-xl mb-2 text-wedding-charcoal">Signature</h3>
                  <p className="text-wedding-gold font-medium mb-6">Starting at $8,500</p>
                  <p className="text-gray-600 mb-6">
                    Our most popular package includes partial planning services for couples who have started the process but need expert guidance.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300 group"
                  >
                    <span className="mr-2 text-sm">Get Details</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100">
                  <h3 className="font-serif text-xl mb-2 text-wedding-charcoal">Luxury</h3>
                  <p className="text-wedding-gold font-medium mb-6">Starting at $15,000</p>
                  <p className="text-gray-600 mb-6">
                    Comprehensive planning from engagement to wedding day, including full design services and premium vendor access.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300 group"
                  >
                    <span className="mr-2 text-sm">Get Details</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-wedding-champagne/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-wedding-charcoal">Ready to Start Planning?</h2>
              <p className="text-gray-600 mb-10">
                Contact us today to schedule a consultation and learn how we can help you create your dream wedding.
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
    </div>
  );
};

export default Services;

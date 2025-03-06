
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sophia Reynolds",
      role: "Founder & Lead Planner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      bio: "With over 15 years of experience in luxury event planning, Sophia brings creativity and precision to every celebration."
    },
    {
      name: "James Anderson",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "James transforms spaces into immersive experiences with his exceptional eye for design and innovative concepts."
    },
    {
      name: "Olivia Martinez",
      role: "Destination Wedding Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      bio: "Specializing in international celebrations, Olivia coordinates flawless destination weddings across the globe."
    },
    {
      name: "Michael Chen",
      role: "Logistics Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Michael ensures every event runs seamlessly, managing all logistics with exceptional attention to detail."
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <header className="py-20 md:py-28 bg-wedding-blush/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-wedding-charcoal">About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              We are a passionate team of wedding planners and designers dedicated to creating unforgettable celebrations and meaningful experiences.
            </p>
          </div>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img 
                src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Wedding celebration" 
                className="w-full h-auto rounded-sm shadow-md"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Our Story</span>
                <h2 className="font-serif text-3xl md:text-4xl mb-6 text-wedding-charcoal">A Legacy of Luxury and Excellence</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2008, Luxury Events began with a simple yet profound mission: to create weddings and celebrations that are as unique as the couples they honor. What started as a small team with big dreams has evolved into one of the most respected names in luxury event planning.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our journey has been defined by our unwavering commitment to excellence, attention to detail, and the personal relationships we build with each client. We believe that a truly exceptional wedding goes beyond beautiful decorations—it tells a story, creates an atmosphere, and leaves lasting memories.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to push the boundaries of creativity and innovation, bringing fresh perspectives to timeless traditions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-wedding-champagne/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Our Philosophy</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-wedding-charcoal">The Art of Celebration</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe that every wedding should be a true reflection of the couple's unique love story, personalities, and dreams. Our approach combines meticulous planning with creative vision to create celebrations that are both beautiful and meaningful.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We honor traditions while embracing innovation, ensuring that each event feels both timeless and fresh. With a commitment to exceptional service and attention to detail, we create seamless experiences where every moment unfolds exactly as envisioned.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-8 bg-white shadow-sm">
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Personalized Approach</h3>
                <p className="text-gray-600">
                  We take the time to truly understand your vision, preferences, and priorities to create a wedding that feels authentically you.
                </p>
              </div>
              <div className="text-center p-8 bg-white shadow-sm">
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Attention to Detail</h3>
                <p className="text-gray-600">
                  From grand design elements to the smallest touches, we ensure every detail is thoughtfully considered and perfectly executed.
                </p>
              </div>
              <div className="text-center p-8 bg-white shadow-sm">
                <h3 className="font-serif text-xl mb-4 text-wedding-charcoal">Seamless Experience</h3>
                <p className="text-gray-600">
                  We handle all logistics and coordination, allowing you and your guests to fully immerse in the celebration without worry.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">Meet The Team</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-wedding-charcoal">The People Behind Your Perfect Day</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our talented team of wedding professionals brings diverse expertise and a shared passion for creating extraordinary celebrations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white shadow-sm overflow-hidden group">
                  <div className="image-container h-80">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-1 text-wedding-charcoal">{member.name}</h3>
                    <p className="text-wedding-gold text-sm mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-wedding-rose/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-wedding-charcoal">Begin Your Journey With Us</h2>
              <p className="text-gray-600 mb-10">
                We would be honored to be part of your wedding day. Contact us to schedule a consultation and discover how we can bring your vision to life.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center group"
              >
                <span>Contact Us</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;

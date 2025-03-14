
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const About = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <BackgroundEffects />
      
      <PageHeader 
        title="About Us" 
        description="Learn more about our team of expert wedding planners and event designers."
      />

      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-3xl mb-6 text-wedding-charcoal">Our Story</h2>
                <p className="text-gray-600 mb-6">
                Founded by Nupur Patil in Nashik, DivinedazEvents specializes in designing bespoke, luxurious events that bring your vision to life. Whether it's an intimate gathering or a grand celebration, we ensure every detail is meticulously planned and executed.</p>
                <p className="text-gray-600">
                 With a passion for excellence and creativity, we serve clients globally, crafting unforgettable experiences that leave lasting impressions. At DivinedazEvents, we are committed to making your special moments extraordinary.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <img
                  src="https://i.ibb.co/3yybBDjY/final-logo-divine-da.png"
                  alt="Elegant wedding setup"
                  className="rounded-lg shadow-md"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-20">
            <ScrollReveal>
              <h2 className="font-serif text-3xl mb-6 text-wedding-charcoal text-center">Meet Our Founder</h2>
            </ScrollReveal>

            <div className="flex justify-center">
              <ScrollReveal delay={100}>
                <div className="text-center max-w-md">
                  <img
                    src="https://i.ibb.co/MkjBKsmM/nupur-profile.jpg"
                    alt="Nupur Patil"
                    className="rounded-full w-40 h-40 mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-serif text-2xl mb-2 text-wedding-charcoal">Nupur Patil</h3>
                  <p className="text-purple-600 font-medium mb-4">Founder & Creative Director</p>
                  <p className="text-gray-600">
                    With over 10 years of experience in event planning and design, Nupur brings creativity, 
                    elegance, and attention to detail to every event. Her passion for creating magical moments 
                    led her to establish DivinedazEvents, where she continues to transform dreams into reality.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

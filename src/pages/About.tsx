import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      
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
                  Luxury Events was founded in 2010 by Sarah Johnson, a passionate event planner with a vision for creating unforgettable celebrations. What started as a small, local business has grown into a premier event planning company serving clients worldwide.
                </p>
                <p className="text-gray-600">
                  Our team is dedicated to providing exceptional service and meticulous attention to detail, ensuring that every event is a true reflection of our clients' unique style and vision.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4ca6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Elegant wedding setup"
                  className="rounded-lg shadow-md"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-20">
            <ScrollReveal>
              <h2 className="font-serif text-3xl mb-6 text-wedding-charcoal text-center">Our Team</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    alt="Sarah Johnson"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                  />
                  <h3 className="font-serif text-xl mb-2 text-wedding-charcoal">Sarah Johnson</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    alt="Emily Davis"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                  />
                  <h3 className="font-serif text-xl mb-2 text-wedding-charcoal">Emily Davis</h3>
                  <p className="text-gray-600">Lead Planner</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-154ca6123c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Michael Brown"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                  />
                  <h3 className="font-serif text-xl mb-2 text-wedding-charcoal">Michael Brown</h3>
                  <p className="text-gray-600">Event Designer</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

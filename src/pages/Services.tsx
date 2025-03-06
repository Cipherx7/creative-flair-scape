import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

const Services = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      
      <PageHeader 
        title="Our Services" 
        description="Discover the comprehensive wedding and event planning services we offer."
      />

      <main className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-widest font-medium text-wedding-gold mb-4 inline-block">
                What We Offer
              </span>
              <h2 className="font-serif text-4xl mb-4 text-wedding-charcoal">
                Our Comprehensive Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a range of services to make your special day unforgettable.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">
                  Full Wedding Planning
                </h3>
                <p className="text-gray-600 mb-6">
                  From concept to execution, we handle every detail of your wedding,
                  ensuring a seamless and stress-free experience.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Venue Selection</li>
                  <li>Vendor Coordination</li>
                  <li>Budget Management</li>
                  <li>Timeline Creation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">
                  Destination Weddings
                </h3>
                <p className="text-gray-600 mb-6">
                  We specialize in planning weddings in breathtaking locations around
                  the world, creating unforgettable memories.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Location Scouting</li>
                  <li>Travel Arrangements</li>
                  <li>Local Vendor Selection</li>
                  <li>Customized Decor</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">
                  Event Design & Decor
                </h3>
                <p className="text-gray-600 mb-6">
                  Our expert designers will transform your vision into reality with
                  stunning decor and thematic concepts.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Thematic Design</li>
                  <li>Floral Arrangements</li>
                  <li>Lighting & Sound</li>
                  <li>Custom Decor Elements</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">
                  Day-of Coordination
                </h3>
                <p className="text-gray-600 mb-6">
                  Relax and enjoy your special day while we handle all the logistics
                  and coordination behind the scenes.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Vendor Management</li>
                  <li>Timeline Adherence</li>
                  <li>Problem Solving</li>
                  <li>Guest Coordination</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">
                  Vendor Selection
                </h3>
                <p className="text-gray-600 mb-6">
                  We help you choose the best vendors to match your style and budget,
                  from photographers to caterers.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Extensive Vendor Network</li>
                  <li>Negotiation Assistance</li>
                  <li>Contract Review</li>
                  <li>Quality Assurance</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal">
                  Custom Celebrations
                </h3>
                <p className="text-gray-600 mb-6">
                  We create unique and personalized celebrations for any occasion,
                  tailored to your specific needs and desires.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Birthday Parties</li>
                  <li>Anniversaries</li>
                  <li>Corporate Events</li>
                  <li>Themed Parties</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;

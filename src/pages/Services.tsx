
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900">
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
              <h2 className="font-serif text-4xl mb-4 text-wedding-charcoal dark:text-white">
                Our Comprehensive Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We provide a range of services to make your special occasions unforgettable.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01M9 15h6" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Wedding Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  From concept to execution, we handle every detail of your wedding,
                  ensuring a seamless and stress-free experience.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Venue Selection</li>
                  <li>Vendor Coordination</li>
                  <li>Budget Management</li>
                  <li>Timeline Creation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Destination Weddings
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We specialize in planning weddings in breathtaking locations around
                  the world, creating unforgettable memories.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Location Scouting</li>
                  <li>Travel Arrangements</li>
                  <li>Local Vendor Selection</li>
                  <li>Customized Decor</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Event Design & Decor
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our expert designers will transform your vision into reality with
                  stunning decor and thematic concepts.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Thematic Design</li>
                  <li>Floral Arrangements</li>
                  <li>Lighting & Sound</li>
                  <li>Custom Decor Elements</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Birthday Parties
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Create magical birthday celebrations for all ages with our customized party planning services.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Themed Decorations</li>
                  <li>Entertainment Booking</li>
                  <li>Catering Coordination</li>
                  <li>Custom Invitations</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Engagement & Proposals
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Plan the perfect moment to pop the question with our discreet and romantic proposal planning services.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Location Selection</li>
                  <li>Secret Photography</li>
                  <li>Romantic Setup</li>
                  <li>Post-Proposal Celebration</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Haldi Ceremony
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Celebrate this traditional pre-wedding ceremony with authentic decor and culturally appropriate arrangements.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Traditional Setup</li>
                  <li>Cultural Coordination</li>
                  <li>Authentic Decor</li>
                  <li>Photography Coverage</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Reception Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Host a memorable post-wedding reception with elegant design, entertainment and catering.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Venue Selection</li>
                  <li>Entertainment Booking</li>
                  <li>Seating Arrangements</li>
                  <li>Menu Planning</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Day-of Coordination
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Relax and enjoy your special day while we handle all the logistics
                  and coordination behind the scenes.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Vendor Management</li>
                  <li>Timeline Adherence</li>
                  <li>Problem Solving</li>
                  <li>Guest Coordination</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-wedding-charcoal dark:text-white">
                  Corporate Events
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Elevate your business events with our professional corporate event planning services.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Conference Planning</li>
                  <li>Team Building Events</li>
                  <li>Galas & Award Ceremonies</li>
                  <li>Product Launches</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;

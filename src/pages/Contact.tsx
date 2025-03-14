
import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900">
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        description="We would love to hear from you! Whether you're ready to start planning your dream wedding or have questions about our services, please reach out."
      />

      <main className="pt-16 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        
        {/* Team Member Section */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="font-serif text-3xl mb-10 text-center text-wedding-charcoal">Meet Our Founder</h2>
          
          <div className="flex justify-center">
            <div className="text-center max-w-md">
              <img
                src="https://i.ibb.co/MkjBKsmM/nupur-profile.jpg"
                alt="Nupur Patil Sawant"
                className="rounded-full w-40 h-40 mx-auto mb-4 object-cover"
              />
              <h3 className="font-serif text-2xl mb-2 text-wedding-charcoal">Nupur Patil Sawant</h3>
              <p className="text-purple-600 font-medium mb-4">Founder & Creative Director</p>
              <p className="text-gray-600">
                With over 10 years of experience in event planning and design, Nupur brings creativity, 
                elegance, and attention to detail to every event. Her passion for creating magical moments 
                led her to establish DivinedazEvents, where she continues to transform dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

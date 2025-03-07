
import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
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
      </main>
      
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Contact;

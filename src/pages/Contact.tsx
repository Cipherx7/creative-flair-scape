
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Engagement",
  "Proposal",
  "Haldi Ceremony",
  "Reception",
  "Anniversary",
  "Corporate Event",
  "Other"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleWhatsApp = () => {
    const text = `Hello LuxuryEvents! I'm interested in discussing my ${formData.eventType || "event"} plans.`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScrollReveal delay={100}>
                <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm text-center">
                  <div className="mx-auto bg-purple-100 dark:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Phone className="text-purple-600 dark:text-purple-300" size={24} />
                  </div>
                  <h3 className="font-serif text-xl mb-2 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">We're available Monday-Friday</p>
                  <a href="tel:+1234567890" className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium">
                    (123) 456-7890
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm text-center">
                  <div className="mx-auto bg-purple-100 dark:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Mail className="text-purple-600 dark:text-purple-300" size={24} />
                  </div>
                  <h3 className="font-serif text-xl mb-2 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:info@luxuryevents.com" className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium">
                    info@luxuryevents.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm text-center">
                  <div className="mx-auto bg-purple-100 dark:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <MapPin className="text-purple-600 dark:text-purple-300" size={24} />
                  </div>
                  <h3 className="font-serif text-xl mb-2 dark:text-white">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">By appointment only</p>
                  <address className="not-italic text-purple-600 dark:text-purple-300">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210
                  </address>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm">
                <h2 className="font-serif text-2xl mb-6 text-center dark:text-white">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-purple-700 dark:text-white"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-purple-700 dark:text-white"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-purple-700 dark:text-white"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Event Date (If known)
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-purple-700 dark:text-white"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-purple-700 dark:text-white"
                        value={formData.eventType}
                        onChange={handleChange}
                      >
                        <option value="">Select Event Type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-purple-700 dark:text-white"
                      placeholder="Tell us about your wedding plans or questions"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center group px-8"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="btn-primary bg-green-600 hover:bg-green-700 text-white border-green-700 inline-flex items-center group px-8"
                    >
                      <span>Contact via WhatsApp</span>
                      <MessageSquare size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

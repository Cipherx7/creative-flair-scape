import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-50">
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
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">We're available Monday-Friday</p>
                  <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-800 font-medium">
                    (123) 456-7890
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:info@luxuryevents.com" className="text-purple-600 hover:text-purple-800 font-medium">
                    info@luxuryevents.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-2">By appointment only</p>
                  <address className="not-italic text-purple-600">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210
                  </address>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="font-serif text-2xl mb-6 text-center">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date (If known)
                    </label>
                    <input
                      type="date"
                      id="event-date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your wedding plans or questions"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center group"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

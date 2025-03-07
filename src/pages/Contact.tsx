
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";

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

  const [web3FormData, setWeb3FormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
    budget: "",
    eventType: "",
    specialRequests: ""
  });

  const [activeForm, setActiveForm] = useState("standard"); // "standard" or "web3"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleWeb3Change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setWeb3FormData(prev => ({
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

  const handleWeb3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Web3 form submission logic would go here
    console.log("Web3 Form submitted:", web3FormData);
    alert("Thank you for your Web3 inquiry! We'll connect with you soon.");
  };

  const handleWhatsApp = () => {
    const text = `Hello Divine Daze Events! I'm interested in discussing my ${formData.eventType || "event"} plans.`;
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
                  <a href="mailto:info@divinedazeevents.com" className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium">
                    info@divinedazeevents.com
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
              <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm mb-10">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                      type="button"
                      onClick={() => setActiveForm("standard")}
                      className={`px-5 py-2 text-sm font-medium rounded-l-lg ${
                        activeForm === "standard" 
                          ? "bg-purple-600 text-white" 
                          : "bg-purple-100 text-purple-900 dark:bg-purple-700 dark:text-white"
                      }`}
                    >
                      Standard Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveForm("web3")}
                      className={`px-5 py-2 text-sm font-medium rounded-r-lg ${
                        activeForm === "web3" 
                          ? "bg-purple-600 text-white" 
                          : "bg-purple-100 text-purple-900 dark:bg-purple-700 dark:text-white"
                      }`}
                    >
                      <span className="flex items-center">
                        Web3 <Sparkles size={14} className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>

                {activeForm === "standard" ? (
                  <>
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
                          placeholder="Tell us about your event plans or questions"
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
                  </>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl mb-6 text-center dark:text-white">Web3 Event Planning</h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                      Explore innovative event solutions using Web3 technology. From NFT invitations to crypto payments, we're at the forefront of the future of event planning.
                    </p>
                    <form className="space-y-6" onSubmit={handleWeb3Submit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="web3-input"
                            placeholder="Enter your name"
                            value={web3FormData.name}
                            onChange={handleWeb3Change}
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
                            className="web3-input"
                            placeholder="Enter your email"
                            value={web3FormData.email}
                            onChange={handleWeb3Change}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                          Wallet Address (Optional)
                        </label>
                        <input
                          type="text"
                          id="walletAddress"
                          className="web3-input"
                          placeholder="0x..."
                          value={web3FormData.walletAddress}
                          onChange={handleWeb3Change}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            className="web3-input"
                            value={web3FormData.budget}
                            onChange={handleWeb3Change}
                            required
                          >
                            <option value="">Select Budget Range</option>
                            <option value="Under 1 ETH">Under 1 ETH</option>
                            <option value="1-5 ETH">1-5 ETH</option>
                            <option value="5-10 ETH">5-10 ETH</option>
                            <option value="10-20 ETH">10-20 ETH</option>
                            <option value="20+ ETH">20+ ETH</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Event Type
                          </label>
                          <select
                            id="eventType"
                            className="web3-input"
                            value={web3FormData.eventType}
                            onChange={handleWeb3Change}
                            required
                          >
                            <option value="">Select Event Type</option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                            <option value="Metaverse Event">Metaverse Event</option>
                            <option value="NFT Launch">NFT Launch</option>
                            <option value="DAO Gathering">DAO Gathering</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                          Special Requests
                        </label>
                        <textarea
                          id="specialRequests"
                          rows={6}
                          className="web3-input"
                          placeholder="Tell us about your Web3 event ideas and requirements"
                          value={web3FormData.specialRequests}
                          onChange={handleWeb3Change}
                          required
                        ></textarea>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="web3-button group flex items-center"
                        >
                          <span>Submit Web3 Inquiry</span>
                          <Sparkles size={16} className="ml-2" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Contact;

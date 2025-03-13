
import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      // Add your web3forms access key here
      formDataToSend.append("access_key", "a00e4a49-3bc2-4d32-a57e-d7e26f643bec");
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      }).then(res => res.json());
      
      if (res.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: "",
          message: ""
        });
      } else {
        toast({
          title: "Something went wrong",
          description: res.message || "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Divine Daze Events! I'm interested in discussing my ${formData.eventType || "event"} plans.`;
    const url = `https://wa.me/+9188477392369?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <ScrollReveal delay={400}>
      <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm mb-10">
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
                name="name"
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
                name="email"
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
              name="phone"
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
                name="eventDate"
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
                name="eventType"
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
              name="message"
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
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
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
  );
};

export default ContactForm;

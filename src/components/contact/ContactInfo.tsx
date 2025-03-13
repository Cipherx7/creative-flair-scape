
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <ScrollReveal delay={100}>
        <div className="bg-white dark:bg-purple-800 p-8 rounded-lg shadow-sm text-center">
          <div className="mx-auto bg-purple-100 dark:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <Phone className="text-purple-600 dark:text-purple-300" size={24} />
          </div>
          <h3 className="font-serif text-xl mb-2 dark:text-white">Call Us</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">We're available Monday-Sunday</p>
          <a href="tel:+918847739236" className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium">
            +91 8847739236
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
          <a href="mailto:divinedazeevents@gmail.com" className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium">
            divinedazeevents@gmail.com
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
            834,Roongta Futurex<br />
            Near RD Circle, Nashik,422008
          </address>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ContactInfo;

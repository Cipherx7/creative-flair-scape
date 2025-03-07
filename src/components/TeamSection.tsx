
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const TeamSection = () => {
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
      bio: "Sarah brings 15 years of experience in luxury event planning with a background in fine arts and design.",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
      bio: "With exceptional attention to detail, Michael ensures every event runs flawlessly from concept to execution.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Design Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      bio: "Priya specializes in creating breathtaking visual experiences that transform ordinary spaces into extraordinary memories.",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Client Relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      bio: "David focuses on building lasting relationships with clients to bring their unique vision to life.",
      social: {
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    }
  ]);

  return (
    <section className="py-16 lg:py-24 bg-purple-50/50 dark:bg-purple-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-purple-800 dark:text-purple-300">Meet Our Team</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            The talented professionals behind Divine Daze Events bring creativity, passion, and expertise to every celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={100 * index}>
              <div className="team-member">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-member-image w-full h-full object-cover"
                  />
                  <div className="team-member-info">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-purple-200 mb-2">{member.role}</p>
                    <p className="text-sm mb-4 opacity-90">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-white hover:text-purple-300" aria-label="Twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="text-white hover:text-purple-300" aria-label="Instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-white hover:text-purple-300" aria-label="LinkedIn">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

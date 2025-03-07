
import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, Tag, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Wedding Trends for 2024",
    excerpt: "Discover the latest wedding trends that are set to dominate the wedding scene in 2024. From sustainable practices to tech-integrated ceremonies...",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Weddings",
    date: "March 15, 2024",
    author: "Emily Johnson",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "How to Plan a Stress-Free Corporate Event",
    excerpt: "Planning a corporate event doesn't have to be stressful. Follow our expert tips to ensure your next business gathering is seamless, productive, and memorable...",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Corporate",
    date: "February 28, 2024",
    author: "Michael Chen",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Unique Engagement Party Ideas for Every Season",
    excerpt: "Looking for creative ways to celebrate your engagement? From winter wonderlands to summer garden parties, we've got seasonal ideas to inspire your celebration...",
    coverImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Engagements",
    date: "February 14, 2024",
    author: "Sarah Williams",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Web3 and the Future of Event Ticketing",
    excerpt: "Explore how blockchain technology is revolutionizing event ticketing, offering unprecedented security, flexibility, and new opportunities for engagement...",
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Technology",
    date: "January 30, 2024",
    author: "Alex Ripley",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Cultural Wedding Traditions: A Global Tour",
    excerpt: "Journey with us around the world as we explore fascinating wedding traditions from different cultures, their meanings, and how to respectfully incorporate them...",
    coverImage: "https://images.unsplash.com/photo-1630526720753-354c1a200a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Cultural Events",
    date: "January 12, 2024",
    author: "Priya Patel",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "The Ultimate Guide to Wedding Budgeting",
    excerpt: "Learn effective strategies for creating and sticking to your wedding budget, including cost-saving tips without compromising on your vision...",
    coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Planning",
    date: "December 28, 2023",
    author: "David Thompson",
    readTime: "7 min read"
  }
];

const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Engagements",
  "Technology",
  "Cultural Events",
  "Planning",
  "Tips & Tricks"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900">
      <Navbar />
      
      <PageHeader 
        title="Our Blog" 
        description="Stay updated with the latest trends, tips, and stories from the world of event planning and management."
      />

      <main className="pt-8 pb-20">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <ScrollReveal>
            <div className="mb-12 overflow-x-auto pb-4 flex justify-center">
              <div className="flex space-x-2 md:space-x-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                      activeCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-white dark:bg-purple-800 text-purple-900 dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <article className="bg-white dark:bg-purple-800 rounded-lg overflow-hidden shadow-sm h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                  <div className="image-container h-56">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-purple-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 dark:text-gray-300 text-xs">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-3 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-purple-700">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-700 p-4 text-center">
                    <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-300 text-sm font-medium hover:text-purple-800 dark:hover:text-white transition-colors">
                      Read More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Newsletter Signup */}
          <ScrollReveal>
            <div className="mt-16 bg-purple-100 dark:bg-purple-800/50 p-8 sm:p-10 rounded-xl text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 dark:text-white">Join Our Newsletter</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Sign up to receive updates on our latest blog posts, event tips, and exclusive offers.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md flex-grow border border-gray-300 dark:border-purple-600 dark:bg-purple-700/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

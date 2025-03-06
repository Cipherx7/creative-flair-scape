
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      
      <PageHeader 
        title="404 - Page Not Found" 
        description="We couldn't find the page you were looking for."
      />
      
      <div className="container mx-auto px-6 py-20 text-center">
        <a href="/" className="btn-primary inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

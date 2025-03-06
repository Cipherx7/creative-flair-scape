
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="py-20 md:py-28 bg-purple-100/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-wedding-charcoal">{title}</h1>
          {description && (
            <p className="text-lg text-gray-700 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;

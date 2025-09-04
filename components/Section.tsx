import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
          <span className="text-primary">.</span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';

const TimelineItem: React.FC<{ title: string; subtitle: string; period: string; description?: string; isLast?: boolean }> = ({ title, subtitle, period, description, isLast = false }) => (
  <div className="relative pl-8 sm:pl-12">
    <div className="absolute left-0 top-1 h-full">
      {!isLast && <div className="h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-light-bg dark:border-dark-bg"></div>
    </div>
    <div className="pb-12">
      <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
      <h3 className="text-xl font-bold mt-1">{title}</h3>
      <h4 className="font-semibold text-primary">{subtitle}</h4>
      {description && <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  </div>
);


const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Career & Education">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Professional Experience</h3>
          <div>
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem 
                key={item.role}
                title={item.role}
                subtitle={item.company}
                period={item.period}
                description={item.description}
                isLast={index === EXPERIENCE_DATA.length - 1}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Education</h3>
           <div>
            {EDUCATION_DATA.map((item, index) => (
              <TimelineItem 
                key={item.degree}
                title={item.degree}
                subtitle={item.institution}
                period={item.period}
                isLast={index === EDUCATION_DATA.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;

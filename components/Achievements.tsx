
import React from 'react';
import Section from './Section';
import { ACHIEVEMENTS_DATA } from '../constants';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {ACHIEVEMENTS_DATA.map((achievement, index) => (
          <div key={index} className="flex items-center p-4 bg-light-card dark:bg-dark-card rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mr-4 text-primary bg-primary/10 p-3 rounded-lg">
              <achievement.icon className="w-8 h-8"/>
            </div>
            <div>
              <h4 className="font-bold text-lg">{achievement.name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{achievement.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;

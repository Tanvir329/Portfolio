
import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {SKILLS_DATA.map((skill, index) => (
          <div 
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-light-card dark:bg-dark-card rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <skill.icon className="w-12 h-12 text-primary mb-3" />
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;


import React from 'react';
import Section from './Section';
import { PROJECTS_DATA } from '../constants';
import { GithubIcon } from './icons/SocialIcons';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={project.title} className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
                </div>
            </div>
            <div className="mt-auto flex justify-end space-x-4 pt-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

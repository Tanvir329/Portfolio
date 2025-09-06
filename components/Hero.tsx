import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/SocialIcons';
import { DownloadIcon } from './icons/GeneralIcons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="text-primary font-semibold">Hello, I'm</span>
          <h1 className="text-4xl md:text-6xl font-extrabold my-3">
            Tanvir Attar
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            Full Stack Java + React Developer | DevOps Enthusiast
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
            Building robust backends, elegant frontends, and automating the path between them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a href="/resume.pdf" download="Tanvir-Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-focus transition-colors duration-300">
                <DownloadIcon className="w-5 h-5" />
                Download Resume
            </a>
            <div className="flex space-x-4">
                <a href="https://github.com/Tanvir329" aria-label="GitHub Profile" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                    <GithubIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/tanvir-attar-728500190/" aria-label="LinkedIn Profile" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                    <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="mailto:attartanvir007@gmail.com" aria-label="Send Email" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                    <MailIcon className="w-6 h-6" />
                </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-teal-300 p-2 shadow-xl">
            <img 
              src="https://picsum.photos/400/400" 
              alt="Tanvir Attar"
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
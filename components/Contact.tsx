
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded-md bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
          <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-focus transition-colors duration-300">
            Send Message
          </button>
        </form>

        <div className="mt-12">
            <p className="mb-4">Or find me on:</p>
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/Tanvir329" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                    <GithubIcon className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/tanvir-attar-728500190/" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                    <LinkedinIcon className="w-8 h-8" />
                </a>
                <a href="mailto:attartanvir007@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                    <MailIcon className="w-8 h-8" />
                </a>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default Contact;

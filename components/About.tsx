
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          I'm a passionate Full Stack Developer with a strong foundation in building and deploying scalable applications. My expertise lies in creating robust backend systems with <span className="text-primary font-semibold">Java</span> and <span className="text-primary font-semibold">Spring Boot</span>, coupled with crafting intuitive user interfaces using <span className="text-primary font-semibold">React</span>.
        </p>
        <p className="mt-4">
          Beyond development, I have a deep interest in <span className="text-primary font-semibold">DevOps</span> culture and tooling. I'm experienced in setting up CI/CD pipelines, containerizing applications with <span className="text-primary font-semibold">Docker</span>, and orchestrating them with <span className="text-primary font-semibold">Kubernetes</span> on cloud platforms like <span className="text-primary font-semibold">AWS</span>. I thrive on bridging the gap between development and operations to deliver high-quality software efficiently.
        </p>
      </div>
    </Section>
  );
};

export default About;

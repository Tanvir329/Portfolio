import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './icons/GeneralIcons';

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <a href="#about" onClick={onClick} className="py-2 px-3 hover:text-primary transition-colors">About</a>
    <a href="#skills" onClick={onClick} className="py-2 px-3 hover:text-primary transition-colors">Skills</a>
    <a href="#projects" onClick={onClick} className="py-2 px-3 hover:text-primary transition-colors">Projects</a>
    <a href="#experience" onClick={onClick} className="py-2 px-3 hover:text-primary transition-colors">Experience</a>
    <a href="#contact" onClick={onClick} className="py-2 px-3 hover:text-primary transition-colors">Contact</a>
  </>
);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold">
          TA<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-2 font-medium">
          <NavLinks />
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card py-4 animate-fade-in-up">
          <div className="container mx-auto px-6 flex flex-col items-center space-y-4 font-medium">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
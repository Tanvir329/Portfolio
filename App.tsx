import React from 'react';
import {ThemeProvider} from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="text-light-text dark:text-dark-text font-sans antialiased">
                <Header/>
                <main className="container mx-auto px-6 md:px-12">
                    <Hero/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <Experience/>
                    <Achievements/>
                    <Contact/>
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default App;

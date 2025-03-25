import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import Footer
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default App;
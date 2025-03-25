import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="portfolio-title">
                <h1>My Portfolio</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
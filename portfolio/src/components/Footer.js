import React from 'react';
import './Footer.css'; // Ensure this CSS file is created

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Tesfaye Demelash. All rights reserved.</p>
            <p>Follow me on:</p>
            <div className="social-links">
                <a href="https://telegram/@T161621" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/telegram.svg" alt="Telegram" className="social-icon" />
                    Telegram
                </a>
                <a href="www.linkedin.com/in/tesfaye-demelash-b14400358" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
                    LinkedIn
                </a>
                <a href="https://github.com/Tesfaye2129" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" alt="GitHub" className="social-icon" />
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
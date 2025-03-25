import React from 'react';
import profilePicture from '../assets/111.JPG'; 
const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-container">
                <div className="text-content">
                    <p>
                    I am Tesfaye Demelash, and I am a Computer Science graduate with a special interest in web development. I am passionate about creating dynamic and user-friendly websites that enhance the user experience. With a strong foundation in programming, design principles, and modern web technologies, I am eager to apply my skills to build impactful web applications. I thrive in collaborative environments and enjoy solving challenging problems. In my free time, I love exploring new frameworks and contributing to open-source projects.
                    </p>
                    <div className='text-center mt-3'> 
                        <a href='/MyCV.pdf'
                            download="MyCV.pdf"
                            className='btn btn-primary px-4 py-2'>
                            <i className='fas fa-download'></i> Download CV 
                        </a>
                    </div>
                </div>
                <div className="profile">
                    <img src={profilePicture} alt="Tesfaye Demelash Aynalem" className="profile-picture" />
                    <h3>Tesfaye Demelash</h3>
                </div>
                
            </div>
        </section>
    );
};

export default About;
import React from 'react';
import image1 from '../assets/111.JPG'; // Adjusted for correct case
import image2 from '../assets/222.jpg'; // Adjusted for correct case
import image3 from '../assets/12.png'; // Adjusted for correct case
// import image4 from '../assets/444.jpg'; // Adjusted for correct case
// import image5 from '../assets/555.jpg'; // Adjusted for correct case

const projects = [
    {
        title: 'Project One',
        description: 'Gifaata festival event information management system mobile application',
        image: image1,
        link: 'https://github.com/Tesfaye2129/Android app'
    },
    {
        title: 'Project Two',
        description: 'React app',
        image: image2,
        link: 'https://github.com/Tesfaye2129/My portfolio'
    },
    {
        title: 'Project Three',
        description: 'Web based intelligent tutoring system.',
        image: image3,
        link: 'https://github.com/Tesfaye2129/Intelligent-Tutoring-System-'
    },
    /*
    {
        title: 'Project Four',
        description: 'Description of project four.',
        image: image4,
        link: 'https://example.com/project-four'
    },
    {
        title: 'Project Five',
        description: 'Description of project five.',
        image: image5,
        link: 'https://example.com/project-five'
    },
    */
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="text-center">My Projects</h2> {/* Added class for centering */}
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
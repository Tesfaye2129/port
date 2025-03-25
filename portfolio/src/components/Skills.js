import React from 'react';
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';

const skills = [
    { name: 'HTML & CSS', icon: <FaHtml5 style={{ color: '#E34F26', fontSize: '70px' }} />, description: 'Markup and styling languages.' }, // HTML5 brand color
    { name: 'PHP', icon: <FaPhp style={{ color: '#8892BE', fontSize: '70px' }} />, description: 'Server-side scripting language.' }, // PHP brand color
    { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E', fontSize: '70px' }} />, description: 'Programming language for web development.' }, // JavaScript brand color
    { name: 'React', icon: <FaReact style={{ color: '#61DBFB', fontSize: '70px' }} />, description: 'JavaScript library for building user interfaces.' }, // React brand color
    { name: 'Python', icon: <FaPython style={{ color: '#3776AB', fontSize: '70px' }} />, description: 'Versatile programming language.' }, // Python brand color
    { name: 'Java', icon: <FaJava style={{ color: '#007396', fontSize: '70px' }} />, description: 'Object-oriented programming language.' }, // Java brand color
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">My Skills</h2>
                <div className="d-flex justify-content-center flex-nowrap overflow-auto">
                    {skills.map((skill, index) => (
                        <div className="card mx-2 text-center" key={index} style={{ width: '150px', border: 'none' }}>
                            <div className="card-body">
                                {skill.icon}
                                <h5 className="card-title mt-2">{skill.name}</h5>
                                <p className="card-text">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
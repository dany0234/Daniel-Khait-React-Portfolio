import React, { useState } from 'react';
import paradox2 from "../../assets/images/paradox2.png"
import paradox1 from "../../assets/images/paradox1.png"
import paradox3 from "../../assets/images/paradox3.png"
import paradoxBackground from "../../assets/images/projects-paradox.png"
import DoubleBackground from "../../assets/images/projects-paradox.png"
import LogoReact from "../../assets/images/logo-js.png"
import LogoJs from "../../assets/images/logo-js.png"


import './index.scss';
import Modal from '../Modal';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const projects = [
        {
            id: "paradox",
            title: "Paradox-Activation",
            description: "A web application for activating guarantee policies. Featuring a user-friendly form for customers and an admin panel for management. ",
            built: "Built using React with Redux Toolkit, Node.js, MVC architecture, REST API, and MongoDB. Deployed on Heroku and integrates third-party APIs like Gmail, Dropbox, Twilio, and a WhatsApp bot.",
            technologies: ["React", "Redux Toolkit","Java Script", "Node.js", "MongoDB", "Heroku", "Gmail API", "Dropbox API", "Twilio", "WhatsApp"],
            image: [paradox1, paradox2, paradox3],
            link: "https://paradox-activation.com", // Update with actual project URL
            credentials: "Test Credentials: User: '0529999999' Admin: '0529999998'  OTP : '111111'" // Update with actual test credentials
        },
        {
            id: "2",
            title: "Project 2",
            description: "22222",
            technologies: ["React", "Node.js"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com"
        },
        {
            id: "3",
            title: "Project 3",
            description: "3333",
            technologies: ["React", "Node.js"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com"
        },
        {
            id: "4",
            title: "Project 4",
            description: "4444",
            technologies: ["React", "Node.js"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com"
        },
        {
            id: "5",
            title: "Project 5",
            description: "5555",
            technologies: ["React", "Node.js"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com"
        },
    ];

    const handleProjectChange = (index) => {
        setActiveProject(index);
    };

    // const handleSwipe = (direction) => {
    //     if (direction === 'left') {
    //         setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    //     } else {
    //         setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    //     }
    // };

    // const openModal = (image) => {
    //     setSelectedImage(image);
    //     setShowModal(true);
    // };

    const getBackgroundStyle = (projectId) => {
        switch (projectId) {
            case "paradox":
                return {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${paradoxBackground})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                };
            case "2":
                return {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${DoubleBackground})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                };

            default:
                return {}; // Default background style if needed
        }
    };

    const getProjectPosition = (index, activeIndex, totalProjects) => {
        if (index === activeIndex) return 'active';
        if (index === (activeIndex + 1) % totalProjects) return 'next';
        if (index === (activeIndex - 1 + totalProjects) % totalProjects) return 'prev';
        return 'hidden';
    };


    const getTechLogo = (techName) => {
        switch (techName) {
            case 'React':
                return LogoReact
            case 'Java Script':
                return LogoJs
            case 'Node.js':
                return '/path-to-nodejs-logo.png'; // Replace with actual path
            // Add more cases for other technologies
            default:
                return '/path-to-default-logo.png'; // A default logo if needed
        }
    };

    return (
        <div className="projects-page">
            <div className="projects-navbar">
                {projects.map((project, index) => (
                    <button key={index} className={activeProject === index ? 'active' : ''} onClick={() => handleProjectChange(index)}>
                        {project.title}
                    </button>
                ))}
            </div>

            <div className="projects-ring">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-item ${getProjectPosition(index, activeProject, projects.length)}`}
                        style={getBackgroundStyle(project.id)}
                        onClick={() => handleProjectChange(index)}
                    >
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            {/* i want the backgrounds to be rendered as well for all the projects */}
                        </div>
                        {index === activeProject && (
                            <div className="project-details">
                                {/* <img className='img' src={projects[activeProject].image} alt={projects[activeProject].title} /> */}

                                <p>{projects[activeProject].description}</p>
                                <p>{projects[activeProject].built}</p>

                                <p className="credentials">{projects[activeProject].credentials}</p>
                                <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Try Me Out!
                                </a>

                                {/* <div className="project-images">
                                    {projects[activeProject].image.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Project image ${index + 1}`}
                                            onClick={() => openModal(img)}
                                            className="clickable-image"
                                        />
                                    ))}
                                </div> */}

                                <div className="technologies-slider">
                                    <ul>
                                        {/* First sequence of technologies */}
                                        {projects[activeProject].technologies.map((tech, index) => (
                                            <li key={'first-' + index}>
                                                <img src={getTechLogo(tech)} alt={tech} className="tech-logo" />
                                                <span className="tech-name">{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        )}
                    </div>
                ))}
                {/* <div className="arrow left" onClick={() => handleSwipe('left')}>&lt;</div>
                <div className="arrow right" onClick={() => handleSwipe('right')}>&gt;</div> */}
            </div>


            {/* {showModal && <Modal selectedImage={selectedImage} setShowModal={setShowModal} />} */}
        </div>
    );
};

export default Projects;



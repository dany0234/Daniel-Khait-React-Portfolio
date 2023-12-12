import React, { useState } from 'react';
import paradox2 from "../../assets/images/paradox2.png"
import paradox1 from "../../assets/images/paradox1.png"
import paradox3 from "../../assets/images/paradox3.png"
import paradoxBackground from "../../assets/images/projects-paradox.png"
import orderdineBackground from "../../assets/images/order&dine-background.png"
import instagramBackground from "../../assets/images/instagram-background.png"
import babyshieldBackground from "../../assets/images/babyshield-background.png"
import DoubleBackground from "../../assets/images/projects-paradox.png"
import LogoReact from "../../assets/images/logo-react.png"
import LogoJs from "../../assets/images/logo-js.png"
import LogoMongo from "../../assets/images/logo-mongo.png"
import LogoNodejs from "../../assets/images/logo-nodejs.png"
import LogoHeroku from "../../assets/images/logo-heroku.png"
import LogoWhatsapp from "../../assets/images/logo-whatsapp.png"
import LogoTwilio from "../../assets/images/logo-twilio.png"
import LogoDropbox from "../../assets/images/logo-dropbox.png"
import LogoGmail from "../../assets/images/logo-gmail.png"
import LogoRedux from "../../assets/images/logo-redux.png"

import GitHubIcon from '../../assets/icons/github.svg';

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
            technologies: ["React", "Redux", "Java Script", "Node.js", "MongoDB", "Heroku", "Gmail", "Dropbox", "Twilio", "Whatsapp"],
            image: [paradox1, paradox2, paradox3],
            link: "https://paradox-activation-0d319237261f.herokuapp.com/",
            credentials: "Test Credentials: User: '0529999999' Admin: '0529999998'  OTP : '111111'",
            githubLink: "https://github.com/dany0234/paradox-activation"
        },
        {
            id: "instagram",
            title: "Dany-Gram",
            description: "Dany-gram is a simplified replica of Instagram, developed as a full-stack application using Vue.js for the frontend and Node.js with MongoDB for the backend. It emulates key features of social media interaction, including user registration, post creation, and a scrollable main page displaying all posts. Users can engage with content through likes and comments, as well as view individual profiles with uploaded photos. Dany-gram serves as a testament to modern web development practices, blending a user-friendly interface with efficient backend operations.",
            built: "Built using React with Redux Toolkit, Node.js, MVC architecture, REST API, and MongoDB. Deployed on Heroku and integrates third-party APIs like Gmail, Dropbox, Twilio, and a WhatsApp bot.",
            technologies: ["Vue.js", "JavaScript", "Node.js", "MongoDB", "Express", "CSS", "HTML", "REST API"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com",
            githubLink: "https://github.com/dany0234/insta-vuejs",
        },
        {
            id: "babyshield",
            title: "A Safe Environment For Our Little Ones",
            description: "BabyShield is an innovative three-part safety system designed to monitor infants. It features an AI-driven Audio Spectrogram Transformer (AST) that detects a baby's cry and triggers a surveillance system to record the incident. This footage is then securely uploaded to Firebase. Simultaneously, a user-friendly Android app alerts parents and provides instant access to the video, ensuring peace of mind and real-time awareness of their child's well-being.",
            technologies: ["Python", "Machine Learning", "Audio Processing", "Firebase", "Android", "Java", "Real-time Data", "Video Processing", "Cloud Storage"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com",
            githubLink: "https://github.com/BorisLasker/A-Safe-Invironment-For-Our-Little-Ones",
            videoLink: "https://clipchamp.com/watch/32NHOANB8on"
        },
        {
            id: "orderdine",
            title: "Order & Dine",
            description: "Order & Dine is a tailored web application developed for a catering company, designed to streamline their order management and kitchen operations. The app features a user-friendly interface for customers to easily place orders through a detailed form. On the backend, it equips kitchen staff with an efficient system to manage these orders, providing clear insights into required food quantities and order specifics. This dual-component app not only enhances customer experience but also optimizes kitchen workflow, embodying a perfect blend of customer service and operational management.",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express", "REST API", "Cloud Services"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com",
            githubLink: "",
        },
        {
            id: "contact",
            title: "Contact Connect",
            description: "Contact Connect is a dual-frontend, single-backend application, primarily developed as a learning project to understand multi-platform integration. It features a simple yet functional contact list, accessible through both a C# Winform and an Android app in Java. The interfaces, mirroring each other, display a table of contacts with options to create, modify, delete, and filter entries. Personal data and image upload functionalities are included. The backend, built with a C# web service and SQL database, is hosted on Azure, ensuring seamless data synchronization between the two fronts. This project showcases the practical application of cross-platform development and cloud integration in a straightforward, user-centric design.",
            technologies: ["C#", "WinForms", "Java", "Android Development", "SQL", "Azure", "Web Services", "REST API", "Cloud Database", "Docker"],
            image: "path/to/project1-image.jpg",
            link: "http://link-to-project1.com",
            githubLink: "",
        },
    ];

    const handleProjectChange = (index) => {
        setActiveProject(index);
    };

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
        } else {
            setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const getBackgroundStyle = (projectId, forPage = false) => {
        const baseStyle = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundBlendMode: 'overlay'
        };
        switch (projectId) {
            case "paradox":
                if (forPage) {
                    return {
                        ...baseStyle,
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${paradoxBackground})`
                    };
                }
                return {
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${paradoxBackground})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                };
            case "instagram":
                if (forPage) {
                    return {
                        ...baseStyle,
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${instagramBackground})`
                    };
                }
                return {
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${instagramBackground})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                };
            case "babyshield":
                if (forPage) {
                    return {
                        ...baseStyle,
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${babyshieldBackground})`
                    };
                }
                return {
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${babyshieldBackground})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                };
            case "orderdine":
                if (forPage) {
                    return {
                        ...baseStyle,
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${orderdineBackground})`
                    };
                }
                return {
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${orderdineBackground})`,
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
            case 'MongoDB':
                return LogoMongo
            case 'Heroku':
                return LogoHeroku
            case 'Java Script':
                return LogoJs
            case 'Dropbox':
                return LogoDropbox
            case 'Whatsapp':
                return LogoWhatsapp
            case 'Twilio':
                return LogoTwilio
            case 'Gmail':
                return LogoGmail
            case 'Redux':
                return LogoRedux
            case 'Node.js':
                return LogoNodejs; // Replace with actual path
            // Add more cases for other technologies
            default:
                return '/path-to-default-logo.png'; // A default logo if needed
        }
    };

    return (
        <div className="  projects-page" style={getBackgroundStyle(projects[activeProject].id, true)}>
            <div className='projects-background'>
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
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={GitHubIcon}
                                            alt="GitHub"
                                            style={{ cursor: 'pointer' , height: '30px'}}
                                        />
                                    </a>
                            </div>
                            {index === activeProject && (
                                <div className="project-details">
                                    {/* <img className='img' src={projects[activeProject].image} alt={projects[activeProject].title} /> */}

                                    <p>{projects[activeProject].description}</p>
                                    {/* <p>{projects[activeProject].built}</p> */}

                                    {/* <p className="credentials">{projects[activeProject].credentials}</p> */}
                                    {/* <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Try Me Out!
                                    </a> */}


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
                    <div className="arrow left" onClick={() => handleSwipe('left')}>&lt;</div>
                    <div className="arrow right" onClick={() => handleSwipe('right')}>&gt;</div>
                </div>
            </div>



            {/* {showModal && <Modal selectedImage={selectedImage} setShowModal={setShowModal} />} */}
        </div>
    );
};

export default Projects;



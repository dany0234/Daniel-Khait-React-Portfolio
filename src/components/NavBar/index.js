import React, { useState } from 'react';
import './index.scss';
import LogoD from '../../assets/images/logo-daniel-khait.png';
import LinkedInIcon from '../../assets/icons/linkedin.svg';
import GitHubIcon from '../../assets/icons/github.svg';
import hamburgerIcon from '../../assets/icons/hamburger-icon.png';

const NavBar = ({ onNavigate, activeSection }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <div className={`nav-bar ${isNavExpanded ? 'expanded' : ''}`}>
            <div className="nav-toggle" onClick={toggleNav}>
                <img src={hamburgerIcon} alt="menu" />
            </div>
            <div className="nav-brand">
                <img src={LogoD} alt="logo" />
            </div>
            <div className="nav-links">
                <a onClick={() => onNavigate('home')} className={activeSection === 'home' ? 'active' : ''} >Home</a>
                <a onClick={() => onNavigate('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a onClick={() => onNavigate('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                <a onClick={() => onNavigate('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact Me</a>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/daniel-khait" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/dany0234" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" />
                </a>
            </div>
        </div>
    );
}

export default NavBar;

import React from 'react';
import './index.scss';
import LogoD from '../../assets/images/logo-daniel-khait.png';
import LinkedInIcon from '../../assets/icons/linkedin.svg';
import GitHubIcon from '../../assets/icons/github.svg';

const NavBar = ({ onNavigate, activeSection }) => {
    return (
        <div className="nav-bar">
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

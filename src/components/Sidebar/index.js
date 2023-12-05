import React, { useState } from 'react';
import './index.scss';
import LogoD from '../../assets/images/logo-d4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ({ activePage, setActivePage }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (

        <div className={`nav-bar ${isSidebarOpen ? 'open' : ''}`}>
            <div className='toggle-button' onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} color="#fff" />
            </div>
            <div className='logo' onClick={() => setActivePage('home')}>
                <img src={LogoD} alt="logo" />
                {/* <img className='sub-logo' src={LogoSubtitle} alt="Daniel Khait" /> */}
            </div>

            <nav>
                <div className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </div>
                <div className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </div>
                <div className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </div>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/daniel-khait'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/dany0234'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

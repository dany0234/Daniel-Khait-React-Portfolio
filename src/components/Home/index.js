import React, { useEffect, useState } from 'react';
import './index.scss';
import LogoTitle from '../../assets/images/logo-d6.png';
import LinkedInIcon from '../../assets/icons/linkedin.svg';
import GitHubIcon from '../../assets/icons/github.svg';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home = ({ onNavigate }) => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'n', 'i', 'e', 'l', ' ', 'K', 'h', 'a', 'i', 't'];
    // const nameArray = ['H','i',' ','I','m',' ','D','a', 'n', 'i', 'e', 'l', ' ', 'K', 'h', 'a', 'i', 't'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

    useEffect(() => {
        // Set initial animation
        setLetterClass('text-animate');

        // Switch to hover animation after initial animation
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000); // Adjust time based on total animation duration

        return () => clearTimeout(timer);
    }, []);

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/your-profile', '_blank');
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/yourusername', '_blank');
    };

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className='logo-container-word'><img src={LogoTitle} alt="developer" /></span>
                    {/* <span className='logo-container-word'><img src={LogoTitle} alt="developer" /></span> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                </h1>

                <h2> Fullstack Developer / Integration Engineer / JavaScript Expert </h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>

            <div className="navigation-buttons">
                {/* <div className='link-buttons'>
                    <LinkedInIcon onClick={handleLinkedInClick} />
                    <GitHubIcon onClick={handleGitHubClick} />
                </div> */}
                <div className='link-buttons'>
                    <img 
                        src={LinkedInIcon} 
                        alt="LinkedIn" 
                        onClick={handleLinkedInClick}
                        style={{ cursor: 'pointer' }} 
                    />
                    <img 
                        src={GitHubIcon} 
                        alt="GitHub" 
                        onClick={handleGitHubClick}
                        style={{ cursor: 'pointer' }} 
                    />
                </div>
                <button onClick={() => onNavigate('about')}>About</button>
                <button onClick={() => onNavigate('projects')}>Projects</button>
            </div>
        </div>
    );
}

export default Home;
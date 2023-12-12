import React,  { useState, useEffect, useRef } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import { Link } from 'react-scroll';

function App() {
  const [homeAnimationKey, setHomeAnimationKey] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const homeSectionRef = useRef(); // Ref for the home section

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.isIntersecting && entry.target.id === 'home') {
              setHomeAnimationKey(prevKey => prevKey + 1);
            }
          }
        });
      },
      { 
        threshold: 0.5
      }
    );
  
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  
    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  

  return (
    <div className='App'>
      <NavBar onNavigate={handleNavigate} activeSection={activeSection} />
      <div id="home" ref={sectionRefs.home} className='section'>
        <Home key={homeAnimationKey} onNavigate={handleNavigate} />
      </div>
      <div id="about" ref={sectionRefs.about} className='section'><About /></div>
      <div id="projects" ref={sectionRefs.projects} className='section'><Projects /></div>
      <div id="contact" ref={sectionRefs.contact} className='section'><Contact /></div>
    </div>
  );
  
}


export default App;

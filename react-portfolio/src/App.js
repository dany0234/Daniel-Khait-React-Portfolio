import React,  { useState, useEffect, useRef } from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import { Link } from 'react-scroll';

function App() {
  const [homeAnimationKey, setHomeAnimationKey] = useState(0);
  const homeSectionRef = useRef(); // Ref for the home section

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.target.id === 'home') {
        setHomeAnimationKey(prevKey => prevKey + 1);
      }
    }, { threshold: 0.5 });
  
    const currentHomeSection = homeSectionRef.current;
  
    if (currentHomeSection) {
      observer.observe(currentHomeSection);
    }
  
    return () => {
      if (currentHomeSection) {
        observer.unobserve(currentHomeSection);
      }
    };
  }, []);

  return (
    <div className='App'>
      <div id="home" className='section' ref={homeSectionRef}>
        <Home key={homeAnimationKey} onNavigate={handleScroll}/>
      </div>
      <div id="about" className='section'><About /></div>
      <div id="projects" className='section'><Projects /></div>
      <div id="contact" className='section'><Contact /></div>
    </div>
  );
}


export default App;

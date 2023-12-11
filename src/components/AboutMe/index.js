import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import './../Layout/index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  
  return (
      <div className="container about-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I am a recent 2023 graduate from Ort Braude College, where I earned my BSc in Software Engineering with an average grade of 86. </p>
          <p>My journey in the tech industry has already begun with a fulfilling role at Paradox, where I've been working as a Fullstack Developer for the last six months. </p>
          <p>During my tenure at Paradox, I have successfully built two web projects, details of which I will elaborate on in the projects section. </p>
          <p>Recently, I made a significant move from Nahariya in the north to Tel Mond in the central district, marking a new chapter both personally and professionally.</p>
          <p>Outside of my professional pursuits, I am an anime enthusiast, an animal lover, and a devoted fan of Macabbi Haifa FC. </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
  )
}

export default About

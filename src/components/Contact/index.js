import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <p>I'm currently open to opportunities and collaborations. Feel free to reach out!</p>

        <div className="contact-details">
          <p><i className="fas fa-envelope"></i> dany0234@gmail.com</p>
          <p><i className="fas fa-phone"></i> +972 524596572</p>
          <p><i className="fas fa-map-marker-alt"></i> Hanotea, Tel Mond, Israel</p>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </div>
  )
}

export default Contact

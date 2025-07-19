import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.JPG';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='hero'>
      {/* Particle Glow Background */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div
        className="hero-glow"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 144, 226, 0.15) 0%, transparent 50%)`
        }}
      ></div>

      {/* Profile Presentation */}
      <div className="profile-container">
        {[1, 2, 3].map(i => <div key={i} className={`profile-ring ring-${i}`}></div>)}
        <div className="profile-glow"></div>
        <img src={profile_img || "/placeholder.svg"} alt="Profile" className="profile-image" />
        <div className="profile-stars">
          {['✦', '✧', '✦', '✧'].map((star, i) => (
            <div key={i} className={`profile-star star-${i + 1}`}>{star}</div>
          ))}
        </div>
      </div>

      {/* Hero Text Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          <span className="title-line">
            <span className="word-highlight">Hey! I'm</span>
            <span className="name-highlight"> Vidath Theekshana</span>
          </span>
          <span className="title-line">
            <Typewriter
              options={{
                strings: ['Software Engineering Intern', 'React Developer 💻', 'UI/UX Lover ✨'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h1>

        <p className="hero-description">
          Currently an undergraduate at
          <span className="university-highlight"> SLIIT</span>, passionate about building
          <span className="degree-highlight"> immersive digital experiences</span>.
        </p>

        {/* Buttons */}
        <motion.div
          className="hero-action"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button className="hero-connect">
            <span className="button-text">Connect With Me</span>
            <div className="button-glow"></div>
            <div className="button-particles">
              {[...Array(3)].map((_, i) => <span key={i} className="btn-particle"></span>)}
            </div>
          </button>

          <button className="hero-resume">
            <span className="button-text">Download CV</span>
            <div className="button-border"></div>
            <div className="button-shine"></div>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="scroll-arrow">
          {[...Array(3)].map((_, i) => <span key={i}></span>)}
        </div>
        <p>Scroll to explore more</p>
      </motion.div>
    </div>
  );
};

export default Hero;
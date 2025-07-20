import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.JPG';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentTime, setCurrentTime] = useState(new Date());

  // Track mouse movement for background glow
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

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Greeting based on time
  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning 🌞";
    if (hour < 18) return "Good Afternoon ☀️";
    return "Good Evening 🌙";
  };

  return (
    <div className='hero'>
      {/* Clock Display */}
      <div className="hero-clock">
        🕒 {currentTime.toLocaleTimeString('en-US', { hour12: false })} 
      </div>
      <div className="clock-date">
        🗓️ {currentTime.toLocaleDateString('en-GB', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </div>

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
        <div className="profile-ring ring-1"></div>
        <div className="profile-ring ring-2"></div>
        <div className="profile-ring ring-3"></div>
        <div className="profile-glow"></div>
        <img src={profile_img || "/placeholder.svg"} alt="Profile" className="profile-image pulse-animation" />
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
            <span className="word-highlight">{greeting()}</span>
          </span>
          <span className="title-line">
            I'm
          </span>
          <span className="name-highlight glow-text"> Vidath Theekshana</span>
        
          <span className="title-line">
            <Typewriter
              options={{
                strings: ['Computer Science </>', 'Full-Stack Developer ⚛️', 'UI/UX Lover ✨'],
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
          <a href="#contact" className="hero-connect" style={{ textDecoration: "none" }}>
            <span className="button-text">Connect With Me</span>
            <div className="button-glow"></div>
            <div className="button-particles">
              {[...Array(3)].map((_, i) => <span key={i} className="btn-particle"></span>)}
            </div>
          </a>

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
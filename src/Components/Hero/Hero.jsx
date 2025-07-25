"use client"

import { useState, useEffect } from "react"
import "./Hero.css"
// import TypewriterEffect from "./TypewriterEffect" // Assuming TypewriterEffect is in the same directory
import profileimg from "../../assets/profile.JPG"
import { p } from "framer-motion/client"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Track mouse movement for background glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.navbar')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Greeting based on time
  const greeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good Morning 🌞"
    if (hour < 18) return "Good Afternoon ☀️"
    return "Good Evening 🌙"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="hero">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Vidath</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>

          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Beautiful Clock Display - Adjusted positioning */}
      <div className="clock-display">
        <div className="time-container">
          <div className="time-card">
            <div className="time-icon">⏰</div>
            <div className="time-content">
              <div className="time-value">
                {currentTime.toLocaleTimeString("en-US", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
              <div className="time-label">Local Time</div>
            </div>
            <div className="time-glow"></div>
          </div>
        </div>

        <div className="date-container">
          <div className="date-card">
            <div className="date-icon">📅</div>
            <div className="date-content">
              <div className="date-value">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="date-year">{currentTime.getFullYear()}</div>
            </div>
            <div className="date-glow"></div>
          </div>
        </div>
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
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 144, 226, 0.15) 0%, transparent 50%)`,
        }}
      ></div>

      {/* Profile Presentation */}
      <div className="profile-container">
        <div className="profile-ring ring-1"></div>
        <div className="profile-ring ring-2"></div>
        <div className="profile-ring ring-3"></div>
        <div className="profile-glow"></div>
        <img src={profileimg} alt="Profile" className="profile-image pulse-animation" />
        <div className="profile-stars">
          {["✦", "✧", "✦", "✧"].map((star, i) => (
            <div key={i} className={`profile-star star-${i + 1}`}>
              {star}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">
            <span className="word-highlight">{greeting()}</span>
          </span>
          <span className="title-line">I'm</span>
          <span className="name-highlight glow-text"> Vidath Theekshana</span>
          <span className="title-line">
            <TypewriterEffect />
          </span>
        </h1>

        <p className="hero-description">
          Currently an undergraduate at
          <span className="university-highlight"> SLIIT</span>, passionate about building
          <span className="degree-highlight"> immersive digital experiences</span>.
        </p>

        {/* Buttons */}
        <div className="hero-action">
          <a href="#contact" className="hero-connect" style={{ textDecoration: "none" }}>
            <span className="button-text">Connect With Me</span>
            <div className="button-glow"></div>
            <div className="button-particles">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="btn-particle"></span>
              ))}
            </div>
          </a>
          <button className="hero-resume">
            <span className="button-text">Download CV</span>
            <div className="button-border"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          {[...Array(3)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <p>Scroll to explore more</p>
      </div>
    </div>
  )
}

// Typewriter Effect Component
const TypewriterEffect = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["Computer Science </>", "Full-Stack Developer ⚛️", "UI/UX Lover ✨"]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span className="typewriter-container">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

export default Hero

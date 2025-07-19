"use client"

import { useState, useEffect, useRef } from "react"
import "./About.css"
import about from "../../assets/about.PNG"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (skillsRef.current) skillsObserver.observe(skillsRef.current)

    return () => {
      observer.disconnect()
      skillsObserver.disconnect()
    }
  }, [])

  const skills = [
    { name: "HTML & CSS", level: 85, delay: "0s" },
    { name: "React JS", level: 90, delay: "0.2s" },
    { name: "JavaScript", level: 80, delay: "0.4s" },
    { name: "Next JS", level: 75, delay: "0.6s" },
  ]

  const achievements = [
    { number: "2+", label: "Years of Experience", icon: "🚀" },
    { number: "10+", label: "Projects Completed", icon: "💼" },
    { number: "15+", label: "Happy Clients", icon: "😊" },
  ]

  return (
    <div className="about" ref={aboutRef}>
      {/* Floating background elements */}
      <div className="about-background">
        <div className="floating-orb orb-about-1"></div>
        <div className="floating-orb orb-about-2"></div>
        <div className="constellation-about"></div>
      </div>

      {/* Title Section */}
      <div className={`about-title ${isVisible ? "animate-in" : ""}`}>
        <div className="title-container">
          <h1 className="section-title">
            <span className="title-word">About</span>
            <span className="title-word highlight">Me</span>
          </h1>
          <div className="title-decoration">
            <div className="star-decoration">✦</div>
            <div className="line-decoration"></div>
            <div className="star-decoration">✧</div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className={`about-section ${isVisible ? "animate-in" : ""}`}>
        {/* Left Column - Image */}
        <div className="about-left">
          <div className="image-container">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img src={about || "/placeholder.svg?height=525&width=335"} alt="About Profile" className="about-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-particles">
              <div className="particle p-1">✦</div>
              <div className="particle p-2">✧</div>
              <div className="particle p-3">✦</div>
              <div className="particle p-4">✧</div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="about-right">
          <div className="about-content">
            <div className="about-para">
              <p className="para-text">
                I'm an <span className="highlight-text">enthusiastic computer science undergraduate</span> at SLIIT with a passion for frontend development.
              </p>
              <p className="para-text">
                I enjoy creating <span className="highlight-text">responsive, user-friendly web interfaces</span> using modern technologies like React and JavaScript.
              </p>
            </div>

            {/* Skills Section */}
            <div className="about-skills" ref={skillsRef}>
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="about-skill" style={{ animationDelay: skill.delay }}>
                    <div className="skill-info">
                      <p className="skill-name">{skill.name}</p>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress-bg"></div>
                      <div
                        className={`skill-progress ${skillsAnimated ? "animate" : ""}`}
                        style={{
                          width: skillsAnimated ? `${skill.level}%` : "0%",
                          animationDelay: skill.delay,
                        }}
                      ></div>
                      <div className="skill-glow"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className={`about-achievements ${isVisible ? "animate-in" : ""}`}>
        {achievements.map((achievement, index) => (
          <div key={achievement.label} className="achievement-item">
            <div className="achievement-content">
              <div className="achievement-icon">{achievement.icon}</div>
              <h1 className="achievement-number">{achievement.number}</h1>
              <p className="achievement-label">{achievement.label}</p>
              <div className="achievement-glow"></div>
            </div>
            {index < achievements.length - 1 && <div className="achievement-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

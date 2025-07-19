"use client"

import { useState, useEffect, useRef } from "react"
import "./Services.css"
import Services_Data from "../data/services_data" // Using the new data file

// Simple SVG for arrow icon
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
)

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the component is visible
    )

    const currentRef = servicesRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div className="services" id="services" ref={servicesRef}>
      {/* Floating background elements */}
      <div className="services-background">
        <div className="floating-orb orb-services-1"></div>
        <div className="floating-orb orb-services-2"></div>
        <div className="constellation-services"></div>
      </div>

      {/* Title Section */}
      <div className={`services-title ${isVisible ? "animate-in" : ""}`}>
        <div className="title-container">
          <h1 className="section-title">
            <span className="title-word">My</span>
            <span className="title-word highlight">Services</span>
          </h1>
          <div className="title-decoration">
            <div className="star-decoration">✦</div>
            <div className="line-decoration"></div>
            <div className="star-decoration">✧</div>
          </div>
        </div>
      </div>

      {/* Services Container */}
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className={`service-card ${isVisible ? "animate-in" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-inner">
              <div className="service-number">
                <h3>{service.s_no}</h3>
                <div className="number-glow"></div>
              </div>
              <div className="service-content">
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                  <p>Read More</p>
                  <ArrowIcon />
                  <div className="arrow-trail"></div>
                </div>
              </div>
              <div className="card-border-effect"></div>
              <div className="card-shine"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

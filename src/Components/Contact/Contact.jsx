"use client"

import { useState, useEffect, useRef } from "react"
import "./Contact.css"
import { Mail, Phone, MapPin, Send } from "lucide-react" // Using Lucide React icons

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the component is visible
    )

    const currentRef = contactRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    alert("Message sent! (This is a placeholder. Implement your actual submission logic.)")
    e.target.reset() // Clear the form
  }

  return (
    <div className="contact" id="contact" ref={contactRef}>
      {/* Floating background elements */}
      <div className="contact-background">
        <div className="floating-orb orb-contact-1"></div>
        <div className="floating-orb orb-contact-2"></div>
        <div className="constellation-contact"></div>
      </div>

      {/* Title Section */}
      <div className={`contact-title ${isVisible ? "animate-in" : ""}`}>
        <div className="title-container">
          <h1 className="section-title">
            <span className="title-word">Get in</span>
            <span className="title-word highlight">Touch</span>
          </h1>
          <div className="title-decoration">
            <div className="star-decoration">✦</div>
            <div className="line-decoration"></div>
            <div className="star-decoration">✧</div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`contact-section ${isVisible ? "animate-in" : ""}`}>
        {/* Left Column - Contact Details */}
        <div className="contact-left">
          <h1 className="contact-left-title">Let's talk</h1>
          <p className="contact-left-description">
            Interested in working together or have any questions? I’m just a message away — feel free to contact me!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="icon-wrapper">
                <Mail size={28} className="contact-icon" />
                <div className="icon-glow"></div>
              </div>
              <p>vidaththeekshana@gmail.com</p>
            </div>
            <div className="contact-detail">
              <div className="icon-wrapper">
                <Phone size={28} className="contact-icon" />
                <div className="icon-glow"></div>
              </div>
              <p>(+94) 788243686</p>
            </div>
            <div className="contact-detail">
              <div className="icon-wrapper">
                <MapPin size={28} className="contact-icon" />
                <div className="icon-glow"></div>
              </div>
              <p>Piliyandala, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="contact-right" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" name="name" required />
            <div className="input-border"></div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" name="email" required />
            <div className="input-border"></div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>
            <div className="input-border"></div>
          </div>

          <button type="submit" className="contact-submit">
            <span className="button-text">Submit Now</span>
            <Send size={20} className="send-icon" />
            <div className="submit-glow"></div>
            <div className="submit-particles">
              <span className="btn-particle"></span>
              <span className="btn-particle"></span>
              <span className="btn-particle"></span>
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

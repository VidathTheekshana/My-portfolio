"use client"

import { useState, useEffect, useRef } from "react"
import "./Footer.css"
import { Linkedin, Github, Twitter, ChevronUp } from "lucide-react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer to detect footer visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const currentRef = footerRef.current
    if (currentRef) observer.observe(currentRef)

    // Scroll event handler to show/hide scroll-to-top button
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup on unmount
    return () => {
      if (currentRef) observer.unobserve(currentRef)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="footer" ref={footerRef}>
      {/* Background Elements */}
      <div className="footer-background">
        <div className="floating-orb orb-footer-1"></div>
        <div className="floating-orb orb-footer-2"></div>
        <div className="shooting-star shooting-star-footer"></div>
      </div>

      {/* Main Content */}
      <div className={`footer-content ${isVisible ? "animate-in" : ""}`}>
        {/* Top Section: Brand and Socials */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <div className="footer-logo-glow"></div>
              <div className="footer-logo">
                <span className="footer-logo-text">V</span>
              </div>
            </div>
            <p className="footer-description">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="GitHub"
            >
              <Github size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="Twitter"
            >
              <Twitter size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Bottom Section: Navigation and Copyright */}
        <div className="footer-bottom">
          <nav aria-label="Footer navigation">
            <ul className="footer-nav-links">
              {navLinks.map(({ name, href }, idx) => (
                <li key={idx}>
                  <a href={href} className="footer-nav-link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Vidath Theekshana. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollToTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={28} />
        <div className="scroll-to-top-glow"></div>
      </button>
    </footer>
  )
}

export default Footer
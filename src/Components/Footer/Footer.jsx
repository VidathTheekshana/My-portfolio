"use client"

import { useState, useEffect, useRef } from "react"
import "./Footer.css"
import { Linkedin, Github, ChevronUp } from "lucide-react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const currentRef = footerRef.current
    if (currentRef) observer.observe(currentRef)

    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

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
    { name: "About Me", href: "#about-me" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
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
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vidath-theekshana/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/VidathTheekshana"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="GitHub"
            >
              <Github size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>

            {/* Facebook (inline SVG with gradient fill) */}
            <a
              href="https://www.facebook.com/vidath.2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="social-icon"
              >
                <defs>
                  <linearGradient id="fb-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4a90e2" />
                    <stop offset="100%" stopColor="#87ceeb" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#fb-gradient)"
                  d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.098 2.797.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.6 1.324-1.342V1.342C24 .6 23.405 0 22.675 0z"
                />
              </svg>
              <div className="social-icon-glow"></div>
            </a>

            {/* Instagram (inline SVG with gradient fill) */}
            <a
              href="https://www.instagram.com/vidath._.t/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="social-icon"
              >
                <defs>
                  <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4a90e2" />
                    <stop offset="100%" stopColor="#87ceeb" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig-gradient)"
                  d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.68 3.5 4 5.18 4 7.25v8.5c0 2.07 1.68 3.75 3.75 3.75h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5c0-2.07-1.68-3.75-3.75-3.75h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
                />
              </svg>
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
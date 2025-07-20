"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

// Simple icons as components
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About Me", "Services", "Projects", "Contact"]

  // Generate random stars
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className="star"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ))
  }

  return (
    <>
      {/* Starry Night Background */}
      <div className="background-container">
        <div className="night-sky-bg"></div>

        {/* Stars layers */}
        <div className="stars-layer stars-small">{generateStars(100)}</div>
        <div className="stars-layer stars-medium">{generateStars(50)}</div>
        <div className="stars-layer stars-large">{generateStars(20)}</div>

        {/* Shooting stars */}
        <div className="shooting-stars">
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
        </div>

        {/* Nebula effects */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>

        {/* Constellation lines */}
        <div className="constellation constellation-1"></div>
        <div className="constellation constellation-2"></div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-content" style={{ display: "flex", alignItems: "center" }}>
            {/* Logo */}
            <div className="logo-container" style={{ flexShrink: 0 }}>
              <div className="logo-glow"></div>
              <div className="logo">
                <span className="logo-text">V</span>
              </div>
            </div>

            {/* Centered Desktop Navigation */}
            <div className="nav-menu-desktop" style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <div className="nav-items" style={{ display: "flex", gap: "30px" }}>
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="nav-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="nav-item-text">{item}</span>
                    <div className="nav-item-bg"></div>
                    <div className="nav-item-underline"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-button" style={{ flexShrink: 0 }}>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-toggle">
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="mobile-menu-content">
            <div className="mobile-nav-items">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="mobile-nav-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
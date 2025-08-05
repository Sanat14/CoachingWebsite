import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "./ui/button"
import React from "react"
import "./header.css"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-flex">
          {/* Logo - Far Left */}
          <div className="logo-container">
            <div className="logo-icon">
              <GraduationCap className="h-6 w-6 text-emerald-600" style={{ height: '1.5rem', width: '1.5rem', color: '#059669' }} />
            </div>
            <span className="logo-text">GREAT</span>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="desktop-nav">
            <button
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("register")}
            >
              Register
            </button>
            <button
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Right */}
          <div className="desktop-cta">
            <Button 
              onClick={() => scrollToSection("register")} 
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            >
              {isMenuOpen ? <X className="h-6 w-6" style={{ height: '1.5rem', width: '1.5rem' }} /> : <Menu className="h-6 w-6" style={{ height: '1.5rem', width: '1.5rem' }} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-content">
              <button
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("register")}
              >
                Register
              </button>
              <button
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
              <div className="mobile-cta">
                <Button
                  onClick={() => scrollToSection("register")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "./ui/button"
import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./header.css"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      navigate("/")
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleHomeClick = () => {
    // Navigate to home and scroll to top
    navigate("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
    setIsMenuOpen(false)
  }

  const handleInstructorsClick = () => {
    // Navigate to instructors and scroll to top
    navigate("/instructors")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
    setIsMenuOpen(false)
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-flex">
          {/* Logo - Far Left */}
          <div className="logo-container">
            <Link to="/" className="flex items-center" onClick={handleHomeClick}>
              <div className="logo-icon">
                <GraduationCap className="h-6 w-6 text-emerald-600" style={{ height: '1.5rem', width: '1.5rem', color: '#059669' }} />
              </div>
              <span className="logo-text">GREAT</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="desktop-nav">
            <button
              onClick={handleHomeClick}
              className={isActive("/") ? "active" : ""}
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
            <button
              onClick={handleInstructorsClick}
              className={isActive("/instructors") ? "active" : ""}
            >
              Instructors
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
                onClick={handleHomeClick}
                className={isActive("/") ? "active" : ""}
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
              <button
                onClick={handleInstructorsClick}
                className={isActive("/instructors") ? "active" : ""}
              >
                Instructors
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

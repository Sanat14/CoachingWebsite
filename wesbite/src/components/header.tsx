import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "./ui/button"
import React from "react"

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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Far Left */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-wide">GREAT</span>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex space-x-8 mx-auto">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-base cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-base cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-base cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("register")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-base cursor-pointer"
            >
              Register
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-base cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => scrollToSection("register")} 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-emerald-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200 shadow-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors w-full text-left rounded-lg font-medium text-base cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors w-full text-left rounded-lg font-medium text-base cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors w-full text-left rounded-lg font-medium text-base cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("register")}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors w-full text-left rounded-lg font-medium text-base cursor-pointer"
              >
                Register
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors w-full text-left rounded-lg font-medium text-base cursor-pointer"
              >
                Contact
              </button>
              <div className="px-4 py-3">
                <Button
                  onClick={() => scrollToSection("register")}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
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

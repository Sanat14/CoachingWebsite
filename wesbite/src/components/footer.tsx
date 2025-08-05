

import { GraduationCap, MapPin, Clock } from "lucide-react"
import React from "react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-10 w-10 text-emerald-400" />
              <span className="text-3xl font-bold tracking-wide">GREAT</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering students to achieve academic excellence through quality education and personalized attention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("register")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mathematics Classes</li>
              <li>English Classes</li>
              <li>Science Classes</li>
              <li>Irish Classes</li>
              <li>Practice Worksheets</li>
              <li>Progress Assessment</li>
              <li>Exam Preparation</li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-center">Class Locations</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tuesday Location */}
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-emerald-400 mr-3" />
                <h4 className="font-semibold text-emerald-400 text-lg">Tuesday Classes</h4>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400 space-y-1">
                    <p className="font-medium">GAA Sports Club</p>
                    <p>Salthill, Galway</p>
                    <p className="text-sm text-gray-500">H91 T0F6</p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <a
                  href="https://maps.google.com/?q=GAA+Sports+Club+Salthill+Galway+H91+T0F6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-200"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Saturday Location */}
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-emerald-400 mr-3" />
                <h4 className="font-semibold text-emerald-400 text-lg">Saturday Classes</h4>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400 space-y-1">
                    <p className="font-medium">Ballinfoyle Community Centre</p>
                    <p>Headford Road, Galway</p>
                    <p className="text-sm text-gray-500">H91 PN50</p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <a
                  href="https://maps.google.com/?q=Ballinfoyle+Community+Centre+Headford+Road+Galway+H91+PN50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-200"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GREAT Tuition Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

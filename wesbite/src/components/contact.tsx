import React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Contact form data:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      title: "Phone",
      details: ["+353 87 270 9930"],
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      details: ["greattuitioncentre@gmail.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      title: "Hours",
      details: ["Tuesday: 16:00 - 18:00", "Saturday: 10:00 - 12:00"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? We're here to help! Get in touch with us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-base">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => {
                    if (info.title === "Phone") {
                      return (
                        <a
                          key={detailIndex}
                          href={`tel:${detail}`}
                          className="text-gray-600 text-base leading-tight hover:text-emerald-600 transition-colors duration-200 underline"
                        >
                          {detail}
                        </a>
                      )
                    } else if (info.title === "Email") {
                      return (
                        <a
                          key={detailIndex}
                          href={`mailto:${detail}`}
                          className="text-gray-600 text-base leading-tight hover:text-emerald-600 transition-colors duration-200 underline"
                        >
                          {detail}
                        </a>
                      )
                    } else {
                      return (
                        <p key={detailIndex} className="text-gray-600 text-base leading-tight">
                          {detail}
                        </p>
                      )
                    }
                  })}
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg max-w-2xl mx-auto">
              <h4 className="font-semibold text-gray-900 mb-2 text-center">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm text-center">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

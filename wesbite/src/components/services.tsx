import { Calculator, BookOpen, FileText, BarChart3, Atom, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import React from "react"

export function Services() {
  const services = [
    {
      icon: <Calculator className="h-8 w-8 text-emerald-600" />,
      title: "Mathematics Classes",
      description: "Comprehensive math programs covering all topics from basic arithmetic to advanced calculus.",
      features: ["All grade levels", "Problem-solving techniques", "Concept building", "Exam preparation"],
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: "English Classes",
      description: "Complete English language programs focusing on grammar, vocabulary, and communication skills.",
      features: ["Reading comprehension", "Writing skills", "Grammar mastery", "Speaking confidence"],
    },
    {
      icon: <Atom className="h-8 w-8 text-emerald-600" />,
      title: "Science Classes",
      description: "Physics and Chemistry programs designed to build strong scientific foundations and critical thinking.",
      features: ["Physics fundamentals", "Chemistry concepts", "Scientific method"],
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Irish Classes",
      description: "Comprehensive Irish language programs for all levels, from beginners to advanced learners.",
      features: ["Grammar & vocabulary", "Speaking practice", "Cultural context", "Exam preparation"],
    },
    {
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      title: "Practice Worksheets",
      description: "Carefully designed worksheets that reinforce classroom learning and build strong foundations.",
      features: ["Topic-wise practice", "Graded difficulty", "Answer keys provided", "Regular updates"],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: "Progress Assessment",
      description: "Regular testing and evaluation to track student progress and identify improvement areas.",
      features: ["Topic-wise tests", "Performance analysis", "Progress reports", "Parent feedback"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational services designed to help students excel in Mathematics, English, Science, and Irish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join lots of students who have improved their Math, English, Science, and Irish skills with GREAT Coaching Center
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

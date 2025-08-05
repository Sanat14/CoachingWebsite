import { CheckCircle, Award, Target, Heart } from "lucide-react"
import React from "react"

export function About() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: "Comprehensive Curriculum",
      description: "Complete Math, English, Science and Irish programs designed for all age groups and skill levels.",
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "Quality Worksheets",
      description: "Carefully crafted worksheets that reinforce learning and build strong foundations.",
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: "Regular Assessments",
      description: "Topic-wise tests to track progress and identify areas for improvement.",
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Personalized Attention",
      description: "Individual focus to ensure every student reaches their full potential.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About GREAT Coaching Center</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing exceptional education in Mathematics, English, Science (Physics & Chemistry) and Irish, helping students of all ages
            achieve academic excellence through proven teaching methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-4 rounded-2xl max-w-md mx-auto">
              <img
                src="/TeacherHelp.jpg"
                alt="Teacher helping students"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Why Choose GREAT?</h3>
            <div className="space-y-6">
              <div className="flex items-start p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg flex-shrink-0 mr-4">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong>Expert Teachers:</strong> Qualified instructors with years of experience in Math, English, Science, and Irish education.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg flex-shrink-0 mr-4">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong>Proven Methods:</strong> Time-tested teaching techniques that ensure concept clarity and retention.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg flex-shrink-0 mr-4">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong>Flexible Learning:</strong> Programs tailored for different age groups and learning paces.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg flex-shrink-0 mr-4">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong>Progress Tracking:</strong> Regular tests and feedback to monitor student development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

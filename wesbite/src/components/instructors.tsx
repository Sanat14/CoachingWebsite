import React from "react"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useNavigate } from "react-router-dom"

interface Instructor {
  id: string
  name: string
  role: string
  description: string
  imageUrl: string
  specialties: string[]
}

const instructors: Instructor[] = [
  {
    id: "garima",
    name: "Garima Gupta",
    role: "English & Math Instructor (Younger Students)",
    description: "Garima is a dedicated educator specializing in teaching English and Math to younger students. She excels at making foundational concepts accessible and engaging, helping children build strong language and numeracy skills early on. Her nurturing approach fosters confidence and a love for learning in her students.",
    imageUrl: "/instructors/garima-gupta.jpg", // Placeholder - you'll add actual image
    specialties: [
      "Early Math Skills",
      "English for Young Learners",
      "Engaging Young Minds"
    ]
  },
  {
    id: "patrick",
    name: "Patrick",
    role: "English & Irish Specialist",
    description: "Patrick is an adaptable and skilled professional with excellent instructional and communication abilities, adept at tailoring learning experiences to diverse individual needs. Demonstrates a keen ability to read the room and engage effectively by meeting students at their level. Committed to fostering an inclusive and supportive environment that promotes growth and understanding.",
    imageUrl: "/instructors/patrick.jpg", // Placeholder - you'll add actual image
    specialties: [
      "English Language",
      "Irish Language",
      "Inclusive Teaching"
    ]
  },
  {
    id: "febi",
    name: "Febi",
    role: "Math, Physics & Chemistry Instructor",
    description: "Febi is an experienced educator who teaches Math, Physics, and Chemistry to students of all age groups. He is skilled at breaking down complex concepts and adapting his teaching style to meet the needs of each learner, ensuring academic success at every level. Febi demonstrates creativity, leadership, and effective communication, having developed interactive curriculums and implemented digital tools to enhance learning.",
    imageUrl: "/instructors/febi.jpg", // Placeholder - you'll add actual image
    specialties: [
      "Math for All Ages",
      "Physics & Chemistry",
      "Advanced Tutoring & Concept Mastery"
    ]
  }
]

export function Instructors() {
  const navigate = useNavigate()

  const handleContactClick = () => {
    // Navigate to home page and scroll to contact section
    navigate("/")
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Instructors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced educators is dedicated to helping you achieve your academic goals. 
            Each instructor brings unique expertise and a passion for teaching that makes learning engaging and effective.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="space-y-16">
          {instructors.map((instructor, index) => (
            <Card key={instructor.id} className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <div className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Instructor Image */}
                  <div className="lg:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-blue-100">
                    <div className="text-center">
                      <Avatar className="w-48 h-48 mx-auto mb-6">
                        <AvatarImage src={instructor.imageUrl} alt={instructor.name} />
                        <AvatarFallback className="text-4xl font-bold bg-emerald-600 text-white">
                          {instructor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {instructor.name}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-lg">
                        {instructor.role}
                      </p>
                    </div>
                  </div>

                  {/* Instructor Details */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {instructor.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Specialties:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {instructor.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Learning?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Connect with our instructors and begin your educational journey today.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={handleContactClick}
                  className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg transition-colors duration-200 hover:bg-emerald-50 hover:shadow-md cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 